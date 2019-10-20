import React from "react";
import { Container } from "react-bootstrap";

import NavBar from "../../components/NavBar";

const Help = () => {
  return (
    <>
      <NavBar />
      <Container>
        <p className="help-text mt-7-hf">
          Экспертные системы – это прикладные системы ИИ, в которых база знаний
          представляет собой формализованные эмпирические знания
          высококвалифицированных специалистов (экспертов) в какой-либо узкой
          предметной области. Экспертные системы предназначены для замены при
          решении задач экспертов в силу их недостаточного количества,
          недостаточной оперативности в решении задачи или в опасных (вредных)
          для них условиях.
        </p>
        <p className="help-text">
          Экспертная система (ЭС) - программа, которая использует знания
          специалистов (экспертов) о некоторой конкретной узко
          специализированной предметной области и в пределах этой области
          способна принимать решения на уровне эксперта-профессионала.
        </p>
        <p className="help-text">
          Осознание полезности систем, которые могут копировать дорогостоящие
          или редко встречающиеся человеческие знания, привело к широкому
          внедрению и расцвету этой технологии в 80-е, 90-е годы прошлого века.
        </p>
        <p className="help-text">
          Основу успеха ЭС составили два важных свойства:
        </p>
        <p className="help-text">
          1. В ЭС знания отделены от данных, и мощность экспертной системы
          обусловлена в первую очередь мощностью базы знаний и только во вторую
          очередь используемыми методами решения задач;
        </p>
        <p className="help-text ">
          2. Решаемые ЭС задачи являются неформализованными или
          слабоформализованными и используют эвристические, экспериментальные,
          субъективные знания экспертов в определенной предметной области.
        </p>
        <p className="help-text">
          Основными категориями решаемых ЭС задач являются:
        </p>
        <p className="help-text">-диагностика;</p>
        <p className="help-text">
          -управление (в том числе технологическими процессами);
        </p>
        <p className="help-text">-интерпретация;</p>
        <p className="help-text">-прогнозирование;</p>
        <p className="help-text"> -проектирование;</p>
        <p className="help-text">-отладка и ремонт;</p>
        <p className="help-text"> -планирование;</p>
        <p className="help-text">-наблюдение (мониторинг);</p>
        <p className="help-text">-обучение.</p>
      </Container>
    </>
  );
};

export default Help;
