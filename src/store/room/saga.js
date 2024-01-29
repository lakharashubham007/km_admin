// saga.js
import { call, put, all, takeEvery, fork } from 'redux-saga/effects';
import { FETCH_HOTEL_DROPDOWN_OPTIONS, } from './actionTypes';
import { fetchHotelsDropdownListApi } from '../../services/api/room/roomsApi';
import { setHotelsDropdownOptions } from './actions';



function* fetchHotelDropdownOption() {
    try {
      // const token = JSON.parse(localStorage.getItem('token'));    
      const data = yield call(fetchHotelsDropdownListApi);
      if (data.success) {      
        yield put(setHotelsDropdownOptions(data));
      }
    } catch (error) {
      console.error('Error adding Room Category Data', error);
    }
  }
  

export function* watchSaveRoomCategoryReq() {  
//   yield takeEvery();
}

export function* watchHotelDropdownOption() {  
    yield takeEvery(FETCH_HOTEL_DROPDOWN_OPTIONS, fetchHotelDropdownOption);
  }

function* roomSaga() {
  yield all([fork(watchSaveRoomCategoryReq), fork(watchHotelDropdownOption)] );
}
export default roomSaga;
