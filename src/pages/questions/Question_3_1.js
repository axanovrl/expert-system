import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_3_1 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Какая этажность частного дома вам необходима ?</span>
          <div className="mb-2-hf">
            <Link to="/question-4.1">
              <Button variant="outline-primary">1</Button>
              <Button variant="outline-primary">2</Button>
              <Button variant="outline-primary">3</Button>
            </Link>
          </div>
        </div>
        <div className="mb-2-hf w-250 d-flex justify-content-between">
          <Link to="/question-2">
            <Button variant="outline-primary" type="submit">
              Назад
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Question_3_1;
