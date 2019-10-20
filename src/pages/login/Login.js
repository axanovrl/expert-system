import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { required, email, minLengthPassword8 } from "../../utils/validation";
import FieldInput from "../../components/FieldInput";

const Login = ({ handleSubmit }) => {
  return (
    <div className="view bg-i">
      <Container>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Form className="auth-form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-2-hf">
              <img src="/img/logo.png" className="ag-logo" alt="logo" />
            </div>
            <div className="card-body">
              <Field
                name="email"
                label="Email"
                component={FieldInput}
                validate={[email, required]}
              />
              <Field
                name="password"
                label="Пароль"
                type="password"
                component={FieldInput}
                validate={[minLengthPassword8, required]}
              />
              <Button
                type="submit"
                variant="primary"
                className="mt-2-hf font-weight-bold"
              >
                Войти в аккаунт
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login"
})(Login);
