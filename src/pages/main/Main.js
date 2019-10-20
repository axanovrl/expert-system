import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="main-text mt-7-hf mb-1-hf">
          Вас привествует эксперная система &quot;Агентство по продаже
          недвижимости&quot; - <strong>&quot;THE AGENCY.&quot; </strong>
        </div>
        <div className="main-text mb-1-hf">
          Данная ЭС поможет вам выбрать наиболее оптимальный вариант покупки
          недвижимости вашей мечты!
        </div>
        <div className="main-text mb-1-hf">
          С помощью данной ЭС вам не нужно будет обращаться к нашим реальным
          экспертам по продаже недвижимости!
        </div>
        <div className="main-text mb-1-hf">
          Наша ЭС система на основе ваших ответов выполнит их анализ и выдаст
          вам на экран наиболее подходящий вариант вашей будущей недвижимости.
        </div>
        <div className="main-text mb-1-hf">
          Чтобы начать тестирование, нажмите на кнопку &quot;Начать&quot;.
        </div>
        <div className="main-text mb-1-hf">
          Если у вас возникли вопросы касательно ЭС, нажмите на панели сверху
          &quot;Помощь&quot;.
        </div>
        <div className="main-text mb-1-hf">
          Чтобы начать тестирование заново, нажмите на панели сверху
          &quot;Начать заново&quot;.
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/question-1">
            <Button variant="outline-primary" type="submit">
              Начать
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Main;
