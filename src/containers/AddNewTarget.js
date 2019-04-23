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
        <div className="newTargetForm">
            <Form onSubmit={handleSubmit((values) => addTarget(values))} className="targetForm">
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper><Field name="name" component={RenderTextField} placeholder="Enter company name" label="Name" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper><Field name="description" component={RenderTextField} placeholder="Enter company description" label="Description" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper><Field name="location" component={RenderTextField} placeholder="Enter company location" label="Location" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <div className="statusSelection">
                            <label>Choose Acquisition Status</label>
                            <Field name="status" component="select" label="Status">
                                <option />
                                <option value="researching">Researching</option>
                                <option value="pending">Pending Approval</option>
                                <option value="approved">Approved</option>
                                <option value="declined">Declined</option>
                            </Field>
                            </div>
                        </Paper>
                    </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper><Field name="contact" component={RenderTextField} placeholder="Enter Key Contact" label="Contact" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper><Field name="valuation" component={RenderTextField} placeholder="Enter Financial Valuation" label="Valuation" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper><Field name="liquidity" component={RenderTextField} placeholder="Enter Financial Liquidity Ratio" label="Liquidity" className="inputFields" /></Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper><Field name="EBITDA" component={RenderTextField} placeholder="Enter EBITDA (Earnings before interest, tax, depreciation and amortization)" label="EBITDA" className="inputFields" /></Paper>
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
    )
}

const AddReduxFormTarget = reduxForm({
    form: 'acquisitionTarget', // a unique identifier for this form
})(AddNewTarget);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReduxFormTarget);