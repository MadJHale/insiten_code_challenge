const targets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TARGET': {
            return [...state, {id: state.length >= 1 ? state[state.length - 1].id + 1 : 1, ...action.newTarget}];
        }
        case 'EDIT_TARGET':
            debugger;
            return [...state, {editData: true, ...action.data}];
        case 'DELETE_TARGET':
            return state.filter(({ id }) => id !== action.id);
        case 'UPDATE_TARGET': {
            debugger;
            const data = state;
            const index = data.indexOf(action.oldData);
            data[index] = action.newData;
            // this.setState({ data }, () => resolve());
            return [...data];
        }
        case 'DEL_TARGET': {
            debugger;
            const data = this.state.targets;
            const index = data.indexOf(action.oldData);
            data.splice(index, 1);
            this.setState({ data });

            return [...data];
        }
        default:
            return state;
    }
  }
  
  export default targets;