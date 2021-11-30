import {
    setDataMasterUkuranSuccess,
    setDataMasterUkuranFailed,
    GET_ALL_MASTER_UKURAN,
  } from "../actions/masterukuran";
  
  const masterUkuranGetAll =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_UKURAN) {
        const response = await api.MasterUkuran.getAllMasterUkuran();
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataMasterUkuranSuccess({ feedback: response.value.data })
          );
        } else {
          dispatch(setDataMasterUkuranFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterUkuranGetAll];
  
  export default data;
  