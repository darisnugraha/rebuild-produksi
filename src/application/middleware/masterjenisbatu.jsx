import {
  setDataMasterJenisBatuSuccess,
  setDataMasterJenisBatuFailed,
  GET_ALL_MASTER_JENIS_BATU,
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

const data = [masterJenisBatuGetAll];

export default data;
