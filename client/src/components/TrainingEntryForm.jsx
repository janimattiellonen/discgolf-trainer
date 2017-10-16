import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap';

const validate = (values) => {
  const errors = {};

  if (!values.duration) {
    errors.duration = 'Value is required';
  } else if (values.duration != parseInt(values.duration, 10)) {
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

    <FormGroup bsSize="large">
      <FormControl {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span className="has-error">
            {error}
          </span>) ||
          (warning &&
            <span className="warning">
              {warning}
            </span>))
      }
    </FormGroup>
  </div>

const renderTextAreaField = ({
  input,
  label,
  meta: {touched, error, warning}
}) =>
  <div>
    <label>{label}</label>

    <div>
    <FormControl {...input}  componentClass="textarea" placeholder={label} />
      {touched &&
        ((error &&
          <span className="has-error">
            {error}
          </span>) ||
          (warning &&
            <span className="warning">
              {warning}
            </span>))
      }
    </div>
  </div>

 const renderSelectField = ({
  input,
  label,
  options,
  meta: {touched, error, warning}
 }) =>
  <div>
    <label>{label}</label>

    <div>
    <FormControl {...input} componentClass="select" placeholder="Select">
        {options.map(option => (
          <option key={option.key} value={option.key}>{option.value}</option>
        ))}
      </FormControl>
      {touched &&
        ((error &&
          <span className="has-error">
            {error}
          </span>) ||
          (warning &&
            <span className="warning">
              {warning}
            </span>))
      }
    </div>
  </div> 

const TrainingEntryForm = ({ handleSubmit, pristine, submitting, valid }) => (
  <div className="training-entry-form">
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="duration"
             type="text"
             component={renderField}
             label="Duration"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="practiseTypeId"
             type="text"
             component={renderSelectField}
             options={[
               {key: 0, value: 'Select...'},
               {key: 1, value: 'Anhyzer'},
               {key: 2, value: 'Forehand'},
               {key: 3, value: 'Hyzer'},
             ]}
             label="Practise type"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="runupId"
             type="text"
             component={renderSelectField}
             options={[
               {key: 0, value: 'Select...'},
               {key: 1, value: 'Stand-still'},
               {key: 2, value: 'X-step'},
             ]}
             label="Run-up"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="precision"
             type="text"
             component={renderField}
             label="Precision"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="feeling"
            type="text"
            component={renderField}
            label="Feeling"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="comments"
            type="select"
            component={renderTextAreaField}
            label="Comments"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
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
