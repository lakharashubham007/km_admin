// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import getSidebarMenus from '../../services/api/authentication/sidebarMenuApi'; // Import your API function
import { setSidebarMenus } from './actions';

function* fetchSidebarMenusSaga() {
  try {
    const token = localStorage.getItem('token');
    const data = yield call(getSidebarMenus, token);
    console.log('fetchSidebar saga called');
    if (data.success) {
      yield put(setSidebarMenus(data.sidebarMenus));
    }
  } catch (error) {
    console.error('Error fetching sidebar menus:', error);
  }
}

function* sidebarSaga() {
  yield takeLatest(actionTypes.SET_SIDEBAR_MENUS, fetchSidebarMenusSaga);
  // add other sagas if needed
}

export default sidebarSaga;
