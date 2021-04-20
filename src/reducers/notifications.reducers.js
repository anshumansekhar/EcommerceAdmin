import { notificationContants } from "../actions/constants";
const initState = {
    notifications: [],
    loading: false,
    error: null
};
export default (state = initState, action) => {
    switch (action.type) {
        case notificationContants.GET_NOTIFICATIONS_SUCCESS:
            state = {
                ...state,
                notifications: action.payload.notifications
            }
            break;
        case notificationContants.GET_NOTIFICATIONS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case notificationContants.GET_NOTIFICATIONS_FAILURE:
            state = {
                ...state,
                error:action.payload.error
            }
            break;
    }
    return state;
}
