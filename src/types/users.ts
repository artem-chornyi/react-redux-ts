export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActoinTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersActions {
    type: UserActoinTypes.FETCH_USERS;
}

interface FetchUsersSuccessActions {
    type: UserActoinTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorActions {
    type: UserActoinTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserActoin = FetchUsersActions | FetchUsersSuccessActions | FetchUsersErrorActions;
