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
  getAllBahanAsalTukang,
  getBeratBahan,
  GET_BERAT_BAHAN_BY_STAFF,
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
      const divisi = action.payload.data;
      api.TerimaBahanTukang.getStaffByDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataTukangAsalDivisiSuccess({
              feedback: res.value,
              divisi_asal: action.payload.data,
              staff_asal: res.value[0].tukang,
            })
          );
          dispatch(getAllBahanAsalTukang({ staff: res.value[0].tukang }));
          dispatch(getBeratBahan({ bahan: res.value[0].nama_bahan }));
        } else {
          dispatch(setDataTukangAsalDivisiFailed({ error: res.error }));
        }
      });
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
        staff: getState().form.FormTerimaBahanTukang.values.tukang_asal || null,
      };
      api.TerimaBahanTukang.getBahanByStaff(data).then((res) => {
        if (res.value !== null) {
          dispatch(setDataBahanAsalTukangSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataBahanAsalTukangFailed({ error: res.error }));
        }
      });
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
        nama_bahan: action.payload.data,
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

const beratBahanAsalGetByStaffAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BERAT_BAHAN_BY_STAFF) {
      const data = {
        divisi:
          getState().form.FormTerimaBahanTukang.values.divisi_asal || null,
        staff: action.payload.data,
        nama_bahan: getState().form.FormTerimaBahanTukang.values.bahan || null,
      };
      const response = await api.TerimaBahanTukang.getSaldoKirimBahanTukangOpen(
        data
      );
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataBeratBahanSuccess({
            feedback: response.value.data,
            staff: action.payload.data,
          })
        );
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
  beratBahanAsalGetByStaffAll,
];

export default data;
