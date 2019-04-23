const targets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TARGET': {
            return [...state, {id: state[state.length - 1].id + 1, ...action.payload}];
        }
        case 'EDIT_TARGET':
            return {
                data: action.data
            };
        case 'DELETE_TARGET':
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
  }
  
  export default targets;