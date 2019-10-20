import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_4_1 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Ограничен ли ваш бюджет ?</span>
          <div className="mb-2-hf">
            <Link to="/question-5">
              <Button variant="outline-primary">Да</Button>
            </Link>
            <Link to="/result-4">
              <Button variant="outline-primary">Нет</Button>
            </Link>
          </div>
        </div>
        <div className="mb-2-hf w-250 d-flex justify-content-between">
          <Link to="/question-3">
            <Button variant="outline-primary" type="submit">
              Назад
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Question_4_1;
