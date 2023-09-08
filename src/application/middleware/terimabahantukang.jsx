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
  GET_BERAT_BAHAN_BY_STAFF,
  getBeratBahanByStaff,
  ADD_TERIMA_BAHAN_TUKANG,
} from "../actions/terimabahantukang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";

const addTerimaBahanTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_BAHAN_TUKANG) {
      const data = getState().form.FormTerimaBahanTukang.values;
      const id = data.bahan;
      const realid = data.id;
      const dataBahan = getState().terimabahantukang.feedbackBahan;
      const dataBahanFill = dataBahan.find((item) => item._id === id);
      const nama_bahan = dataBahanFill.nama_bahan;
      const dataKirim = {
        _id: realid,
        divisi_asal: data.divisi_asal,
        divisi_tujuan: "ADMIN BAHAN",
        tukang_asal: data.tukang_asal,
        tukang_tujuan: "ADMIN BAHAN",
        nama_bahan: nama_bahan,
        berat: data.berat_bahan,
      };
      api.TerimaBahanTukang.addTerimaBahanTukang(dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

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
          if (res.value.length !== 0) {
            dispatch(
              setDataTukangAsalDivisiSuccess({
                feedback: res.value,
                divisi_asal: action.payload.data,
                staff_asal: res.value[0].nama_tukang,
              })
            );
            dispatch(
              getAllBahanAsalTukang({ staff: res.value[0].nama_tukang })
            );
          }
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
      const form = getState().form.FormTerimaBahanTukang.values;
      const data = {
        divisi: form.divisi_asal || null,
        staff: action.payload.data || null,
        namaBahan: "ALL",
      };
      api.TerimaBahanTukang.getBahanTukangAsal(data).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataBahanAsalTukangSuccess({ feedback: res.value }));
            dispatch(getBeratBahanByStaff({ bahan: res.value[0]._id }));
          } else {
            dispatch(setDataBahanAsalTukangSuccess({ feedback: [] }));
          }
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
      const id = action.payload.data;
      const dataBahan = getState().terimabahantukang.feedbackBahan;
      const dataBahanFill = dataBahan.find((item) => item._id === id);
      const nama_bahan = dataBahanFill.nama_bahan;
      const data = {
        divisi:
          getState().form.FormTerimaBahanTukang.values.divisi_asal || null,
        staff: getState().form.FormTerimaBahanTukang.values.tukang_asal || null,
        nama_bahan: nama_bahan,
        divisi_tujuan: "ADMIN BAHAN",
      };
      const res = await api.TerimaBahanTukang.getSaldoKirimBahanTukangOpen(
        data
      );
      const cek = res.value.filter((el) => el.nama_bahan === nama_bahan);
      let resfill = "";
      console.log(cek.length);
      if (cek.length === 1) {
        resfill = res.value.find((el) => el.nama_bahan === nama_bahan);
      } else {
        resfill = res.value.find(
          (el) =>
            el.berat === dataBahanFill.berat && el.nama_bahan === nama_bahan
        );
      }
      const dataSend = { id: resfill?._id };
      const response =
        await api.TerimaBahanTukang.getSaldoKirimBahanTukangOpenNew(dataSend);
      if (response.value !== null) {
        dispatch(
          setDataBeratBahanSuccess({
            feedback: response.value,
            berat: response.value?.berat,
          })
        );
        dispatch(change("FormTerimaBahanTukang", "id", response.value._id));
      } else {
        dispatch(setDataBeratBahanFailed({ error: response.error }));
      }
    }
  };

const data = [
  addTerimaBahanTukang,
  divisiAsalGetAll,
  tukangAsalDivisiGetAll,
  bahanAsalTukangGetAll,
  beratBahanAsalGetAll,
  beratBahanAsalGetByStaffAll,
];

export default data;
