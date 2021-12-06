import {
  setDataMasterCuttingBatuSuccess,
  setDataMasterCuttingBatuFailed,
  GET_ALL_MASTER_CUTTING_BATU,
  GET_MASTER_CUTTING_BATU_ID,
  setEditFormMasterCuttingBatu,
  setDataMasterCuttingBatuEdit,
} from "../actions/mastercuttingbatu";

const masterCuttingBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_CUTTING_BATU) {
      const response = await api.MasterCuttingBatu.getAllMasterCuttingBatu();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterCuttingBatuSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterCuttingBatuFailed({ error: response.error }));
      }
    }
  };

const masterCuttingBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_CUTTING_BATU_ID) {
      dispatch(setEditFormMasterCuttingBatu(true));
      const dataMasterCuttingBatu = getState().mastercuttingbatu.feedback;
      const dataMasterCuttingBatuFilter = dataMasterCuttingBatu.filter(
        (item) => {
          return item.kode_cutting_batu === action.payload;
        }
      );
      dispatch(
        setDataMasterCuttingBatuEdit({ dataEdit: dataMasterCuttingBatuFilter })
      );
    }
  };

const data = [masterCuttingBatuGetAll, masterCuttingBatuGetDataID];

export default data;
