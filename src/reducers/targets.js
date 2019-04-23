const targets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            return [
                ...state,
                {
                id: action.id,
                companies: action.text
                }
            ];
        case 'EDIT_TARGET':
            return {
                data: action.data
            };
        case 'DELETE_TARGET':
            const targetIndex = action.id;
            return state.filter(({ id }) => id !== action.id);
            //var index = this.state.products.indexOf(product);
            // this.state.products.splice(index, 1);
            // this.setState(this.state.products);
        default:
            return state;
    }
  }
  
  export default targets;