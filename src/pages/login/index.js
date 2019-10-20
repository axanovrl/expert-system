import React from "react";
import PropTypes from "prop-types";

import Login from "./Login";

const Container = ({ history }) => {
  const handleSubmit = () => {
    history.push("/main");
  };
  return <Login onSubmit={handleSubmit} />;
};

Container.propTypes = {
  history: PropTypes.func
};
export default Container;
