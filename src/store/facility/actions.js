import { CREATE_FACILITY, FACILITY_LIST } from "./actionTypes";

export const getFacilityList = data => {    
    return ({
	    type: FACILITY_LIST,
	    payload: data
    })
};

export const createFacility = (formdata) => {    
    return ({
	    type: CREATE_FACILITY,
	    payload: {formdata}
    })
};