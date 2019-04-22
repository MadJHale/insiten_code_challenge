import React, {Component} from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import { connect } from 'react-redux';
import { addNewTarget } from '../actions';
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

// const RenderSelectField = ({
//     input,
//     label,
//     meta: { touched, error },
//     children,
//     ...custom
// }) => (
//     <FormControl error={touched && error}>    
//         <Select
//         {...input}
//         {...custom}
//         inputProps={{
//             name: 'status',
//             id: 'status-simple'
//         }}
//         >
//         {children}
//         </Select>
//         {renderFromHelper({ touched, error })}
//     </FormControl>
// )

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

const AddNewTarget = props => {
    const {handleSubmit, submitting} = props;
    return (
        <Form onSubmit={handleSubmit}>
        <div><Field name="name" component={RenderTextField} placeholder="Enter company name" label="Name" /></div>
        <div><Field name="description" component={RenderTextField} placeholder="Enter company description" label="Description" /></div>
        <div><Field name="location" component={RenderTextField} placeholder="Enter company location" label="Location" /></div>
        <div><Field name="status" component={RenderSelectField} label="Status">
                <option />
                <option value="researching">Researching</option>
                <option value="pending">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
            </Field></div>
        {/* <div><FormControl>
          <InputLabel htmlFor="status-simple">Status</InputLabel>
          <Select
            value={this.state.status}
            onChange={this.handleChange}
            inputProps={{
              name: 'status',
              id: 'status-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="researching">Researching</MenuItem>
            <MenuItem value="pending">Pending Approval</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="declined">Declined</MenuItem>
          </Select>
        </FormControl></div> */}
        <div><Field name="contact" component={RenderTextField} placeholder="Enter Key Contact" label="Contact" /></div>
        <div><Field name="valuation" component={RenderTextField} placeholder="Enter Financial Valuation" label="Valuation" /></div>
        <div><Field name="liquidity" component={RenderTextField} placeholder="Enter Financial Liquidity Ratio" label="Liquidity" /></div>
        <div><Field name="EBITDA" component={RenderTextField} placeholder="Enter EBITDA (Earnings before interest, tax, depreciation and amortization)" label="EBITDA" /></div>
        <div><button type="submit" disabled={submitting}>Add new company</button></div>
        </Form>
    )
}


export default reduxForm({
    form: 'acquisitionTarget', // a unique identifier for this form
  })(AddNewTarget);