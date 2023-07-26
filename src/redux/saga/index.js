import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./userSaga";
import { watchProductsAsync } from "./productsSaga";
import { watchOrderAsync } from "./orderSaga";

export function* rootSaga() {
    yield all([
        watchUsersAsync(),
        watchProductsAsync(),
        watchOrderAsync()
    ])
}