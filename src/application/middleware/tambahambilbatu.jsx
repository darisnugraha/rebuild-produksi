import {
  GET_TAMBAH_AMBIL_BATU_ID,
  setAmbilBatuForm,
  setDataTambahAmbilBatuID,
  setTambahBatuForm,
  COUNT_BERAT_TAMBAH_AMBIL_BATU,
  ADD_TAMBAH_BATU,
  ADD_AMBIL_BATU,
  GET_SALDO_BATU,
  setDataSaldoBatu,
  setKonversiBerat,
} from "../actions/tambahambilbatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getSaldoTambahAmbilBatu =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_BATU) {
      api.TambahAmbilBatu.getSaldoBatuAPI().then((res) => {
        if (res.value !== null) {
          dispatch(setDataSaldoBatu(res.value));
        } else {
          dispatch(setDataSaldoBatu([]));
        }
      });
    }
  };

const tambahambilbatu =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TAMBAH_AMBIL_BATU_ID) {
      if (action.payload.type === "ADD") {
        dispatch(setTambahBatuForm(true));
        const dataBatuALL = getState().tambahambilbatu.feedback;
        const dataBatuFilter = dataBatuALL.filter((item) => {
          return item._id === action.payload.data;
        });
        if (dataBatuFilter.length !== 0) {
          const kode = dataBatuFilter[0].kode_batu;
          api.TambahAmbilBatu.getDataBatuByKode(kode).then((res) => {
            if (res.value !== null) {
              const newArrData = [];
              const row = {
                kode_batu: res.value[0].kode_batu,
                nama_batu: res.value[0].nama_batu,
                status_sintetis: res.value[0].status_sintetis,
              };
              newArrData.push(row);

              dispatch(setDataTambahAmbilBatuID({ dataBatu: newArrData }));
            } else {
              dispatch(setDataTambahAmbilBatuID({ dataBatu: [] }));
            }
          });
        } else {
          dispatch(setDataTambahAmbilBatuID({ dataBatu: [] }));
        }
      } else {
        dispatch(setAmbilBatuForm(true));
        const dataBatuALL = getState().tambahambilbatu.feedback;
        const dataBatuFilter = dataBatuALL.filter((item) => {
          return item._id === action.payload.data;
        });
        if (dataBatuFilter.length !== 0) {
          const kode = dataBatuFilter[0].kode_batu;
          api.TambahAmbilBatu.getDataBatuByKode(kode).then((res) => {
            if (res.value !== null) {
              const newArrData = [];
              const row = {
                kode_batu: res.value[0].kode_batu,
                nama_batu: res.value[0].nama_batu,
                status_sintetis: res.value[0].status_sintetis,
              };
              newArrData.push(row);

              dispatch(setDataTambahAmbilBatuID({ dataBatu: newArrData }));
            } else {
              dispatch(setDataTambahAmbilBatuID({ dataBatu: [] }));
            }
          });
        } else {
          dispatch(setDataTambahAmbilBatuID({ dataBatu: [] }));
        }
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
      const berat = action.payload;
      total = berat / 0.2;
      dispatch(setKonversiBerat(total));
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
      if (data.keterangan === "") {
        sweetalert.default.Failed("Keterangan Tidak Boleh Kosong !");
      } else {
        const onSendData = {
          kode_batu: data.kode_batu,
          kategori: "TAMBAH",
          jumlah: parseInt(data.jumlah),
          berat: parseFloat(data.berat),
          keterangan: data.keterangan,
        };

        api.TambahAmbilBatu.addTambahAmbilBatu(onSendData).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(
              res.value.message || "Berhasil Menambahkan Batu !"
            );
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menambahkan Batu !"
            );
          }
        });
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
      if (data.keterangan === "") {
        sweetalert.default.Failed("Keterangan Tidak Boleh Kosong !");
      } else {
        const onSendData = {
          kode_batu: data.kode_batu,
          kategori: "AMBIL",
          jumlah: parseInt(data.jumlah),
          berat: parseFloat(data.berat),
          keterangan: data.keterangan,
        };
        api.TambahAmbilBatu.addTambahAmbilBatu(onSendData).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(
              res.value.message || "Berhasil Mengambil Batu !"
            );
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Mengambil Batu !"
            );
          }
        });
      }
    }
  };

const data = [
  getSaldoTambahAmbilBatu,
  tambahambilbatu,
  countberatbatu,
  addTambahBatu,
  addAmbilBatu,
];

export default data;
