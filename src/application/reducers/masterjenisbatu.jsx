// Type your data here, it can be string, or any type of data, just write your variable
import {
    SET_DATA_MASTER_JENIS_BATU_SUCCESS,
    SET_DATA_MASTER_JENIS_BATU_FAILED,
    } from "../actions/masterjenisbatu";
    const initialState = {
    feedback: [],
    error: null,
    isEdit: false,
    };
    
    const masterjenisbatu = (state = initialState, action) => {
      switch (action.type) {
        case SET_DATA_MASTER_JENIS_BATU_SUCCESS :
          return {
            ...state,
            feedback : action.payload.data
          }
        case SET_DATA_MASTER_JENIS_BATU_FAILED :
          return {
            ...state,
            error : action.payload.data
          }
        default:
          return state;
      }
    };
    
    export default masterjenisbatu;