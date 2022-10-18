import {
  setDataHistoryKirimMasakSuccess,
  setDataHistoryKirimMasakFailed,
  GET_ALL_HISTORY_KIRIM_MASAK,
  setDataTerimaLeburMasakSuccess,
  GET_TERIMA_LEBUR_MASAK,
  setDataTerimaLeburMasakFailed,
  SET_24K,
  count24KSuccess,
  setDataTerimaBerat,
  SET_LOCAL_DATA_KIRIM_MASAK,
  ADD_KIRIM_MASAK,
} from "../actions/kirimmasak";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getHistoryKirimMasak =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_HISTORY_KIRIM_MASAK) {
      api.KirimMasak.getAllHistoryKirimMasak().then((res) => {
        if (res.value !== null) {
          dispatch(setDataHistoryKirimMasakSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataHistoryKirimMasakFailed({ error: res.error }));
        }
      });
    }
  };

const getDataTerimaLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_LEBUR_MASAK) {
      api.KirimMasak.getDataTerimaLebur({
        data: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataTerimaLeburMasakSuccess({ feedback: res.value }));
          } else {
            dispatch(setDataTerimaLeburMasakSuccess({ feedback: [] }));
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataTerimaLeburMasakFailed({ error: res.value }));
          }
        } else {
          dispatch(setDataTerimaLeburMasakSuccess({ feedback: [] }));
          sweetalert.default.Failed(
            res.error?.data.message || "Terjadi Kesalahan !"
          );
          dispatch(setDataTerimaLeburMasakFailed({ error: res.error }));
        }
      });
    }
  };

const setKarat24 =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_24K) {
      let berat_terima = getState().kirimmasak.feedback[0]?.berat_kirim || 0;
      let kadar = action.payload.data || 0;
      const kadar_kali = parseFloat(kadar) / 100;
      let susut = 0;
      susut = parseFloat(berat_terima) * kadar_kali;
      dispatch(count24KSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataTerimaBerat({ beratTerima: kadar }));
    }
  };

const setDataLokalKirimMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_LOCAL_DATA_KIRIM_MASAK) {
      if (
        getLocal("data_kirim_masak") === undefined ||
        getLocal("data_kirim_masak") === null
      ) {
        const data = getState().form.FormKirimMasak.values;
        let dataLocal = [];

        if (
          data.no_terima_lebur === undefined ||
          data.berat === undefined ||
          data.kadar === undefined ||
          data.karat === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
          data.berat = parseFloat(data.berat);
          data.kadar = parseFloat(data.kadar);
          data.karat = parseFloat(data.karat);

          sweetalert.default.Success("Berhasil Menyimpan Data !");
          dataLocal.push(data);
          writeLocal("data_kirim_masak", dataLocal);
          window.location.reload();
        }
      } else {
        let dataLocal = getLocal("data_kirim_masak");
        const data = getState().form.FormKirimMasak.values;
        if (
          data.no_terima_lebur === undefined ||
          data.berat === undefined ||
          data.kadar === undefined ||
          data.karat === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
          data.berat = parseFloat(data.berat);
          data.kadar = parseFloat(data.kadar);
          data.karat = parseFloat(data.karat);

          sweetalert.default.Success("Berhasil Menyimpan Data !");
          dataLocal.push(data);
          writeLocal("data_kirim_masak", dataLocal);
          window.location.reload();
        }
      }
    }
  };

const addDataKirimMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_MASAK) {
      const data = getLocal("data_kirim_masak");
      const onSend = {
        detail_kirim_masak_bahan: data,
      };
      api.KirimMasak.addKirimMasak({ dataKirim: onSend }).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
          localStorage.removeItem("data_kirim_masak");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [
  getHistoryKirimMasak,
  getDataTerimaLebur,
  setKarat24,
  setDataLokalKirimMasak,
  addDataKirimMasak,
];

export default data;
