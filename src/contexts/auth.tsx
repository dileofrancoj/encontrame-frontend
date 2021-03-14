import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // children -> validacion de props
import { useCookies } from "react-cookie";

import { iLogin } from "./../types/login";
import { iAuth, defaultState } from "./../types/auth";

type ContextType = {
  auth: iAuth; // name, jwt, auth
  login: (user: iLogin) => void;
  logout: () => void;
};

const contextDefault: ContextType = {
  auth: defaultState,
  login: () => {
    /* nothing to return */
  },
  logout: () => {
    /* nothing to return */
  },
};

export const AuthContext = createContext<ContextType>(contextDefault);

const { Provider } = AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<iAuth>(defaultState);
  const [, setCookie, deleteCookie] = useCookies(["auth", "user"]);
  const logout = (): void => {
    setAuth(defaultState);
    deleteCookie("auth");
    deleteCookie("user");
  };

  const login = (user: iLogin): void => {
    if (user.email === "dileo.francoj@gmail.com" && user.password === "1234") {
      const loginObject = {
        email: user.email,
        name: "franco",
        jwt: "MOCKJWTAUTH",
      };
      const { name, jwt } = loginObject;
      setAuth({ name, jwt, auth: true });
      // seteo las cookies
      setCookie("auth", jwt);
      setCookie("user", name);
    } else {
      logout();
    }
  };
  return <Provider value={{ login, auth, logout }}>{children}</Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
