//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_TERIMA_PRODUKSI,
  setDataTerimaProduksiSuccess,
  setDataTerimaProduksiFailed,
  GET_ALL_KIRIM_PRODUKSI,
  setDataKirimProduksiSuccess,
  setDataKirimProduksiFailed,
  GET_ALL_TERIMA_TAMBAHAN_PRODUKSI,
  setDataTerimaTambahanProduksiSuccess,
  setDataTerimaTambahanProduksiFailed,
  GET_ALL_TERIMA_BATU_PRODUKSI,
  setDataTerimaBatuProduksiSuccess,
  setDataTerimaBatuProduksiFailed,
  GET_ALL_OUTSTAND_PRODUKSI,
  setDataOutstandProduksiSuccess,
  setDataOutstandProduksiFailed,
  GET_ALL_TERIMA_GUDANG_PRODUKSI,
  setDataTerimaGudangProduksiSuccess,
  setDataTerimaGudangProduksiFailed,
  GET_DIVISI_GUDANG,
  setDivisiGudang,
} from "../actions/laporanproduksi";
import { setLoadingButton } from "../actions/ui";
import Moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataTerimaProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_TERIMA_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataTerimaProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanTerimaProduksi.values;

      if (data.date === null) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const tgl_dari = new Date(data.date[0]);
        const tgl_dari_string = Moment(tgl_dari, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const tgl_sampai = new Date(data.date[1]);
        const tgl_sampai_string = Moment(tgl_sampai, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const dataOnsend = {
          divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_produksi", dataOnsend);

        api.LaporanProduksi.getTerimaProduksi(dataOnsend).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataTerimaProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataTerimaProduksiSuccess({ feedback: res.value }));
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataTerimaProduksiSuccess({ feedback: [] }));
            dispatch(setDataTerimaProduksiFailed({ error: res.error }));
          }
        });
      }
    }
  };

const getAllDataKirimProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataKirimProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanKirimProduksi.values;

      if (
        data.date === null ||
        data.tukang === undefined ||
        data.divisi === undefined
      ) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const tgl_dari = new Date(data.date[0]);
        const tgl_dari_string = Moment(tgl_dari, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const tgl_sampai = new Date(data.date[1]);
        const tgl_sampai_string = Moment(tgl_sampai, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const dataOnsend = {
          divisi: data.divisi,
          staff: data.tukang,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_kirim_produksi", dataOnsend);

        api.LaporanProduksi.getKirimProduksi(dataOnsend).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataKirimProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataKirimProduksiSuccess({ feedback: res.value }));
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataKirimProduksiSuccess({ feedback: [] }));
            dispatch(setDataKirimProduksiFailed({ error: res.error }));
          }
        });
      }
    }
  };

const getAllDataTerimaTambahanProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_TERIMA_TAMBAHAN_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataTerimaTambahanProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanTerimaTambahanProduksi.values;

      if (data.date === null) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const tgl_dari = new Date(data.date[0]);
        const tgl_dari_string = Moment(tgl_dari, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const tgl_sampai = new Date(data.date[1]);
        const tgl_sampai_string = Moment(tgl_sampai, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const dataOnsend = {
          nama_divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_tambahan_produksi", dataOnsend);

        api.LaporanProduksi.getTerimaTambahanProduksi(dataOnsend).then(
          (res) => {
            dispatch(setLoadingButton(false));
            if (res.value !== null) {
              if (res.value.length === 0) {
                sweetalert.default.Failed("Data Laporan Kosong !");
                dispatch(
                  setDataTerimaTambahanProduksiSuccess({ feedback: [] })
                );
              } else {
                sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
                dispatch(
                  setDataTerimaTambahanProduksiSuccess({ feedback: res.value })
                );
              }
            } else {
              sweetalert.default.Failed(
                res.error.data.message || "Terjadi Kesalahan"
              );
              dispatch(setDataTerimaTambahanProduksiSuccess({ feedback: [] }));
              dispatch(
                setDataTerimaTambahanProduksiFailed({ error: res.error })
              );
            }
          }
        );
      }
    }
  };

const getAllDataTerimaBatuProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_TERIMA_BATU_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataTerimaBatuProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanTerimaBatuProduksi.values;

      if (data.date === null) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const tgl_dari = new Date(data.date[0]);
        const tgl_dari_string = Moment(tgl_dari, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const tgl_sampai = new Date(data.date[1]);
        const tgl_sampai_string = Moment(tgl_sampai, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const dataOnsend = {
          nama_divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_batu_produksi", dataOnsend);

        api.LaporanProduksi.getTerimaBatuProduksi(dataOnsend).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataTerimaBatuProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(
                setDataTerimaBatuProduksiSuccess({ feedback: res.value })
              );
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataTerimaBatuProduksiSuccess({ feedback: [] }));
            dispatch(setDataTerimaBatuProduksiFailed({ error: res.error }));
          }
        });
      }
    }
  };

const getAllDataOutstandProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_OUTSTAND_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataOutstandProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanOutstandProduksi.values;

      if (data.tukang === undefined || data.divisi === undefined) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const dataOnsend = {
          divisi: data.divisi,
          kode_staff: data.tukang,
        };
        writeLocal("laporan_outstand_produksi", dataOnsend);

        api.LaporanProduksi.getOutstandProduksi(dataOnsend).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataOutstandProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataOutstandProduksiSuccess({ feedback: res.value }));
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan"
            );
            dispatch(setDataOutstandProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataOutstandProduksiFailed({
                error: res.error,
              })
            );
          }
        });
      }
    }
  };

const getAllDataTerimaGudangProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DIVISI_GUDANG) {
      api.KirimBahanAdmin.getAllDivisi().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            const newArr = [];
            res.value.forEach((val) => {
              if (val.divisi.includes("GUDANG")) {
                newArr.push(val);
              }
            });
            dispatch(setDivisiGudang({ feedback: newArr }));
          }
        } else {
          dispatch(setDivisiGudang({ error: [] }));
        }
      });
    }
    if (action.type === GET_ALL_TERIMA_GUDANG_PRODUKSI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataTerimaGudangProduksiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanTerimaGudangProduksi.values;

      if (data.date === null) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const tgl_dari = new Date(data.date[0]);
        const tgl_dari_string = Moment(tgl_dari, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const tgl_sampai = new Date(data.date[1]);
        const tgl_sampai_string = Moment(tgl_sampai, "Asia/Jakarta").format(
          "YYYY-MM-DD"
        );
        const dataOnsend = {
          divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_gudang_produksi", dataOnsend);

        api.LaporanProduksi.getTerimaProduksi(dataOnsend).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataTerimaGudangProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(
                setDataTerimaGudangProduksiSuccess({ feedback: res.value })
              );
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataTerimaGudangProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataTerimaGudangProduksiFailed({
                error: res.error,
              })
            );
          }
        });
      }
    }
  };

const data = [
  getAllDataTerimaProduksi,
  getAllDataKirimProduksi,
  getAllDataTerimaTambahanProduksi,
  getAllDataTerimaBatuProduksi,
  getAllDataOutstandProduksi,
  getAllDataTerimaGudangProduksi,
];

export default data;
