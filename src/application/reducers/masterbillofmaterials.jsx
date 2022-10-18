// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MASTER_BILL_OF_MATERIALS_SUCCESS,
  SET_DATA_MASTER_BILL_OF_MATERIALS_FAILED,
  SET_EDIT_FORM_ON,
  SET_EDIT_FORM_OFF,
  SET_DATA_MASTER_BILL_OF_MATERIALS_EDIT,
  SET_VISIBLE_DETAIL_BAHAN,
  SET_DETAIL_BAHAN_SAVE,
  EDIT_DETAIL_BAHAN,
  SET_EDIT_DETAIL_BAHAN,
  SET_IS_EDIT_DETAIL_BAHAN,
} from "../actions/masterbillofmaterials";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  isEditDetailBahan: false,
  isVisible: false,
  dataEdit: [],
  dataEditBahan: [],
  isVisibleDetail: false,
  dataDetailBahan: [],
};

const masterbillofmaterials = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MASTER_BILL_OF_MATERIALS_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MASTER_BILL_OF_MATERIALS_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_EDIT_FORM_ON:
    case SET_EDIT_FORM_OFF:
      return {
        ...state,
        dataEdit: [],
        isEdit: action.payload,
        isVisible: action.payload,
      };
    case SET_DATA_MASTER_BILL_OF_MATERIALS_EDIT:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    case SET_VISIBLE_DETAIL_BAHAN:
      return {
        ...state,
        isVisibleDetail: action.payload.data,
      };
    case SET_DETAIL_BAHAN_SAVE:
      return {
        ...state,
        dataDetailBahan: action.payload.data,
        isVisibleDetail: false,
      };
    case EDIT_DETAIL_BAHAN:
      return {
        ...state,
        isVisibleDetail: true,
        isEditDetailBahan: true,
      };
    case SET_EDIT_DETAIL_BAHAN:
      return {
        ...state,
        dataEditBahan: action.payload.data,
      };
    case SET_IS_EDIT_DETAIL_BAHAN:
      return {
        ...state,
        isEditDetailBahan: action.payload.data,
      };
    default:
      return state;
  }
};

export default masterbillofmaterials;
