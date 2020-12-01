import {combineReducers} from 'redux';
import {getUserReducer} from './user.reducers';
const rootReducer = combineReducers(
    {
        userReducer:getUserReducer
    }
);

export default rootReducer;