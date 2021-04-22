import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { iPeople, iPerson } from "../types/person";

type addPersonType = (
  person: iPerson,
) => void;

type ContextType = {
  people: iPeople;
  addPerson: addPersonType;
};

const contextDefault: ContextType = {
  people: [],
  addPerson: () => null,
};

export const PersonContext = createContext<ContextType>(contextDefault);

const { Provider } = PersonContext;

export const PersonProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<iPeople>([]);
  const addPerson = (person: iPerson): void => {
    console.log("new received person: ", person);
    setPeople([...people, person]);
  };
  return <Provider value={{people, addPerson}}>{children}</Provider>;
};

PersonProvider.propTypes = {
  children: PropTypes.element.isRequired,
};