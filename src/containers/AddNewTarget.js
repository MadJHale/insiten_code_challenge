import React, {Component} from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import { connect } from 'react-redux';
import { addNewTarget } from '../actions';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const RenderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const RenderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
  ) => (
    <Select
      native
      label={label}
      errortext={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }

  const handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

const AddNewTarget = props => {
    const {handleSubmit, submitting} = props;
    return (
        <div className="newTargetForm">
        <Form onSubmit={handleSubmit(val => console.log(val))} className="targetForm">
        <div><Field name="name" component={RenderTextField} placeholder="Enter company name" label="Name" /></div>
        <div><Field name="description" component={RenderTextField} placeholder="Enter company description" label="Description" /></div>
        <div><Field name="location" component={RenderTextField} placeholder="Enter company location" label="Location" /></div>
        <div className="statusSelection"><label>Choose Acquisition Status</label>
            <Field name="status" component="select" label="Status">
                <option />
                <option value="researching">Researching</option>
                <option value="pending">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
            </Field>
        </div>
        <div><Field name="contact" component={RenderTextField} placeholder="Enter Key Contact" label="Contact" /></div>
        <div><Field name="valuation" component={RenderTextField} placeholder="Enter Financial Valuation" label="Valuation" /></div>
        <div><Field name="liquidity" component={RenderTextField} placeholder="Enter Financial Liquidity Ratio" label="Liquidity" /></div>
        <div><Field name="EBITDA" component={RenderTextField} placeholder="Enter EBITDA (Earnings before interest, tax, depreciation and amortization)" label="EBITDA" /></div>
        <div><button type="submit" disabled={submitting}>Add new company</button></div>
        </Form></div>
    )
}

export default reduxForm({
    form: 'acquisitionTarget', // a unique identifier for this form
  })(AddNewTarget);