import React from "react";
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iForm } from "../../types/form";
import { ErrorMessage } from "../../Components/StyledComponents/ErrorMessage";

const Person:React.FC<iForm> = ({ onSubmit }:iForm) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container>
      <Row style={{ justifyContent: "center"}}>
        <Col xs={12}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Card style={{ margin: "50px 20px" }}>
              <Card.Header
                as="h5"
                style={{ display: "flex", justifyContent: "center"}}
              >
                Alta de Persona
              </Card.Header>
              <Card.Body>
                <Row style={{ margin: 30 }}>
                  <Col xs={3} style={{ textAlign: "center", border: "1px solid grey" }}>
                    <h2>Foto</h2>
                  </Col>
                  <Col xs={9}>
                    <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                      Datos de la persona a encontrar
                    </Card.Subtitle>
                    <Form.Row style={{ marginBottom: 20 }}>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control
                            name="name" 
                            type="text"
                            placeholder="Ingrese el nombre"
                            ref={register({ required: true })}
                          />
                          {errors.name && (
                            <ErrorMessage>El nombre es requerido</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Label>Apellido:</Form.Label>
                          <Form.Control
                            name="lastName"
                            type="text"
                            placeholder="Ingrese el apellido"
                            ref={register({ required: true })}
                          />
                          {errors.lastName && (
                            <ErrorMessage>El apellido es requerido</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Altura:</Form.Label>
                          <Form.Control
                            name="height"
                            type="number"
                            placeholder="Ingrese la altura"
                            ref={register}
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
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Fecha de nacimiento:</Form.Label>
                          <Form.Control
                            name="birthday"
                            type="text"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Check type="checkbox" label="Encontrado?" ref={register} />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Col>
                  <Col xs={12}>
                    <Form.Group style={{ margin: 15 }}>
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control
                        name="description"
                        as="textarea"
                        placeholder="Ingrese una descripción"
                        ref={register}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: 30 }}>
                  <Col xs={12}>
                    <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                      Datos de última localización
                    </Card.Subtitle>
                    <Form.Row>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Visto por última vez:</Form.Label>
                          <Form.Control
                            name="lastSeen"
                            type="text"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Zona:</Form.Label>
                          <Form.Control
                            name="zone"
                            type="text"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Coordenadas:</Form.Label>
                          <Form.Control
                            name="coords"
                            type="text"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Col>
                </Row>
                <Row style={{ margin: 30 }}>
                  <Col xs={12}>
                    <Card.Subtitle style={{ marginBottom: 20, color: "#a4a4a4" }}>
                      Datos de contacto
                    </Card.Subtitle>
                    <Form.Row>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Nombre de contacto:</Form.Label>
                          <Form.Control
                            name="contactName"
                            type="text"
                            placeholder="Ingrese el nombre"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Teléfono de contacto:</Form.Label>
                          <Form.Control
                            name="contactPhone" 
                            type="text"
                            placeholder="Ingrese el teléfono"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Email de contacto:</Form.Label>
                          <Form.Control
                            name="contactEmail"
                            type="email"
                            placeholder="Ingrese el email"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "center", margin: 20 }}>
                  <Col xs={4}>
                    <Button type="submit" variant="primary" className="btn-block">
                      Dar de alta
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Person;