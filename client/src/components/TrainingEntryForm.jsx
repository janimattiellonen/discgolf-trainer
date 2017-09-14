import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';

const validate = (values) => {
  const errors = {};

  return errors;
}

const TrainingEntryForm = ({ pristine, submitting }) => {
  <div className="training-entry-form">
    <Form>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <p>Training entry form</p>
        </Col>
      </Row>
    </Form>
  </div>
};

TrainingEntryForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'trainingEntry',
  validate,
})(TrainingEntryForm);
