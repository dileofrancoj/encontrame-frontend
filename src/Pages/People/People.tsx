import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../../Components/Loading";
import Person from "../../Components/Person/Person";
import { mockPeople } from "../../mocks/people";
import { iPeople, iPerson } from "../../types/person";

const People: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [persons, setPersons] = useState<iPeople>([]);

  useEffect(() => {
    setPersons(mockPeople);
    setLoading(false);
  });
  return (
    <Container>
      <Row>
        {!loading ? (
          persons &&
          persons.map((person: iPerson) => (
            <Person key={person.id} {...person} />
          ))
        ) : (
          <Loading />
        )}
      </Row>
    </Container>
  );
};

export default People;
