import React from "react";
import { Container, Form, Col, Row, Card } from "react-bootstrap";
import { iForm } from "../../types/form";

const Person:React.FC<iForm> = ({ onSubmit }:iForm) => {
  return (
    <Container>
      <Row style={{ justifyContent: "center"}}>
        <Col xs={12}>
          <Card>
            <Card.Header
              as="h5"
              style={{ display: "flex", justifyContent: "center"}}
            >
              Alta de Persona
            </Card.Header>
            <Card.Body style={{ padding: 40 }}>
              <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                Datos de la persona a encontrar
              </Card.Subtitle>
              <Form onSubmit={onSubmit}>
                <Form.Row style={{ marginBottom: 50, marginLeft: 20 }}>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        name="name" 
                        type="text"
                        placeholder="Ingrese el nombre"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Apellido:</Form.Label>
                      <Form.Control
                        name="lastName"
                        type="text"
                        placeholder="Ingrese el apellido"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Altura:</Form.Label>
                      <Form.Control
                        name="height"
                        type="number"
                        placeholder="Ingrese la altura"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Género:</Form.Label>
                      <Form.Control
                        name="gender"
                        type="text"
                        placeholder="Ingrese el género"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Fecha de nacimiento:</Form.Label>
                      <Form.Control
                        name="birthday"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control
                        name="description"
                        as="textarea"
                        placeholder="Ingrese una descripción"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Check type="checkbox" label="Encontrado?" />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                  Datos de contacto
                </Card.Subtitle>
                <Form.Row style={{ marginBottom: 50, marginLeft: 20 }}>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Teléfono de contacto:</Form.Label>
                      <Form.Control
                        name="contactPhone" 
                        type="text"
                        placeholder="Ingrese el teléfono"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Nombre de contacto:</Form.Label>
                      <Form.Control
                        name="contactName"
                        type="text"
                        placeholder="Ingrese el nombre"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Email de contacto:</Form.Label>
                      <Form.Control
                        name="contactEmail"
                        type="email"
                        placeholder="Ingrese el email"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                  Datos de última localización
                </Card.Subtitle>
                <Form.Row style={{ marginLeft: 20 }}>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Visto por última vez:</Form.Label>
                      <Form.Control
                        name="lastSeen"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Zona:</Form.Label>
                      <Form.Control
                        name="zone"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group>
                      <Form.Label>Coordenadas:</Form.Label>
                      <Form.Control
                        name="coords"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Person;