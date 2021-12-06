import {
  setDataMasterUkuranSuccess,
  setDataMasterUkuranFailed,
  GET_ALL_MASTER_UKURAN,
  GET_MASTER_UKURAN_ID,
  setEditFormMasterUkuran,
  setDataMasterUkuranEdit,
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
        dispatch(setDataMasterUkuranSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterUkuranFailed({ error: response.error }));
      }
    }
  };

const masterUkuranGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_UKURAN_ID) {
      dispatch(setEditFormMasterUkuran(true));
      const dataMasterUkuran = getState().masterukuran.feedback;
      const dataMasterUkuranFilter = dataMasterUkuran.filter((item) => {
        return item.kode_ukuran === action.payload;
      });
      dispatch(setDataMasterUkuranEdit({ dataEdit: dataMasterUkuranFilter }));
    }
  };

const data = [masterUkuranGetAll, masterUkuranGetDataID];

export default data;
