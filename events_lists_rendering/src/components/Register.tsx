import { ChangeEvent, useState } from "react";

interface IPerson {
  firstname: string;
  age: string;
}

export function Register() {
  const [person, setPerson] = useState<IPerson>({ firstname: "", age: "0" });

  function handleClick() {
    console.log("Do something with:", person);

    setPerson({ firstname: "", age: "0" });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let propertyToChange = e.target.name;
    setPerson({ ...person, [propertyToChange]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Förnamn"
        onChange={handleChange}
        name="firstname"
        value={person.firstname}
      />
      <br />
      <input
        type="number"
        placeholder="Ålder"
        onChange={handleChange}
        name="age"
        value={person.age}
      />
      <br />
      <button type="button" onClick={handleClick}>
        Spara
      </button>
    </form>
  );
}
