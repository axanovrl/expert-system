import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_2 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Какой тип недвижимости вам необходим ?</span>
          <div className="mb-2-hf">
            <Link to="/question-3">
              <Button variant="outline-primary">Квартира</Button>
            </Link>
            <Link to="/question-3.1">
              <Button variant="outline-primary">Частный дом</Button>
            </Link>
          </div>
          <div className="mb-2-hf w-250 d-flex justify-content-between">
            <Link to="/question-1">
              <Button variant="outline-primary" type="submit">
                Назад
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Question_2;
