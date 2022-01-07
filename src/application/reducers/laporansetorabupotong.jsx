// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_SETOR_ABU_POTONG_FAILED,
  SET_DATA_LAPORAN_SETOR_ABU_POTONG_SUCCESS,
} from "../actions/laporansetorabupotong";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporansetorabupotong = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_SETOR_ABU_POTONG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_SETOR_ABU_POTONG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporansetorabupotong;
