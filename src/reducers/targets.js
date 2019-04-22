const targets = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TARGET':
        return [
          ...state,
          {
            id: action.id,
            companies: action.text
          }
        ]
      case 'DELETE_TARGET':
        return state.map() //remove target from id
      default:
        return state
    }
  }
  
  export default targets
  