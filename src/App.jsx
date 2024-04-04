import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";
import "./App.css";

const initialPeople = [
  {
    name: "Janusz",
    tel: 123456789,
    city: "Warszawa",
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };
  return (
    <>
      <h1>Lista kontaków</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button
          onClick={() => {
            setIsFormShown(true);
          }}
        >
          Dodaj
        </button>
      )}

      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.tel}
            name={person.name}
            tel={person.tel}
            city={person.city}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
