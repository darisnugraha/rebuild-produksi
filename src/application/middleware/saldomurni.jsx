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

const saldoMurniGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_MURNI) {
      const response = await api.SaldoMurni.getAllSaldoMurni();
      if (response.value?.status === "berhasil") {
        dispatch(setDataSaldoMurniSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataSaldoMurniFailed({ error: response.error }));
      }
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
      let data_arr = [];
      data_arr.push(data);
      const onSend = { data: data_arr };
      const response = await api.TambahSaldoBahan.addTambahAmbilSaldoBahan(
        onSend
      );
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Saldo Bahan !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      let data_arr = [];
      data_arr.push(data);
      const onSend = { data: data_arr };
      const response = await api.TambahSaldoBahan.addTambahAmbilSaldoBahan(
        onSend
      );
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Mengambil Saldo Bahan !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  saldoMurniGetAll,
  saldomurniGetDataID,
  addTambahSaldoBahan,
  addAmbilSaldoBahan,
];

export default data;
