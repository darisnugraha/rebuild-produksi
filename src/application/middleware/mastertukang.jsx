import {
  setDataMasterTukangSuccess,
  setDataMasterTukangFailed,
  GET_ALL_MASTER_TUKANG,
  GET_MASTER_TUKANG_ID,
  setEditFormMasterTukang,
  setDataMasterTukangEdit,
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
        dispatch(setDataMasterTukangSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterTukangFailed({ error: response.error }));
      }
    }
  };

const masterTukangGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_TUKANG_ID) {
      dispatch(setEditFormMasterTukang(true));
      const dataMasterTukang = getState().mastertukang.feedback;
      const dataMasterTukangFilter = dataMasterTukang.filter((item) => {
        return item.kode_tukang === action.payload;
      });
      dispatch(setDataMasterTukangEdit({ dataEdit: dataMasterTukangFilter }));
    }
  };

const data = [masterTukangGetAll, masterTukangGetDataID];

export default data;
