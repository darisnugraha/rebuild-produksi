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
} from "../actions/kirimmasak";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getHistoryKirimMasak =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_HISTORY_KIRIM_MASAK) {
      const response = await api.KirimMasak.getAllHistoryKirimMasak();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataHistoryKirimMasakSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataHistoryKirimMasakFailed({ error: response.error }));
      }
    }
  };

const getDataTerimaLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_LEBUR_MASAK) {
      const response = await api.KirimMasak.getDataTerimaLebur({
        data: action.payload.data,
      });
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataTerimaLeburMasakSuccess({ feedback: response.value.data })
        );
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataTerimaLeburMasakFailed({ error: response.error }));
      }
    }
  };

const setKarat24 =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_24K) {
      let berat_murni = getState().kirimmasak.feedback[0]?.berat_kirim || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(count24KSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataTerimaBerat({ beratTerima: berat_terima }));
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
          data.berat_kirim === undefined ||
          data.kadar === undefined ||
          data.karat_24 === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
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
          data.berat_kirim === undefined ||
          data.kadar === undefined ||
          data.karat_24 === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
          sweetalert.default.Success("Berhasil Menyimpan Data !");
          dataLocal.push(data);
          writeLocal("data_kirim_masak", dataLocal);
          window.location.reload();
        }
      }
    }
  };

const data = [
  getHistoryKirimMasak,
  getDataTerimaLebur,
  setKarat24,
  setDataLokalKirimMasak,
];

export default data;
