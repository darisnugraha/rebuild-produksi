// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_POHON_SUCCESS,
  SET_DATA_DETAIL_POHON_FAILED,
  SET_NO_POHON,
  SET_SUSUT_SUCCESS,
  SET_BERAT_TERIMA,
} from "../actions/terimacor";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  noPohon: "",
  susut: 0,
  beratTerima: 0,
};

const terimacor = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL_POHON_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DETAIL_POHON_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_NO_POHON:
      return {
        ...state,
        noPohon: action.payload.data,
      };
    case SET_SUSUT_SUCCESS:
      return {
        ...state,
        susut: action.payload.data,
      };
    case SET_BERAT_TERIMA:
      return {
        ...state,
        beratTerima: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimacor;
