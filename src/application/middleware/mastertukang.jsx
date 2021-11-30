import {
    setDataMasterTukangSuccess,
    setDataMasterTukangFailed,
    GET_ALL_MASTER_TUKANG,
  } from "../actions/mastertukang";
  
  const masterTukangGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_TUKANG) {
        const response = await api.MasterTukang.getAllMasterTukang();
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataMasterTukangSuccess({ feedback: response.value.data })
          );
        } else {
          dispatch(setDataMasterTukangFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterTukangGetAll];
  
  export default data;
  