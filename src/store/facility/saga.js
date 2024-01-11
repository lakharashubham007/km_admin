import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { CREATE_FACILITY, FACILITY_LIST } from "./actionTypes";

// import login from "../../../services/api/authentication/authApi"
import { facilityCreateApi, getAllFacilityList } from '../../services/api/facility/facilityCreateApi'
import { createFacility, getFacilityList } from "./actions";

function* setFacilityList() {
  try {
    const response = yield call(getAllFacilityList);
    yield put(getFacilityList(response.facilities));
  } catch (error) {
    // yield put(apiError(error));
  }
}

function* createNewFacility({ payload: { formdata } }) {
    try {
      console.log(365);
      const response = yield call(facilityCreateApi(formdata));
      console.log(response);
      yield put(createFacility());
    } catch (error) {        
      // yield put(apiError(error));
    }
  }

export function* watchFacilityList() {  
  yield takeEvery(FACILITY_LIST, setFacilityList);
}

export function* watchCreateFacility() {  
    yield takeEvery(CREATE_FACILITY, createNewFacility);
  }

function* facilitySaga() {
  yield all([fork(watchFacilityList), fork(watchCreateFacility)]);
}

export default facilitySaga;