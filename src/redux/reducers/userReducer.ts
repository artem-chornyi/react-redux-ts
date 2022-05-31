import { UserState, UserActoin, UserActoinTypes } from "../../types/users";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: UserActoin): UserState => {
    switch (action.type) {
        case UserActoinTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActoinTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActoinTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}