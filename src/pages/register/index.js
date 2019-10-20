import React from "react";
import PropTypes from "prop-types";

import Register from "./Register";

const Container = ({ history }) => {
  const handleSubmit = () => {
    history.push("/login");
  };
  return <Register onSubmit={handleSubmit} />;
};

Container.propTypes = {
  history: PropTypes.func
};
export default Container;
