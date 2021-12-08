import {
  setDataDivisiSuccess,
  setDataDivisiFailed,
  GET_ALL_DIVISI,
} from "../actions/kirimbahanadmin";

const divisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DIVISI) {
      const response = await api.KirimBahanAdmin.getAllDivisi();
      if (response.value?.status === "berhasil") {
        dispatch(setDataDivisiSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataDivisiFailed({ error: response.error }));
      }
    }
  };

const data = [divisGetAll];

export default data;
