import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { CHECK_LOGIN, LOGOUT_USER } from "./actionTypes";
import { apiError, loginUserSuccessful } from "./actions";
// import login from "../../../services/api/authentication/authApi"
import  { login } from '../../../services/api/authentication/authApi';

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call( login, {
      username: user.username,
      password: user.password,
    });

    localStorage.setItem("authUser", JSON.stringify(response));
    localStorage.setItem("token", JSON.stringify(response.tokens.token));
    yield put(loginUserSuccessful(response));

    history("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}



function* logoutUser({ payload: { history } }) {
  console.log("Im inside logout saga function where I remove local storage tokem")
  try {
    // localStorage.removeItem("authUser");
    
    history("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(CHECK_LOGIN, loginUser);
}

export function* watchUserLogout() {
  
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* loginSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default loginSaga;
