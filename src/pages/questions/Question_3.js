import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_3 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Какой тип этажности квартиры вам необходим ?</span>
          <div className="mb-2-hf">
            <Link to="/question-4">
              <Button variant="outline-primary">1-5</Button>
              <Button variant="outline-primary">6-10</Button>
              <Button variant="outline-primary">11-16</Button>
              <Button variant="outline-primary">17-20</Button>
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

export default Question_3;
