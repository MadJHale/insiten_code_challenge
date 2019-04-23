import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import targets from './targets';

export default combineReducers({
    form: formReducer,
    targets: targets
})