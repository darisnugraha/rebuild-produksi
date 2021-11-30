import {
    setDataMasterBahanSuccess,
    setDataMasterBahanFailed,
    GET_ALL_MASTER_BAHAN,
  } from "../actions/masterbahan";
  
  const masterBahanGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_BAHAN) {
        const response = await api.MasterBahan.getAllMasterBahan();
        if (response.value?.status === "berhasil") {
          dispatch(setDataMasterBahanSuccess({ feedback: response.value.data }));
        } else {
          dispatch(setDataMasterBahanFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterBahanGetAll];
  
  export default data;
  