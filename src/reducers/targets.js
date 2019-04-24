const targets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TARGET': {
            return [...state, {id: state.length >= 1 ? state[state.length - 1].id + 1 : 1, ...action.newTarget}];
        }
        case 'EDIT_TARGET':
            return [...state, {editData: true, ...action.data}];
        case 'DELETE_TARGET':
            return state.filter(({ id }) => id !== action.id);
        case 'UPDATE_CELL':
                for (let i = action.fromRow; i <= action.toRow; i++) {
                    state[i] = { ...state[i], ...action.updated };
                }
            return [...state]
        default:
            return state;
    }
  }
  
  export default targets;