import {
  GET_ALL_MASTER_JENIS,
  setDataMasterJenisSuccess,
  setDataMasterJenisFailed,
} from "../actions/masterjenis";

const masterjenisGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS) {
      const response = await api.masterjenis.getAllMasterJenis();
      console.log(response);
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterJenisSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterJenisFailed({ error: response.error }));
      }
    }
  };

const data = [masterjenisGetAllData];

export default data;
