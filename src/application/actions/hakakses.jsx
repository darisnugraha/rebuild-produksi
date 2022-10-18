export const ADD_HAK_AKSES_MENU_USER = "[hakakses] add menu user";
export const GET_HAK_AKSES_MENU_USER = "[hakakses] get menu user";
export const SET_HAK_AKSES_MENU_USER = "[hakakses] set menu user";

export const addHakAksesMenuUser = (menuData, userID) => ({
  type: ADD_HAK_AKSES_MENU_USER,
  payload: { data: menuData, user: userID },
});

export const getHakAksesMenuUser = (userID) => ({
  type: GET_HAK_AKSES_MENU_USER,
  payload: { data: userID },
});

export const setHakAksesMenuUser = ({ feedback }) => ({
  type: SET_HAK_AKSES_MENU_USER,
  payload: { data: feedback },
});
