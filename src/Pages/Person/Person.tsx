import React, { useState } from "react";
import { Container, Form, Col, Row, Card, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iForm } from "../../types/form";
import { ErrorMessage } from "../../Components/StyledComponents/ErrorMessage";
import styled from "styled-components";
import { genderList } from "../../types/person";
import { Person as PersonIcon } from "react-bootstrap-icons";

const PageTitle = styled(Card.Title)`
  display: flex;
  justify-content: center;
  font-size: 26px;
  padding: 15px;
  margin: 0px 25px;
  border: 1px solid #f1f1f1;
  box-shadow: 3px 2px 6px 0px #c3c3c32e;
  color: #212529;
`;

const CardHeader = styled(Card.Header)`
  background-color: #b7e0dc3d;
`;

const CardSubtitle = styled(Card.Subtitle)`
  margin-bottom: 20px;
  color: #427BFF;
`;

const SubmitRow = styled(Row)`
  justify-content: center;
  margin-top: 40px;
`;

const MainCard = styled(Card)`
  box-shadow: 4px 4px 6px 0px #c3c3c32e;
`;

const BottomCard = styled(Card)`
  box-shadow: 6px 0px 6px 1px #c3c3c32e;
`;

const ImageContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 210px; 
  background-color: #bfbfbfc7;
`;

const Person:React.FC<iForm> = ({ onSubmit }:iForm) => {
  const { register, handleSubmit, errors } = useForm();
  const [photoUrl, setPhotoUrl] = useState("");
  const handlePhotoUpload: React.FormEventHandler<HTMLInputElement> = (event) => {
    console.log("🚀 ~ HANDLE PHOTO UPLOAD");
    if (!event.currentTarget.files) {
      return;
    }
    const uploadedPhotoUrl = URL.createObjectURL(event.currentTarget.files[0]);
    setPhotoUrl(uploadedPhotoUrl);
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <PageTitle>
            Alta de Persona
          </PageTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <MainCard className="m-4">
              <CardHeader>
                <CardSubtitle>
                      Datos de la persona a encontrar
                </CardSubtitle>
              </CardHeader>
              <Card.Body>
                <Row style={{ margin: 30 }}>
                  {/*TODO: averiguar como hacer para que la foto de distinto tamaño no se deforme
                    TODO: agregarle efecto on hover que se oscurezca y diga "subir foto" si no tiene nada y
                    "cambiar foto" si tiene algo y que tenga cursor con manito
                  */}
                  <Col xs={3}>
                    <Form.File style={{ height: "100%", width: "100%" }} custom>
                      <ImageContainer>
                        <Form.File.Input
                          name="photo"
                          onChange={handlePhotoUpload} 
                          ref={register}
                          style={{ height: "100%", position: "absolute"}}
                        />
                        {
                          photoUrl.length > 0 ?
                            <Image src={photoUrl || ""} width="100%" height="100%" />
                            :
                            <PersonIcon style={{ fontSize: 100, color: "#fff" }} />
                        }
                      </ImageContainer>
                    </Form.File>                
                  </Col>
                  <Col xs={9}>
                    <Form.Row style={{ marginBottom: 20 }}>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control
                            name="name" 
                            type="text"
                            ref={register({ required: true })}
                          />
                          {errors.name && (
                            <ErrorMessage>Ingrese el nombre de la persona</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Label>Apellido:</Form.Label>
                          <Form.Control
                            name="lastname"
                            type="text"
                            ref={register({ required: true })}
                          />
                          {errors.lastname && (
                            <ErrorMessage>Ingrese el apellido de la persona</ErrorMessage>
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
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Género:</Form.Label>
                          <Form.Control
                            name="gender"
                            as="select"
                            ref={register}
                          >
                            {genderList.map(({ value, name }) => (
                              <option key={value}>{name}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group>
                          <Form.Label>Fecha de nacimiento:</Form.Label>
                          <Form.Control type="date" name="birthday" ref={register}>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col xs={12} style={{ height: 40 }}>
                        <Form.Group>
                          {/*<Form.Check name="found" type="checkbox" label="Encontrado?" ref={register} />*/ }
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
              </Card.Body>
            </MainCard>
            <Row>
              <Col xs={6}>
                <BottomCard>
                  <CardHeader>
                    <CardSubtitle>
                      Datos de última localización
                    </CardSubtitle>
                  </CardHeader>
                  <Card.Body>
                    <Row style={{ margin: 10 }}>
                      <Col xs={12}>
                        <Form.Row>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Visto por última vez:</Form.Label>
                              <Form.Control
                                name="lastSeen"
                                type="date"
                                ref={register}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Zona:</Form.Label>
                              <Form.Control
                                name="zone"
                                type="text"
                                ref={register}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
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
                  </Card.Body>
                </BottomCard>
              </Col>
              <Col xs={6}>
                <BottomCard>
                  <CardHeader>
                    <CardSubtitle>
                            Datos de contacto
                    </CardSubtitle>
                  </CardHeader>
                  <Card.Body>
                    <Row style={{ margin: 10 }}>
                      <Col xs={12}>
                        <Form.Row>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Nombre de contacto:</Form.Label>
                              <Form.Control
                                name="contactName"
                                type="text"
                                ref={register}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Teléfono de contacto:</Form.Label>
                              <Form.Control
                                name="contactTelephone" 
                                type="text"
                                ref={register}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Email de contacto:</Form.Label>
                              <Form.Control
                                name="contactEmail"
                                type="email"
                                placeholder="contacto@gmail.com"
                                ref={register}
                              />
                            </Form.Group>
                          </Col>
                        </Form.Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </BottomCard>
              </Col>
            </Row>  
            <SubmitRow>
              <Col xs={4}>
                <Button type="submit" variant="primary" className="btn-block">
                      Dar de alta
                </Button>
              </Col>
            </SubmitRow>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Person;