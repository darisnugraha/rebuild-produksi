// Type your data here, it can be string, or any type of data, just write your variable
import {
    SET_DATA_MASTER_MARKETING_SUCCESS,
    SET_DATA_MASTER_MARKETING_FAILED,
    } from "../actions/mastermarketing";

    const initialState = {
    feedback: [],
    error: null,
    isEdit: false,
    };
    
    const mastermarketing = (state = initialState, action) => {
      switch (action.type) {
        case SET_DATA_MASTER_MARKETING_SUCCESS :
          return {
            ...state,
            feedback : action.payload.data
          }
        case SET_DATA_MASTER_MARKETING_FAILED :
          return {
            ...state,
            error : action.payload.data
          }
        default:
          return state;
      }
    };
    
    export default mastermarketing;