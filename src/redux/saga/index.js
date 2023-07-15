import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./userSaga";
import { watchProductAsync } from "./productsSaga";

export function* rootSaga() {
    yield all([
        watchUsersAsync(),
        watchProductAsync()
    ])
}