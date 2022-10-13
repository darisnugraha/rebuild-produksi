import {
  setDataSaldoMurniSuccess,
  setDataSaldoMurniFailed,
  GET_ALL_SALDO_MURNI,
  GET_SALDO_MURNI_ID,
  setTambahSaldoMurniForm,
  setDataSaldoMurniID,
  setAmbilSaldoMurniForm,
  ADD_TAMBAH_SALDO_BAHAN,
  ADD_AMBIL_SALDO_BAHAN,
} from "../actions/saldomurni";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadPanel } from "../actions/ui";

const saldoMurniGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_MURNI) {
      dispatch(setLoadPanel(true));
      api.SaldoMurni.getAllSaldoMurni().then((res) => {
        dispatch(setLoadPanel(false));
        dispatch(setDataSaldoMurniSuccess({ feedback: res.value }));
        if (res.value !== null) {
        } else {
          dispatch(setLoadPanel(false));
          dispatch(setDataSaldoMurniFailed({ error: res.error }));
        }
      });
    }
  };

const saldomurniGetDataID =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_MURNI_ID) {
      if (action.payload.type === "ADD") {
        dispatch(setTambahSaldoMurniForm(true));
        const dataSaldoMurniAll = getState().saldomurni.feedback;
        const dataSaldoMurniFilter = dataSaldoMurniAll.filter((item) => {
          return item.nama_bahan === action.payload.data;
        });
        dispatch(setDataSaldoMurniID({ dataSaldoMurni: dataSaldoMurniFilter }));
      } else {
        dispatch(setAmbilSaldoMurniForm(true));
        const dataSaldoMurniAll = getState().saldomurni.feedback;
        const dataSaldoMurniFilter = dataSaldoMurniAll.filter((item) => {
          return item.nama_bahan === action.payload.data;
        });
        dispatch(setDataSaldoMurniID({ dataSaldoMurni: dataSaldoMurniFilter }));
      }
    }
  };

const addTambahSaldoBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TAMBAH_SALDO_BAHAN) {
      const data = getState().form.FormTambahAmbilSaldoMurni.values;
      data.type_trx = "TAMBAH";
      data.berat = parseFloat(data.berat);
      const dataKirim = {
        nama_bahan: data.kode_bahan,
        berat: data.berat,
        kategori: data.type_trx,
        keterangan: data.keterangan,
      };
      api.TambahSaldoBahan.addTambahAmbilSaldoBahan(dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Saldo Bahan !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Saldo Bahan !"
          );
        }
      });
    }
  };

const addAmbilSaldoBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_AMBIL_SALDO_BAHAN) {
      const data = getState().form.FormTambahAmbilSaldoMurni.values;
      data.type_trx = "AMBIL";
      data.berat = parseFloat(data.berat);
      const dataKirim = {
        nama_bahan: data.kode_bahan,
        berat: data.berat,
        kategori: data.type_trx,
        keterangan: data.keterangan,
      };
      api.TambahSaldoBahan.addTambahAmbilSaldoBahan(dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Mengambil Saldo Bahan !");
          window.location.reload();
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Mengambil Saldo Bahan !"
          );
        }
      });
    }
  };

const data = [
  saldoMurniGetAll,
  saldomurniGetDataID,
  addTambahSaldoBahan,
  addAmbilSaldoBahan,
];

export default data;
