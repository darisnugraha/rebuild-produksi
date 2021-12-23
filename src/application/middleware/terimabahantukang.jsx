import {
  setDataDivisiAsalSaldoBahanSuccess,
  setDataDivisiAsalSaldoBahanFailed,
  GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
  GET_ALL_TUKANG_ASAL_DIVISI,
  setDataTukangAsalDivisiSuccess,
  setDataTukangAsalDivisiFailed,
  GET_BAHAN_ASAL_TUKANG,
  setDataBahanAsalTukangSuccess,
  setDataBahanAsalTukangFailed,
  GET_BERAT_BAHAN,
  setDataBeratBahanSuccess,
  setDataBeratBahanFailed,
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

const tukangAsalDivisiGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_TUKANG_ASAL_DIVISI) {
      const data = { divisi: action.payload.data };
      const response = await api.TerimaBahanTukang.getStaffByDivisi(data);
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataTukangAsalDivisiSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataTukangAsalDivisiFailed({ error: response.error }));
      }
    }
  };

const bahanAsalTukangGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BAHAN_ASAL_TUKANG) {
      const data = {
        divisi:
          getState().form.FormTerimaBahanTukang.values.divisi_asal || null,
        staff: action.payload.data,
      };
      const response = await api.TerimaBahanTukang.getBahanByStaff(data);
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataBahanAsalTukangSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataBahanAsalTukangFailed({ error: response.error }));
      }
    }
  };

const beratBahanAsalGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BERAT_BAHAN) {
      const data = {
        divisi:
          getState().form.FormTerimaBahanTukang.values.divisi_asal || null,
        staff: getState().form.FormTerimaBahanTukang.values.tukang_asal || null,
        bahan: action.payload.data,
      };
      const response = await api.TerimaBahanTukang.getSaldoKirimBahanTukangOpen(
        data
      );
      if (response.value?.status === "berhasil") {
        dispatch(setDataBeratBahanSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataBeratBahanFailed({ error: response.error }));
      }
    }
  };

const data = [
  divisiAsalGetAll,
  tukangAsalDivisiGetAll,
  bahanAsalTukangGetAll,
  beratBahanAsalGetAll,
];

export default data;
