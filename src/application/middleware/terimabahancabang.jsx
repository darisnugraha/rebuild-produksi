import { change } from "redux-form";
import {
  GET_ALL_CABANG,
  GET_DETAIL_KIRIM_BAHAN_CABANG,
  GET_SALDO_KIRIM_BAHAN_CABANG,
  SEND_TERIMA_BAHAN_CABANG,
  setAllCabang,
  setDetailKirimBahanCabang,
  setSaldoKirimBahanCabang,
} from "../actions/terimabahancabang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const get =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_CABANG) {
      api.TerimaBahanCabang.getAllCabang().then((res) => {
        if (res.value !== undefined) {
          const kodeToko = getLocal("tp_system").kode_toko;
          dispatch(
            setAllCabang(res.value.filter((val) => val.kode_toko !== kodeToko))
          );
        } else {
          dispatch(setAllCabang([]));
        }
      });
    }
    if (action.type === GET_SALDO_KIRIM_BAHAN_CABANG) {
      const url = action.payload.data.split("|")[1];
      api.TerimaBahanCabang.getSaldoKirimBahanCabang(url).then((res) => {
        if (res.value !== undefined && res.value !== null) {
          writeLocal("url_cabang", url);
          dispatch(setSaldoKirimBahanCabang(res.value));
        } else {
          dispatch(setSaldoKirimBahanCabang([]));
        }
      });
    }
    if (action.type === GET_DETAIL_KIRIM_BAHAN_CABANG) {
      const url = getLocal("url_cabang");
      api.TerimaBahanCabang.getDetailKirimBahanCabang(
        url,
        action.payload.data
      ).then((res) => {
        if (res.value !== undefined && res.value !== null) {
          const data = res.value;
          dispatch(setDetailKirimBahanCabang(data));
          dispatch(
            change("FormTerimaBahanCabang", "nama_bahan", data.nama_bahan)
          );
          dispatch(change("FormTerimaBahanCabang", "berat_bahan", data.berat));
        } else {
          dispatch(setDetailKirimBahanCabang([]));
        }
      });
    }
  };
const post =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SEND_TERIMA_BAHAN_CABANG) {
      dispatch(setLoadingButton(true));
      const dataForm = getState().form.FormTerimaBahanCabang.values;
      const onSend = {
        kode_toko_asal: dataForm.cabang_asal.split("|")[0],
        no_mutasi: dataForm.no_kirim,
        nama_bahan: dataForm.nama_bahan,
        berat: dataForm.berat_bahan,
      };
      api.TerimaBahanCabang.addTerimaBahanCabang(onSend).then((res) => {
        if (res.value !== null) {
          dispatch(setLoadingButton(false));
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [get, post];

export default data;
