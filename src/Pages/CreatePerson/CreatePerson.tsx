import React from "react";
import { Container, Row as BootstrapRow, Col } from "react-bootstrap";
import styled from "styled-components";

const Row = styled(BootstrapRow)`
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const CreatePerson: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Alta de persona</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePerson;
