import React, { useContext } from "react";
import { useHistory } from "react-router";
import { PersonContext } from "../../contexts/person";
import { iPerson } from "../../types/person";
import Person from "../Person/Person";

function randomId(): number {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32;
}
const CreatePerson: React.FC = () => {
  const { addPerson } = useContext(PersonContext);
  const history = useHistory();
  const handleSubmit = (data: iPerson): void => {
    //TODO: PEGARLE AL ENDPOINT PARA DAR DE ALTA USUARIO
    const newPerson: iPerson = {
      id: randomId(),
      name: data.name,
      lastname: data.lastname,
      photo: data.photo[0],
      description: data.description,
      found: false,
      contactTelephone: data.contactTelephone,
      contactName: data.contactName,
      contactEmail: data.contactEmail,
      lastSeen: data.lastSeen,
      height: data.height,
      gender: data.gender,
      zone: "",
      coords: "",
      birthday:data.birthday,
    };
    addPerson(newPerson);
    history.push("/personas");
  };

  return (
    <Person onSubmit={handleSubmit} />
  );
};

export default CreatePerson;