

// actions.js
import {SET_SIDEBAR_MENUS,GET_SIDEBAR_MENUS} from './actionTypes';

export const setSidebarMenus = (sidebarMenus) => {
    console.log('call inside action.js', sidebarMenus);
  return {
    type: SET_SIDEBAR_MENUS,
    payload:  sidebarMenus ,
  };
};


