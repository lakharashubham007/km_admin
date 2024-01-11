import {
    SET_SIDEBAR_MENUS,
    GET_SIDEBAR_MENUS
} from "./actionTypes";

const initialState = {
    sidebarMenus: {},
    
};
console.log('initialState state in reducer',initialState);
const sidebarMenu = (state = initialState, action) => {

    switch (action.type) {
        case SET_SIDEBAR_MENUS:
            console.log("I'm inside reducer", action.payload.sidebarMenus);
            state = {
                ...state,
                loading: false,
                sidebarMenus: action.payload.sidebarMenus,
            };
            console.log('after set initialState state in reducer',initialState);
            break;
        case GET_SIDEBAR_MENUS:
            state = {

            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default sidebarMenu;
