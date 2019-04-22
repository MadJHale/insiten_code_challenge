import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import targets from './targets';

export default combineReducers({
    form: reduxFormReducer,
    targets
})