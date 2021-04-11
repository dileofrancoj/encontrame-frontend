import React from "react";
import { Col, CardGroup, Card } from "react-bootstrap";
import { iPerson } from "../../types/person";
import styled from "styled-components";

const CardFooter = styled(Card.Footer)`
  width: 100%;
`;

const Person: React.FC<iPerson> = (person: iPerson) => {
  return (
    <Col md={3} sm={12}>
      <CardGroup>
        <Card.Img
          variant="top"
          style={{
            width: 350,
            height: "auto",
            margin: "0 auto",
            marginTop: 10,
          }}
          src={person.photo}
        />
        <Card.Body>
          <Card.Title>
            {person.name} {person.lastname}
          </Card.Title>
          <Card.Text>{person.description}</Card.Text>
        </Card.Body>
        <CardFooter>
          <small className="text-muted">{person.lastSeen}</small>
        </CardFooter>
      </CardGroup>
    </Col>
  );
};

export default Person;
