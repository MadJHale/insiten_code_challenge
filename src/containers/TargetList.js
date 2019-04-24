import { connect } from 'react-redux';
import TargetListTable from '../components/TargetListTable';
import { updateTarget, editTarget, deleteTarget, delTarget } from '../actions';

const mapStateToProps = state => ({
  targets: state.targets,
  editData: state.editData
});


// const mapDispatchToProps = dispatch => ({
//     deleteItem: (id) => 
//         dispatch(deleteTarget(id)),
//     editItem: (id) => 
//         dispatch(editTarget(id)),
//     updateItem: (id) => 
//         dispatch(updateTarget(id)),
//     delTarget: data => 
//         dispatch(delTarget(data))
//   });

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
    updateItem(id) {
        return () => {
            debugger;
            dispatch(updateTarget(id));
        }
    },
    delTarget(data) {
        return () => {
            dispatch(delTarget(data));
        }
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetListTable);