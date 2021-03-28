import React from "react";
import Login from "../";

import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const renderLoginComponent = () => {
  return render(
    <Router>
      <Login />
    </Router>
  );
};

describe("Login component", () => {
  test("Should be render properly", () => {
    const { getByText } = renderLoginComponent();
    getByText(/email/i);
    getByText(/password/i);
  });

  test("Should validate inputs and show errors", async () => {
    const { getByRole, getByText } = renderLoginComponent();
    fireEvent.click(getByRole("button", { name: /ingresar/i }));

    await waitFor(() => {
      getByText(/el password es requerido/i);
      getByText(/el correo es requerido/i);
    });
  });
});
