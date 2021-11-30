import {
    GET_ALL_MASTER_JENIS_BAHAN,
    setDataMasterJenisBahanSuccess,
    setDataMasterJenisBahanFailed,
  } from "../actions/masterjenisbahan";
  
  const masterjenisbahanGetAllData =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_JENIS_BAHAN) {
        const response = await api.MasterJenisBahan.getAllMasterJenisBahan();
        if (response.value?.status === "berhasil") {
          dispatch(setDataMasterJenisBahanSuccess({ feedback: response.value.data }));
        } else {
          dispatch(setDataMasterJenisBahanFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterjenisbahanGetAllData];
  
  export default data;
  