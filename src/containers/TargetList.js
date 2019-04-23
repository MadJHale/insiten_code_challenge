import { connect } from 'react-redux';
import TargetList from '../components/TargetListTable';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {updateTable, editTarget, deleteTarget } from '../actions';

const selector = formValueSelector('acquisitionTarget');

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
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetList);