import {
    setDataMasterCuttingBatuSuccess,
    setDataMasterCuttingBatuFailed,
    GET_ALL_MASTER_CUTTING_BATU,
  } from "../actions/mastercuttingbatu";
  
  const masterCuttingBatuGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_CUTTING_BATU) {
        const response = await api.MasterCuttingBatu.getAllMasterCuttingBatu();
        if (response.value?.status === "berhasil") {
          dispatch(setDataMasterCuttingBatuSuccess({ feedback: response.value.data }));
        } else {
          dispatch(setDataMasterCuttingBatuFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterCuttingBatuGetAll];
  
  export default data;
  