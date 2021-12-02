import {
  GET_ALL_MASTER_JENIS_BAHAN,
  setDataMasterJenisBahanFailed,
  GET_MASTER_JENIS_BAHAN_ID,
  setEditFormMasterJenisBahan,
  setDataMasterJenisBahanEdit,
  setDataMasterJenisBahanSuccess,
} from "../actions/masterjenisbahan";

const masterjenisbahanGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS_BAHAN) {
      const response = await api.MasterJenisBahan.getAllMasterJenisBahan();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterJenisBahanSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterJenisBahanFailed({ error: response.error }));
      }
    }
  };

const masterjenisbahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_BAHAN_ID) {
      dispatch(setEditFormMasterJenisBahan(true));
      const dataMasterJenisBahan = getState().masterjenisbahan.feedback;
      const dataMasterJenisBahanFilter = dataMasterJenisBahan.filter((item) => {
        return item.kode_jenis_bahan === action.payload;
      });
      dispatch(
        setDataMasterJenisBahanEdit({ dataEdit: dataMasterJenisBahanFilter })
      );
    }
  };

const data = [masterjenisbahanGetAllData, masterjenisbahanGetDataID];

export default data;
