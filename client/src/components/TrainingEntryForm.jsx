import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, Form, FormGroup, Row } from 'react-bootstrap';

const validate = (values) => {
  const errors = {};

  if (!values.duration) {
    errors.duration = 'Value is required';
  }
  
  console.log(JSON.stringify(errors));

  return errors;
}

const TrainingEntryForm = ({ pristine, submitting }) => (
  <div className="training-entry-form">
    <Form>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <ControlLabel>Duration</ControlLabel>

          <Field
            name="duration"
            component="input"
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <ControlLabel>Precision</ControlLabel>

          <Field
            name="precision"
            component="input"
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <Button bsStyle="success" disabled={pristine || submitting} type="submit">Lähetä vastaus</Button>
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
