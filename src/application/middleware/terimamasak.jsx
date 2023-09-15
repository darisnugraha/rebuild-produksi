import {
  setDataTerimaMasakSuccess,
  setDataTerimaMasakFailed,
  GET_TERIMA_MASAK,
  SET_SUSUT,
  setDataSusutSuccess,
  setDataBeratTerima,
  ADD_TERIMA_MASAK,
  SET_24K,
  countSusut,
} from "../actions/terimamasak";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";

const getDataTerimaMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_MASAK) {
      api.TerimaMasak.getTerimaMasak({ data: action.payload.data }).then(
        (res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              dispatch(setDataTerimaMasakSuccess({ feedback: res.value }));
            } else {
              setDataTerimaMasakSuccess({ feedback: [] });
              sweetalert.default.Failed("Data Tidak Ada !");
              dispatch(setDataTerimaMasakFailed({ error: res.value }));
            }
          } else {
            setDataTerimaMasakSuccess({ feedback: [] });
            sweetalert.default.Failed(
              res.error?.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataTerimaMasakFailed({ error: res.error }));
          }
        }
      );
    }
  };

const setBeratSusut =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_SUSUT) {
      // let berat_murni =
      //   getState().terimamasak.feedback[0]?.total_berat_murni || 0;
      let berat_murni = getState().terimamasak.feedback[0]?.total_24k || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
      dispatch(change("FormTerimaMasak", "berat_susut", susut.toFixed(3)));
    }
  };
const set24K =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_24K) {
      console.log("MASUK SINI YAK");
      const brutoJadi = parseFloat(
        getState().form.FormTerimaMasak.values.berat_jadi
      );

      const kadar = parseFloat(
        getState().form.FormTerimaMasak.values.kadar || 0
      );

      const k24 = brutoJadi * (kadar / 100);
      dispatch(change("FormTerimaMasak", "k24", k24.toFixed(3)));
      dispatch(countSusut({ beratTerima: k24 }));
    }
  };

const addDataTerimaMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_MASAK) {
      const data = getState().form.FormTerimaMasak.values;
      const onSendData = {
        no_kirim_masak: data.no_kirim,
        nama_bahan: data.kode_bahan,
        berat_jadi: parseFloat(data.berat_jadi),
        berat_susut: parseFloat(data.berat_susut),
        // kadar: parseFloat(data.kadar),
        // karat_24: parseFloat(data.k24),
      };

      const dataBahan = getState().masterbahan.feedback;
      const dataBahanFill = dataBahan.filter((item) => {
        return item.kode_bahan === data.kode_bahan;
      });
      onSendData.nama_bahan = dataBahanFill[0].nama_bahan;
      api.TerimaMasak.addTerimaMasak({ dataKirim: onSendData }).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [getDataTerimaMasak, setBeratSusut, addDataTerimaMasak, set24K];

export default data;
