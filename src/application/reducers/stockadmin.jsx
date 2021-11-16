// Type your data here, it can be string, or any type of data, just write your variable
import {
    SET_DATA_STOCK_ADMIN_SUCCESS,
    SET_DATA_STOCK_ADMIN_FAILED,
    } from "../actions/stockadmin";
    
    const initialState = {
    feedback: [],
    error: null,
    isEdit: false,
    };
    
    const kirimsaldotahun = (state = initialState, action) => {
      switch (action.type) {
        case SET_DATA_STOCK_ADMIN_SUCCESS :
          return {
            ...state,
            feedback : action.payload.data
          }
        case SET_DATA_STOCK_ADMIN_FAILED :
          return {
            ...state,
            error : action.payload.data
          }
        default:
          return state;
      }
    };
    
    export default kirimsaldotahun;