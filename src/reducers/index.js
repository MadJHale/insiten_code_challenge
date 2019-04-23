import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import targets from './targets';
import table from './table';

export default combineReducers({
    form: formReducer,
    targets,
    table
})