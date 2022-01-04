// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_FAILED,
  SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_SUCCESS,
} from "../actions/laporantambahjoborder";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporantambahjoborder = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporantambahjoborder;
