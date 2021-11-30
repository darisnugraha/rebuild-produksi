import {
    setDataMasterBatuSuccess,
    setDataMasterBatuFailed,
    GET_ALL_MASTER_BATU,
  } from "../actions/masterbatu";
  
  const masterBatuGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_BATU) {
        const response = await api.MasterBatu.getAllMasterBatu();
        if (response.value?.status === "berhasil") {
          dispatch(setDataMasterBatuSuccess({ feedback: response.value.data }));
        } else {
          dispatch(setDataMasterBatuFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterBatuGetAll];
  
  export default data;
  