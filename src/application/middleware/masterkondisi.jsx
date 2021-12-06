import {
  setDataMasterKondisiSuccess,
  setDataMasterKondisiFailed,
  GET_ALL_MASTER_KONDISI,
  GET_MASTER_KONDISI_ID,
  setEditFormMasterKondisi,
  setDataMasterKondisiEdit,
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

const masterKondisiGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_KONDISI_ID) {
      dispatch(setEditFormMasterKondisi(true));
      const dataMasterKondisi = getState().masterkondisi.feedback;
      const dataMasterKondisiFilter = dataMasterKondisi.filter((item) => {
        return item.kondisi === action.payload;
      });
      dispatch(setDataMasterKondisiEdit({ dataEdit: dataMasterKondisiFilter }));
    }
  };

const data = [masterKondisiGetAll, masterKondisiGetDataID];

export default data;
