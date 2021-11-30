import {
    setDataMasterOriginalSuccess,
    setDataMasterOriginalFailed,
    GET_ALL_MASTER_ORIGINAL,
  } from "../actions/masteroriginal";
  
  const masterOriginalGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_ORIGINAL) {
        const response = await api.MasterOriginal.getAllMasterOriginal();
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataMasterOriginalSuccess({ feedback: response.value.data })
          );
        } else {
          dispatch(setDataMasterOriginalFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterOriginalGetAll];
  
  export default data;
  