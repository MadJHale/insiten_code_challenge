const targets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            return [
                ...state,
                {
                id: action.id,
                targets: action.newTarget
                }
            ];
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