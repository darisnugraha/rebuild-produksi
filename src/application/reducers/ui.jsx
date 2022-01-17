import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
  SET_LOADING_BUTTON_ON,
  SET_LOADING_BUTTON_OFF,
  CHANGE_TABLE_LAYOUT,
  SET_LOAD_PANEL_ON,
  SET_LOAD_PANEL_OFF,
} from "../actions/ui";

const initialState = {
  loading: true,
  btnLoading: false,
  typeTable: "L",
  loadpanel: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ON:
    case SET_LOADING_OFF:
      return { ...state, loading: action.payload };
    case SET_LOADING_BUTTON_ON:
    case SET_LOADING_BUTTON_OFF:
      return { ...state, btnLoading: action.payload };
    case CHANGE_TABLE_LAYOUT:
      return { ...state, typeTable: action.payload };
    case SET_LOAD_PANEL_ON:
    case SET_LOAD_PANEL_OFF:
      return { ...state, loadpanel: action.payload };
    default:
      return state;
  }
};

export default reducer;
