import {
  setDataMasterBahanSuccess,
  setDataMasterBahanFailed,
  GET_ALL_MASTER_BAHAN,
  GET_MASTER_BAHAN_ID,
  setEditFormMasterBahan,
  setDataMasterBahanEdit,
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

const masterBahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_BAHAN_ID) {
      dispatch(setEditFormMasterBahan(true));
      const dataMasterBahan = getState().masterbahan.feedback;
      const dataMasterBahanFilter = dataMasterBahan.filter((item) => {
        return item.kode_bahan === action.payload;
      });
      dispatch(setDataMasterBahanEdit({ dataEdit: dataMasterBahanFilter }));
    }
  };

const data = [masterBahanGetAll, masterBahanGetDataID];

export default data;
