import {
    GET_ALL_MASTER_WARNA,
    setDataMasterWarnaSuccess,
    setDataMasterWarnaFailed,
  } from "../actions/masterwarna";
  
  const masterwarnaGetAllData =
    ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
      next(action);
      if (action.type === GET_ALL_MASTER_WARNA) {
        const response = await api.MasterWarna.getAllMasterWarna();
        console.log(response);
        if (response.value?.status === "berhasil") {
          dispatch(setDataMasterWarnaSuccess({ feedback: response.value.data }));
        } else {
          dispatch(setDataMasterWarnaFailed({ error: response.error }));
        }
      }
    };
  
  const data = [masterwarnaGetAllData];
  
  export default data;
  