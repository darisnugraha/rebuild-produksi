import {
  setDataMasterBatuSuccess,
  setDataMasterBatuFailed,
  GET_ALL_MASTER_BATU,
  GET_MASTER_BATU_ID,
  setEditFormMasterBatu,
  setDataMasterBatuEdit,
} from "../actions/masterbatu";

const masterBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_BATU) {
      const response = await api.MasterBatu.getAllMasterBatu();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterBatuSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterBatuFailed({ error: response.error }));
      }
    }
  };

const masterBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_BATU_ID) {
      dispatch(setEditFormMasterBatu(true));
      const dataMasterBatu = getState().masterbatu.feedback;
      const dataMasterBatuFilter = dataMasterBatu.filter((item) => {
        return item.kode_batu === action.payload;
      });
      dispatch(setDataMasterBatuEdit({ dataEdit: dataMasterBatuFilter }));
    }
  };

const data = [masterBatuGetAll, masterBatuGetDataID];

export default data;
