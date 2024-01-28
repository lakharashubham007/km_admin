import { GET_HOTEL_ID } from "./actionTypes";

const INIT_STATE = {
	id: ""
};

const Hotel = (state = INIT_STATE, action) => {
	switch (action.type) {
		case GET_HOTEL_ID:
			return {
				...state,
				id: action.payload
			};		
		
		default:
			return state;
	}
};

export default Hotel;