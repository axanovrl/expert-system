import React from "react";
import { Container } from "react-bootstrap";

import NavBar from "../../../components/NavBar";

const Result_2 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf result-text">
          <span>На основе ваших ответов ЭС рекомендует вам следующее:</span>
          <p>
            Вам подойдет недвижимость на окраине города стоимостью от 5 000 000
            тг. для однокомнатной недвжимости или 10 000 000 тг. для
            многокомнатной недвжимости
          </p>
        </div>
      </Container>
    </>
  );
};

export default Result_2;
