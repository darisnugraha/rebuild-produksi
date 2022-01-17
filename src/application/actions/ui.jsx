export const PAGE_LOADED_LOGIN = "[ui] page loaded login";
export const SET_LOADING_ON = "[ui] page loading on";
export const SET_LOADING_OFF = "[ui] page loading off";
export const BUTTON_LOADED = "[ui] button loaded";
export const SET_LOADING_BUTTON_ON = "[ui] button loading on";
export const SET_LOADING_BUTTON_OFF = "[ui] button loading off";
export const TABLE_LAYOUT = "[ui] table layout";
export const CHANGE_TABLE_LAYOUT = "[ui] table layout L";
export const SET_LOAD_PANEL_ON = "[ui] load panel on";
export const SET_LOAD_PANEL_OFF = "[ui] load panel off";
// export const SET_TABLE_LAYOUT_E = '[ui] table layout E';

// ini adalah action yang nantinya akan dipanggil di middleware
export const pageLoadedLogin = {
  type: PAGE_LOADED_LOGIN,
};

export const buttonLoaded = {
  type: BUTTON_LOADED,
};

export const tableLayout = {
  type: TABLE_LAYOUT,
};

export const setLoading = (isLoading) => ({
  type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
  payload: isLoading,
});

export const setLoadingButton = (isLoading) => ({
  type: isLoading ? SET_LOADING_BUTTON_ON : SET_LOADING_BUTTON_OFF,
  payload: isLoading,
});

export const setTableLayout = (typeTable) => ({
  type: CHANGE_TABLE_LAYOUT,
  payload: typeTable,
});

export const setLoadPanel = (load) => ({
  type: load ? SET_LOAD_PANEL_ON : SET_LOAD_PANEL_OFF,
  payload: load,
});
