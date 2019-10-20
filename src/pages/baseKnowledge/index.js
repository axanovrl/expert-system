import React from "react";
import { Switch, Route } from "react-router-dom";

import Result_1 from "./components/Result_1";
import Result_2 from "./components/Result_2";
import Result_3 from "./components/Result_3";
import Result_4 from "./components/Result_4";

const Container = () => {
  return (
    <Switch>
      <Route path="/result-1" component={Result_1} />
      <Route path="/result-2" component={Result_2} />
      <Route path="/result-3" component={Result_3} />
      <Route path="/result-4" component={Result_4} />
    </Switch>
  );
};

export default Container;
