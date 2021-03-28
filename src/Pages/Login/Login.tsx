import React, { useContext } from "react";
import {
  Container,
  Row as BootstrapRow,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { iLogin } from "../../types/login";

const Row = styled(BootstrapRow)`
  justify-content: center;
  height: 75vh;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const [cookies] = useCookies(["auth"]);
  const { register, handleSubmit, errors } = useForm();
  // errors : {email : 'error', password : 'error'}

  if (cookies?.auth) {
    return <Redirect to="/personas" />;
  }

  const login = (data: iLogin) => {
    const { email, password } = data;
    auth.login({ email, password });
  };

  return (
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <Col md={6} sm={12}>
          <Form onSubmit={handleSubmit(login)}>
            <Form.Group>
              <Form.Label>Email </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="example@example.com"
                ref={register({ required: true })}
              />
              {errors.email && (
                <ErrorMessage>El correo es requerido</ErrorMessage>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="********"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.password && (
                <ErrorMessage>El password es requerido</ErrorMessage>
              )}
            </Form.Group>
            <Link to="/registro">
              <span className="text-muted">Si no tenes cuenta registrate</span>
            </Link>
            <Button type="submit" variant="primary" className="btn-block mt-3">
              Ingresar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
