import {
  GET_TAMBAH_AMBIL_BATU_ID,
  setAmbilBatuForm,
  setDataTambahAmbilBatuID,
  setTambahBatuForm,
  COUNT_BERAT_TAMBAH_AMBIL_BATU,
  setCountBeratTambahAmbilBatu,
} from "../actions/tambahambilbatu";

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

const data = [tambahambilbatu, countberatbatu];

export default data;
