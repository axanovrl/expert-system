import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_5 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Важно ли для вас местоположение покупаемой недвижимости ?</span>
          <div className="mb-2-hf">
            <Link to="/result-1">
              <Button variant="outline-primary">Да</Button>
            </Link>
            <Link to="/result-2">
              <Button variant="outline-primary">Нет</Button>
            </Link>
          </div>
        </div>
        <div className="mb-2-hf w-250 d-flex justify-content-between">
          <Link to="/question-4">
            <Button variant="outline-primary" type="submit">
              Назад
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Question_5;
