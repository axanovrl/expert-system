import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/main.css";
import { store } from "./store";
import Register from "./pages/register";
import Login from "./pages/login";
import Main from "./pages/main";
import Help from "./pages/help";

import Question_1 from "./pages/questions/Question_1";
import Question_2 from "./pages/questions/Question_2";
import Question_3 from "./pages/questions/Question_3";
import Question_3_1 from "./pages/questions/Question_3_1";
import Question_4 from "./pages/questions/Question_4";
import Question_4_1 from "./pages/questions/Question_4_1";
import Question_5 from "./pages/questions/Question_5";

import Result_1 from "./pages/baseKnowledge";
import Result_2 from "./pages/baseKnowledge";
import Result_3 from "./pages/baseKnowledge";
import Result_4 from "./pages/baseKnowledge";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/help" component={Help} />

          <Route path="/question-1" component={Question_1} />
          <Route path="/question-2" component={Question_2} />
          <Route path="/question-3" component={Question_3} />
          <Route path="/question-3.1" component={Question_3_1} />
          <Route path="/question-4" component={Question_4} />
          <Route path="/question-4.1" component={Question_4_1} />
          <Route path="/question-5" component={Question_5} />

          <Route path="/result-1" component={Result_1} />
          <Route path="/result-2" component={Result_2} />
          <Route path="/result-3" component={Result_3} />
          <Route path="/result-4" component={Result_4} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
