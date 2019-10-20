import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Question_1 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf text-center" style={{ paddingBottom: 50 }}>
          <span>Какой тип рынка вам необходим при покупке недвижимости?</span>
          <div className="mb-2-hf">
            <Link to="/question-2">
              <Button variant="outline-primary">Новостройка</Button>
              <Button variant="outline-primary">Вторичный рынок</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Question_1;
