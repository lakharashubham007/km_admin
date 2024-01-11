import { FACILITY_LIST } from "./actionTypes";

const INIT_STATE = {
	facilities: []	
};

const Facility = (state = INIT_STATE, action) => {
    console.log(action.payload);
	switch (action.type) {
		case FACILITY_LIST:
			return {
				...state,
				facilities: action.payload
			};		
		default:
			return state;
	}
};

export default Facility;