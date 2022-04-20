import { ChangeEvent, FormEvent, useState } from "react";
import { IPerson } from "../models/IPerson";
import { IValidation } from "../models/IValidation";

interface INewPersonProps {
  save(p: IPerson): void;
}

export function NewPerson(props: INewPersonProps) {
  const [person, setPerson] = useState<IPerson>({
    name: "",
    age: "0",
    color: "",
  });
  const [validation, setValidation] = useState<IValidation>({
    age: { error: false, message: "" },
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "age") {
      if (+e.target.value < 10 || +e.target.value > 100) {
        setValidation({
          ...validation,
          [e.target.name]: {
            error: true,
            message: "Värdet måste vara mellan 10 och 100",
          },
        });
      } else {
        setValidation({
          ...validation,
          [e.target.name]: {
            error: false,
            message: "",
          },
        });
      }
    }

    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (person) {
      props.save(person);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        name="name"
        type="text"
        placeholder="Namn"
        value={person.name}
        onChange={handleChange}
        required
      />

      <input
        name="age"
        type="number"
        placeholder="Ålder"
        value={person.age}
        onChange={handleChange}
        min="10"
        max="100"
      />
      {validation.age.error && (
        <div className="danger"> {validation.age.message} </div>
      )}

      <input
        name="color"
        type="text"
        placeholder="Favvofärg"
        value={person.color}
        onChange={handleChange}
      />

      <button>Spara</button>
    </form>
  );
}
