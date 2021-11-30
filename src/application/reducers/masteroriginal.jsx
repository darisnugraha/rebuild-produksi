// Type your data here, it can be string, or any type of data, just write your variable
import {
    SET_DATA_MASTER_ORIGINAL_SUCCESS,
    SET_DATA_MASTER_ORIGINAL_FAILED,
    } from "../actions/masteroriginal";

    const initialState = {
    feedback: [],
    error: null,
    isEdit: false,
    };
    
    const masteroriginal = (state = initialState, action) => {
      switch (action.type) {
        case SET_DATA_MASTER_ORIGINAL_SUCCESS :
          return {
            ...state,
            feedback : action.payload.data
          }
        case SET_DATA_MASTER_ORIGINAL_FAILED :
          return {
            ...state,
            error : action.payload.data
          }
        default:
          return state;
      }
    };
    
    export default masteroriginal;