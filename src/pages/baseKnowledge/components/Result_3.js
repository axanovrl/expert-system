import React from "react";
import { Container } from "react-bootstrap";

import NavBar from "../../../components/NavBar";

const Result_3 = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-18-hf result-text">
          <span>На основе ваших ответов ЭС рекомендует вам следующее:</span>
          <p>
            Вам подойдет многокомнатая квартира в центре города стоимостью от 25
            000 000 тг.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Result_3;
