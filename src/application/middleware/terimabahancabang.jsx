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
      const dataForm = getState().form.FormTerimaBahanCabang.values;
      console.log(dataForm);
    }
  };

const data = [get, post];

export default data;
