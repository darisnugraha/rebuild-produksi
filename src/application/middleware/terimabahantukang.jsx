import {
  setDataDivisiAsalSaldoBahanSuccess,
  setDataDivisiAsalSaldoBahanFailed,
  GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
} from "../actions/terimabahantukang";

const divisiAsalGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DIVISI_ASAL_SALDO_BAHAN) {
      const response = await api.TerimaBahanTukang.getAllDivisiAsalSaldoBahan();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataDivisiAsalSaldoBahanSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataDivisiAsalSaldoBahanFailed({ error: response.error }));
      }
    }
  };

const data = [divisiAsalGetAll];

export default data;
