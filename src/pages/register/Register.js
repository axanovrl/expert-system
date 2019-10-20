import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import {
  required,
  maxLength15,
  minLength2,
  email,
  minLengthPassword8
} from "../../utils/validation";
import FieldInput from "../../components/FieldInput";

const Register = ({ handleSubmit }) => {
  return (
    <React.Fragment>
      <div className="view bg-i">
        <Container>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="wizard-form">
              <Form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-2-hf">Регистрация аккаунта</h2>
                <div className="card-body">
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Field
                        name="firstName"
                        label="Фамилия"
                        component={FieldInput}
                        validate={[required, maxLength15, minLength2]}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Field
                        name="lastName"
                        label="Имя"
                        component={FieldInput}
                        validate={[required, maxLength15, minLength2]}
                      />
                    </Form.Group>
                  </Form.Row>
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
                  <Field
                    name="confirmPassword"
                    label="Подтверждение пароля"
                    type="password"
                    component={FieldInput}
                    validate={[minLengthPassword8, required]}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-2-hf font-weight-bold"
                  >
                    Зарегистрироваться
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "register"
})(Register);
