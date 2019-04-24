import React from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {addNewTarget } from '../actions';
import { connect } from 'react-redux';
import {reset} from 'redux-form';

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

const mapStateToProps = state => ({
    formData: state.form.acquisitionTarget
  });
  

const mapDispatchToProps = dispatch => ({
    addTarget: value =>
        dispatch(addNewTarget(value)),
    clearForm: () =>
        dispatch(reset('acquisitionTarget'))
  });

const AddNewTarget = props => {
    const {handleSubmit, submitting, addTarget, clearForm} = props;
    return (
        <Paper elevation={10} className="TargetFormPaper">
            <div className="newTargetForm">
                <Form onSubmit={handleSubmit((values) => { addTarget(values); clearForm(); })} className="targetForm">
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <Field name="name" component={RenderTextField} placeholder="Enter company name" label="Name" className="inputFields" />
                        </Grid>
                        <Grid item xs={3}>
                            <Field name="description" component={RenderTextField} placeholder="Enter company description" label="Description" className="inputFields" />
                        </Grid>
                        <Grid item xs={3}>
                            <Field name="location" component={RenderTextField} placeholder="Enter company location" label="Location" className="inputFields" />
                        </Grid>
                        <Grid item xs={3}>
                            <div className="statusSelection">
                                <label>Choose Acquisition Status</label>
                                <Field name="status" component="select" label="Status">
                                    <option value="Researching">Researching</option>
                                    <option value="Pending Approval">Pending Approval</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Declined">Declined</option>
                                </Field>
                            </div>
                        </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                        <Grid item xs>
                            <Field name="contact" component={RenderTextField} placeholder="Enter Key Contact" label="Contact" className="inputFields" />
                        </Grid>
                        <Grid item xs>
                            <Field name="valuation" component={RenderTextField} placeholder="Enter Financial Valuation" label="Valuation" className="inputFields" />
                        </Grid>
                        <Grid item xs>
                            <Field name="liquidity" component={RenderTextField} placeholder="Enter Financial Liquidity Ratio" label="Liquidity" className="inputFields" />
                        </Grid>
                        <Grid item xs>
                            <Field name="EBITDA" component={RenderTextField} placeholder="Enter EBITDA (Earnings before interest, tax, depreciation and amortization)" label="EBITDA" className="inputFields" />
                        </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                        <Grid item xs>
                            <Button type="submit" disabled={submitting} variant="contained" color="primary">Add new company</Button>
                            <Button type="button" disabled={submitting} variant="contained" color="secondary" onClick={() => {clearForm();}}>Clear Form</Button>
                        </Grid>
                    </Grid>
                </Form>
            </div>
        </Paper>
    )
}

const AddReduxFormTarget = reduxForm({
    form: 'acquisitionTarget', // a unique identifier for this form
})(AddNewTarget);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReduxFormTarget);