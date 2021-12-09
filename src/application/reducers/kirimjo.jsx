// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_COUNT_BERAT_KIRIM_JO,
  COUNT_BERAT_KIRIM_JO,
  SET_JUMLAH_KIRIM_JO,
} from "../actions/kirimjo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  dataDetailJO: [],
  jumlahKirim: 0,
  beratKirim: 0,
  beratSusut: 0,
};

const kirimjo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        dataDetailJO: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_COUNT_BERAT_KIRIM_JO:
      return {
        ...state,
        beratSusut: action.payload.data,
      };
    case COUNT_BERAT_KIRIM_JO:
      return {
        ...state,
        beratKirim: action.payload,
      };
    case SET_JUMLAH_KIRIM_JO:
      return {
        ...state,
        jumlahKirim: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimjo;
