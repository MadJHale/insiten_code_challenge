import { connect } from 'react-redux';
import TargetListTable from '../components/TargetListTable';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {updateTable, editTarget, deleteTarget } from '../actions';

const addNewTargets = (currentTargets, newTarget) => {
    if(newTarget.acquisitionTarget && newTarget.acquisitionTarget.submitSucceeded == true) {
        currentTargets.push({
            id: ++currentTargets.length,
            ...newTarget.acquisitionTarget.values
        });
    }
    return currentTargets;
}

const mapStateToProps = state => ({
  targets: addNewTargets(state.targets, state.form)
});

const mapDispatchToProps = dispatch => ({
    deleteItem(id) {
        return () => {
            dispatch(deleteTarget(id));
        }
    },
    editItem(id) {
        return () => {
            dispatch(editTarget(id));
        }
    },
    updateList(id) {
        return () => {
            dispatch(updateTable(id));
        }
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetListTable);