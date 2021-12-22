import {
  GET_TAMBAH_AMBIL_BATU_ID,
  setAmbilBatuForm,
  setDataTambahAmbilBatuID,
  setTambahBatuForm,
  COUNT_BERAT_TAMBAH_AMBIL_BATU,
  setCountBeratTambahAmbilBatu,
  ADD_TAMBAH_BATU,
  ADD_AMBIL_BATU,
} from "../actions/tambahambilbatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const tambahambilbatu =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TAMBAH_AMBIL_BATU_ID) {
      if (action.payload.type === "ADD") {
        dispatch(setTambahBatuForm(true));
        const dataBatuALL = getState().masterbatu.feedback;
        const dataBatuFilter = dataBatuALL.filter((item) => {
          return item.kode_batu === action.payload.data;
        });
        dispatch(setDataTambahAmbilBatuID({ dataBatu: dataBatuFilter }));
      } else {
        dispatch(setAmbilBatuForm(true));
        const dataBatuALL = getState().masterbatu.feedback;
        const dataBatuFilter = dataBatuALL.filter((item) => {
          return item.kode_batu === action.payload.data;
        });
        dispatch(setDataTambahAmbilBatuID({ dataBatu: dataBatuFilter }));
      }
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_TAMBAH_AMBIL_BATU) {
      let total = 0;
      const jumlah = action.payload;
      const berat_asli = parseFloat(
        getState().tambahambilbatu.dataBatu[0].berat_batu
      );
      total = jumlah * berat_asli;
      dispatch(setCountBeratTambahAmbilBatu(total));
      log(total);
    }
  };

const addTambahBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TAMBAH_BATU) {
      const data = getState().form.FormTambahAmbilBatu.values;
      data.jumlah = parseFloat(data.jumlah);
      delete data.nama_batu;
      delete data.berat_batu;
      const response = await api.TambahAmbilBatu.addTambahAmbilBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Batu !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const addAmbilBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_AMBIL_BATU) {
      const data = getState().form.FormTambahAmbilBatu.values;
      data.jumlah = parseFloat(data.jumlah);
      delete data.nama_batu;
      delete data.berat_batu;
      const response = await api.TambahAmbilBatu.addTambahAmbilBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Mengambil Batu !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [tambahambilbatu, countberatbatu, addTambahBatu, addAmbilBatu];

export default data;
