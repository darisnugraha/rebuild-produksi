import {
  setDataMasterKondisiSuccess,
  setDataMasterKondisiFailed,
  GET_ALL_MASTER_KONDISI,
} from "../actions/masterkondisi";

const masterKondisiGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_KONDISI) {
      const response = await api.MasterKondisi.getAllMasterKondisi();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterKondisiSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterKondisiFailed({ error: response.error }));
      }
    }
  };

const data = [masterKondisiGetAll];

export default data;
