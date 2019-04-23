const table = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_TABLE':
        let newData = Object.assign({}, state.targets);
        newData.push(action.form.acquisitionTarget.values)
        
        return [
          ...state,
          {
            targets: newData
          }
        ]
      default:
        return state
    }
  }
  
  export default table