import {
  setBahan,
  GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  ADD_TERIMA_TAMBAHAN,
  setDataTukangTerimaTambahanSuccess,
  GET_TUKANG_BAHAN,
  setDataTukangTerimaTambahanFailed,
  setKodeStaff,
  setBeratBahan,
  GET_DATA_SALDO_TAMBAHAN,
  setSaldoTamabahan,
} from "../actions/terimatambahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllTukangTerimaTambahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TUKANG_BAHAN) {
      const divisi = getLocal("divisi").toUpperCase();
      api.TerimaTambahan.getAllTukangTerimaTambahan(divisi).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(
              setDataTukangTerimaTambahanSuccess({ feedback: res.value })
            );
            dispatch(setKodeStaff({ staff: res.value[0].asal_saldo_tukang }));
            dispatch(setBahan({ noTransaksi: res.value[0]?.nama_bahan }));
            dispatch(setBeratBahan({ berat: res.value[0].berat }));
          }
        } else {
          dispatch(setDataTukangTerimaTambahanFailed({ error: res.error }));
        }
      });
    }
  };

const getAllSaldoTambahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DATA_SALDO_TAMBAHAN) {
      const divisi = action.payload.data;
      api.TerimaTambahan.getSaldoTambahan(divisi).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setSaldoTamabahan({ feedback: res.value }));
          }
        } else {
          dispatch(setSaldoTamabahan({ feedback: [] }));
        }
      });
    }
  };

const getDataSaldoKirimBahanOpenChange =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE) {
      const namaBahan = action.payload.data;
      const dataBahan = getState().terimatambahan.dataTukang;
      const dataBahanFind = dataBahan.find(
        (val) => val.nama_bahan === namaBahan
      );
      dispatch(setBahan({ noTransaksi: namaBahan }));
      dispatch(setBeratBahan({ berat: dataBahanFind.berat }));
    }
  };

const addTerimaTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_TAMBAHAN) {
      const data = getState().form.FormTerimaTambahan.values;
      const onSendData = {
        divisi_tujuan: data.divisi.toUpperCase(),
        tukang_asal: data.staff,
        tukang_tujuan: data.staff_tujuan,
        nama_bahan: data.nama_bahan,
        berat: parseFloat(data.berat_bahan),
      };
      api.TerimaTambahan.addTerimaTambahan(onSendData).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [
  getAllTukangTerimaTambahan,
  getDataSaldoKirimBahanOpenChange,
  addTerimaTambahan,
  getAllSaldoTambahan,
];

export default data;
