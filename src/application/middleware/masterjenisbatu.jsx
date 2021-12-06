import {
  setDataMasterJenisBatuSuccess,
  setDataMasterJenisBatuFailed,
  GET_ALL_MASTER_JENIS_BATU,
  GET_MASTER_JENIS_BATU_ID,
  setEditFormMasterJenisBatu,
  setDataMasterJenisBatuEdit,
} from "../actions/masterjenisbatu";

const masterJenisBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS_BATU) {
      const response = await api.MasterJenisBatu.getAllMasterJenisBatu();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterJenisBatuSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterJenisBatuFailed({ error: response.error }));
      }
    }
  };

const masterJenisBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_BATU_ID) {
      dispatch(setEditFormMasterJenisBatu(true));
      const dataMasterJenisBatu = getState().masterjenisbatu.feedback;
      const dataMasterJenisBatuFilter = dataMasterJenisBatu.filter((item) => {
        return item.kode_jenis_batu === action.payload;
      });
      dispatch(
        setDataMasterJenisBatuEdit({ dataEdit: dataMasterJenisBatuFilter })
      );
    }
  };

const data = [masterJenisBatuGetAll, masterJenisBatuGetDataID];

export default data;
