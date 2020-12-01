import {ACTION_TYPE} from '../../constants';
export function requestUserList(payload) {
    return {
        type:ACTION_TYPE.GET_USER_LIST,
        payload
    }
}
export function requestUserListSuccess(payload) {
    return {
        type:ACTION_TYPE.GET_USER_LIST_SUCCESS,
        payload
    }
}
export function requestUserListFailure(payload) {
    return {
        type:ACTION_TYPE.GET_USER_LIST_FAILURE,
        payload
    }
}