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
          nama_divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_produksi", dataOnsend);

        const response = await api.LaporanProduksi.getTerimaProduksi(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataTerimaProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataTerimaProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataTerimaProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataTerimaProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(setDataTerimaProduksiFailed({ error: response.error }));
        }
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
          nama_divisi: data.divisi,
          staff: data.tukang,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_kirim_produksi", dataOnsend);

        const response = await api.LaporanProduksi.getKirimProduksi(dataOnsend);
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataKirimProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataKirimProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataKirimProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataKirimProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(setDataKirimProduksiFailed({ error: response.error }));
        }
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

        const response = await api.LaporanProduksi.getTerimaTambahanProduksi(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataTerimaTambahanProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataTerimaTambahanProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataTerimaTambahanProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataTerimaTambahanProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(
            setDataTerimaTambahanProduksiFailed({ error: response.error })
          );
        }
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

        const response = await api.LaporanProduksi.getTerimaBatuProduksi(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataTerimaBatuProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataTerimaBatuProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataTerimaBatuProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataTerimaBatuProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(setDataTerimaBatuProduksiFailed({ error: response.error }));
        }
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

        const response = await api.LaporanProduksi.getOutstandProduksi(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataOutstandProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataOutstandProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataOutstandProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataOutstandProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(setDataOutstandProduksiFailed({ error: response.error }));
        }
      }
    }
  };

const getAllDataTerimaGudangProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
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
          nama_divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_terima_gudang_produksi", dataOnsend);

        const response = await api.LaporanProduksi.getTerimaProduksi(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataTerimaGudangProduksiSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataTerimaGudangProduksiSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataTerimaGudangProduksiSuccess({ feedback: [] }));
            dispatch(
              setDataTerimaGudangProduksiFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(
            setDataTerimaGudangProduksiFailed({ error: response.error })
          );
        }
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
