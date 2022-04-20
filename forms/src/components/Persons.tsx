import { useState } from "react";
import { IPerson } from "../models/IPerson";
import { NewPerson } from "./NewPerson";

export function Persons() {
  const [persons, setPersons] = useState<IPerson[]>([]);

  function addPerson(newPerson: IPerson) {
    setPersons([...persons, newPerson]);
  }

  let htmlTags = persons.map((person, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          console.log("Du klickade på:", person.name);
        }}
      >
        {person.name} - {person.color}
      </li>
    );
  });

  return (
    <>
      <NewPerson save={addPerson}></NewPerson>

      <ul>{htmlTags}</ul>
    </>
  );
}
