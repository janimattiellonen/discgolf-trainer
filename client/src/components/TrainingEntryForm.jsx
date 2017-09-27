import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, Form, FormGroup, Row } from 'react-bootstrap';

const validate = (values) => {
  const errors = {};

  if (!values.duration) {
    errors.duration = 'Value is required';
  } else if (values.duration !== parseInt(values.duration, 10)) {
    errors.duration = 'Value is not a valid number';
  }

  console.log(JSON.stringify(errors));

  return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) =>
  <div>
    <label>{label}</label>

    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))
      }
    </div>
  </div>


const TrainingEntryForm = ({ pristine, submitting, valid }) => (
  <div className="training-entry-form">
    <Form>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Field
            name="duration"
             type="text"
             component={renderField}
             label="Duration"
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <Field
            name="precision"
             type="text"
             component={renderField}
             label="Precision"
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <Button bsStyle="success" disabled={pristine || submitting || !valid} type="submit">Lähetä vastaus</Button>
        </Col>
      </Row>
    </Form>
  </div>
);

TrainingEntryForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'trainingEntry',
  validate,
})(TrainingEntryForm);
