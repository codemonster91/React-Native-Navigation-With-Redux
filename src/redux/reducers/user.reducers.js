import {initialState} from '../store';
import {ACTION_TYPE} from '../../constants';

export function getUserReducer(state = initialState.users,action){
    switch(action.type){
        case ACTION_TYPE.GET_USER_LIST:
            return [
                ...state
            ]
            default:
                return state;
    }
}