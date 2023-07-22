import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./userSaga";
import { watchProductsAsync } from "./productsSaga";

export function* rootSaga() {
    yield all([
        watchUsersAsync(),
        watchProductsAsync()
    ])
}