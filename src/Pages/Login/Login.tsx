import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const login = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <Col md={6} sm={12}>
          <Form onSubmit={login}>
            <Form.Group>
              <Form.Label>Email *</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="example@example.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password *</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="********"
              />
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
