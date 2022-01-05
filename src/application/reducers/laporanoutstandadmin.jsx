// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_OUTSTAND_ADMIN_FAILED,
  SET_DATA_LAPORAN_OUTSTAND_ADMIN_SUCCESS,
} from "../actions/laporanoutstandadmin";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporanoutstandadmin = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_OUTSTAND_ADMIN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_OUTSTAND_ADMIN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanoutstandadmin;
