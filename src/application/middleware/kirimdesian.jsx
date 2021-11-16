//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import { GET_ALL_KIRIM_DESIAN } from "../actions/kirimdesian";
import { setLoadingButton } from "../actions/ui";

const kirimdesian =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_DESIAN) {
      dispatch(setLoadingButton(true));
      log("test");
      setTimeout(() => {
        dispatch(setLoadingButton(false));
      }, 1000);
    }
  };

const data = [kirimdesian];

export default data;
