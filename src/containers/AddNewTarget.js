import React from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import TextField from '@material-ui/core/TextField';

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