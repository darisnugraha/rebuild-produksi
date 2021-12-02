import {
  GET_ALL_MASTER_JENIS,
  setDataMasterJenisSuccess,
  setDataMasterJenisFailed,
  GET_MASTER_JENIS_ID,
  setEditFormMasterJenis,
  setDataMasterJenisEdit,
} from "../actions/masterjenis";

const masterjenisGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS) {
      const response = await api.masterjenis.getAllMasterJenis();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterJenisSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterJenisFailed({ error: response.error }));
      }
    }
  };

const masterjenisGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_ID) {
      dispatch(setEditFormMasterJenis(true));
      const dataMasterJenis = getState().masterjenis.feedback;
      const dataMasterJenisFilter = dataMasterJenis.filter((item) => {
        return item.kode_jenis === action.payload;
      });
      dispatch(setDataMasterJenisEdit({ dataEdit: dataMasterJenisFilter }));
    }
  };

const data = [masterjenisGetAllData, masterjenisGetDataID];

export default data;
