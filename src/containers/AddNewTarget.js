import React from 'react';
import { connect } from 'react-redux';
import { addNewTarget } from '../actions';

const AddNewTarget = ({ dispatch }) => {
    let input;

    return (
        <form className="NewTargetForm" onSubmit={e => {
            e.preventDefault()
            dispatch(addNewTarget(input))
          }}>
            <div className="formRow">
                <label htmlFor="name">Enter company name</label>
                <input id="name" name="name" type="text" ref={node => input = node} />
            </div>
            <div className="formRow">
                <label htmlFor="description">Enter company description</label>
                <input id="description" name="description" type="text" />
            </div>
            <div className="formRow">
                <label htmlFor="location">Enter company location</label>
                <input id="location" name="location" type="text" />
            </div>
            <div className="formRow">
                <label htmlFor="status">Enter Acquisition Status</label>
                <select id="status">
                    <option value="">--Please choose an option--</option>
                    <option value="researching">Researching</option>
                    <option value="pending approval">Pending Approval</option>
                    <option value="approved">Approved</option>
                    <option value="declined">Declined</option>
                </select>
            </div>
            <div className="formRow">
                <label htmlFor="contacts">Enter Key Contact</label>
                <input id="contacts" name="contacts" type="text" />
            </div>
            <div className="formRow">
                <label htmlFor="valuation">Enter Financial Valuation</label>
                <input id="valuation" name="valuation" type="text" />
            </div>
            <div className="formRow">
                <label htmlFor="liquidity">Enter Financial Liquidity Ratio</label>
                <input id="liquidity" name="liquidity" type="text" />
            </div>
            <div className="formRow">
                <label htmlFor="EBITDA">Enter EBITDA (Earnings before interest, tax, depreciation and amortization)</label>
                <input id="EBITDA" name="EBITDA" type="text" />
            </div>
            <button type="submit">Add new company</button>
        </form>
    )
}

export default connect()(AddNewTarget)