import {
  GET_ALL_MASTER_WARNA,
  setDataMasterWarnaSuccess,
  setDataMasterWarnaFailed,
  GET_MASTER_WARNA_ID,
  setEditFormMasterWarna,
  setDataMasterWarnaEdit,
} from "../actions/masterwarna";

const masterwarnaGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_WARNA) {
      const response = await api.MasterWarna.getAllMasterWarna();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterWarnaSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterWarnaFailed({ error: response.error }));
      }
    }
  };
const masterwarnaGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_WARNA_ID) {
      dispatch(setEditFormMasterWarna(true));
      const dataMasterWarna = getState().masterwarna.feedback;
      const dataMasterWarnaFilter = dataMasterWarna.filter((item) => {
        return item.kode_warna === action.payload;
      });
      dispatch(setDataMasterWarnaEdit({ dataEdit: dataMasterWarnaFilter }));
    }
  };

const data = [masterwarnaGetAllData, masterwarnaGetDataID];

export default data;
