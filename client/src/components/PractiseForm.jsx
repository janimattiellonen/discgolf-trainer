import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap';

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

const PractiseForm = ({ handleSubmit, pristine, submitting, valid }) => (
    <div className="training-entry-form">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Field
              name="name"
               type="text"
               component={renderField}
               label="Name"
            />
          </Col>
        </Row>

        <Row>
        <Col md={6} sm={12} xs={12}>
          <Field
            name="description"
            type="select"
            component={renderTextAreaField}
            label="Description"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          <Button bsStyle="success" disabled={pristine || submitting || !valid} type="submit">Tallenna</Button>
        </Col>
      </Row>
);
export default reduxForm({
    form: 'practiseForm',
  })(TrainingEntryForm);