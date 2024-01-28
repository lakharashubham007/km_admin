import {  
    FETCH_HOTEL_DROPDOWN_OPTIONS, 
    SET_HOTEL_DROPDOWN_OPTIONS,
 } from "./actionTypes";

export const fetchHotelDropdownOptions = () =>{
    return ({
     type: FETCH_HOTEL_DROPDOWN_OPTIONS,
    })
 }

 export const setHotelsDropdownOptions = (data) => {
    return ({
        type: SET_HOTEL_DROPDOWN_OPTIONS,
        payload: data,
    })
 }
 