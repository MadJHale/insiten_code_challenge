import { connect } from 'react-redux';
import TargetListTable from '../components/TargetListTable';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {addNewTarget, updateTable, editTarget, deleteTarget } from '../actions';

// const addNewTargets = (currentTargets, newTarget) => {
//     let newId = currentTargets[currentTargets.length - 1].id + 1;
//     if(newTarget.acquisitionTarget && newTarget.acquisitionTarget.submitSucceeded == true) {
//         dispatch(addNewTarget(newId, newTarget.acquisitionTarget.values));
//     }
//     return currentTargets;
// }

const mapStateToProps = state => ({
  targets: state.targets
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
    },
    addTarget(id, newTargetValues) {
        return () => {
            dispatch(addNewTarget(id, newTargetValues));
        }
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetListTable);