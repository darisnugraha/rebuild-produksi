import {
  setDataMasterOriginalSuccess,
  setDataMasterOriginalFailed,
  GET_ALL_MASTER_ORIGINAL,
  GET_ALL_MASTER_ORIGINAL_BY_ID,
  setDataMasterOriginalByIdSuccess,
  setDataMasterOriginalByIdFailed,
  setEditFormMasterOriginal,
  ADD_MASTER_ORIGINAL,
} from "../actions/masteroriginal";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterOriginalGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_ORIGINAL) {
      api.MasterOriginal.getAllMasterOriginal().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterOriginalSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterOriginalFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_ALL_MASTER_ORIGINAL_BY_ID) {
      dispatch(setEditFormMasterOriginal(true));
      const id = action.payload.data;
      api.MasterOriginal.getMasterOriginalById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterOriginalByIdSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterOriginalByIdFailed({ error: res.error }));
        }
      });
    }
  };

const addDataMasterOriginal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_ORIGINAL) {
      const data = getState().form.FormTambahMasterOriginal.values;
      api.MasterOriginal.addMasterOriginal(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [masterOriginalGetAll, addDataMasterOriginal];

export default data;
