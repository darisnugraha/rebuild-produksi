// Type your data here, it can be string, or any type of data, just write your variable
import {
    SET_DATA_MASTER_WARNA_SUCCESS,
    SET_DATA_MASTER_WARNA_FAILED,
    } from "../actions/masterwarna";
    const initialState = {
    feedback: [],
    error: null,
    isEdit: false,
    };
    
    const masterwarna = (state = initialState, action) => {
      switch (action.type) {
        case SET_DATA_MASTER_WARNA_SUCCESS :
          return {
            ...state,
            feedback : action.payload.data
          }
        case SET_DATA_MASTER_WARNA_FAILED :
          return {
            ...state,
            error : action.payload.data
          }
        default:
          return state;
      }
    };
    
    export default masterwarna;