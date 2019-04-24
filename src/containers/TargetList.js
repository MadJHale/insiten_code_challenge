import { connect } from 'react-redux';
import TargetListTable from '../components/TargetListTable';
import { updateTable, editTarget, deleteTarget, updatecell } from '../actions';

const mapStateToProps = state => ({
  targets: state.targets,
  editData: state.editData,
  selectedIndexes: []
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
    onGridRowUpdate({ fromRow, toRow, updated }) {
        dispatch(updatecell(fromRow, toRow, updated));
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetListTable);