import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FieldInput = ({ input, label, meta }) => (
  <Form.Group>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      isInvalid={meta.touched && meta.error}
      as="input"
      {...input}
    />
    {meta.touched &&
      (meta.error && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ))}
  </Form.Group>
);

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  renderTop: PropTypes.element,
  meta: PropTypes.object
};
export default FieldInput;
