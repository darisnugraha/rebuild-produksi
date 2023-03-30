//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_LAPORAN_SALDO_BAHAN_PUSAT,
  setDataLaporanSaldoBahanPusatSuccess,
  setDataLaporanSaldoBahanPusatFailed,
  SET_DIVISI_BY_TUKANG,
} from "../actions/laporansaldobahanpusat";
import { setLoadingButton } from "../actions/ui";
import Moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";

const getAllDataLaporanSaldoBahanPusat =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_LAPORAN_SALDO_BAHAN_PUSAT) {
      dispatch(setLoadingButton(true));
      dispatch(setDataLaporanSaldoBahanPusatSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanSaldoBahanPusat.values;

      if (
        data.date === null ||
        data.bahan === undefined ||
        data.divisi === undefined ||
        data.tukang === undefined
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
          kelompok: data.bahan,
          staff: data.namaTukang,
          divisi: data.divisi,
          tgl_awal: tgl_dari_string,
          tgl_akhir: tgl_sampai_string,
        };
        writeLocal("laporan_saldo_bahan_pusat", dataOnsend);

        api.LaporanSaldoBahanPusat.getAllLaporanSaldoBahanPusat(
          dataOnsend
        ).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataLaporanSaldoBahanPusatSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(
                setDataLaporanSaldoBahanPusatSuccess({ feedback: res.value })
              );
            }
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataLaporanSaldoBahanPusatSuccess({ feedback: [] }));
            dispatch(setDataLaporanSaldoBahanPusatFailed({ error: res.error }));
          }
        });
      }
    }
    if (action.type === SET_DIVISI_BY_TUKANG) {
      api.LaporanSaldoBahanPusat.getDataDivisiByTukang(
        action.payload.data
      ).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(
              change(
                "FormLaporanSaldoBahanPusat",
                "namaTukang",
                res.value[0].nama_tukang
              )
            );
            dispatch(
              change(
                "FormLaporanSaldoBahanPusat",
                "divisi",
                res.value[0].divisi
              )
            );
          }
        }
      });
    }
  };

const data = [getAllDataLaporanSaldoBahanPusat];

export default data;
