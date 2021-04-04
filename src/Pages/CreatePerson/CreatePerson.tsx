import React from "react";
import Person from "../Person/Person";

const CreatePerson: React.FC = () => {
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const { name } = e.target.elements;
    console.log("NAME: ", name);
  };

  return (
    <Person onSubmit={handleSubmit} />
  );
};

export default CreatePerson;