// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_TERIMA_POTONG_FAILED,
  SET_DATA_LAPORAN_TERIMA_POTONG_SUCCESS,
} from "../actions/laporanterimapotong";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporanterimapotong = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_TERIMA_POTONG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_TERIMA_POTONG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanterimapotong;
