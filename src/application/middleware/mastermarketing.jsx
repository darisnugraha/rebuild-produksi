import {
    setDataMasterMarketingSuccess,
    setDataMasterMarketingFailed,
    GET_ALL_MASTER_MARKETING,
  } from "../actions/mastermarketing";
  
  const masterMarketingGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_MARKETING) {
        const response = await api.MasterMarketing.getAllMasterMarketing();
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataMasterMarketingSuccess({ feedback: response.value.data })
          );
        } else {
          dispatch(setDataMasterMarketingFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterMarketingGetAll];
  
  export default data;
  