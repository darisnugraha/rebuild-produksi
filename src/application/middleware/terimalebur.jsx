import {
  setDataTerimaLeburSuccess,
  setDataTerimaLeburFailed,
  GET_TERIMA_LEBUR,
  SET_SUSUT,
  setDataSusutSuccess,
  setDataBeratTerima,
  ADD_TERIMA_LEBUR,
} from "../actions/terimalebur";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataTerimaLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_LEBUR) {
      api.TerimaLebur.getTerimaLebur({
        data: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataTerimaLeburSuccess({ feedback: res.value }));
          } else {
            dispatch(setDataTerimaLeburSuccess({ feedback: [] }));
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataTerimaLeburFailed({ error: res.value }));
          }
        } else {
          dispatch(setDataTerimaLeburSuccess({ feedback: [] }));
          sweetalert.default.Failed(
            res.error.data.message || "Terjadi Kesalahan !"
          );
          dispatch(setDataTerimaLeburFailed({ error: res.error }));
        }
      });
    }
  };

const setBeratSusut =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_SUSUT) {
      let berat_murni =
        getState().terimalebur.feedback[0]?.total_berat_murni || 0;
      console.log(berat_murni);
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
    }
  };

const addDataTerimaLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_LEBUR) {
      const data = getState().form.FormTerimaLebur.values;
      data.berat_susut = parseFloat(data.berat_susut);
      data.berat_terima = parseFloat(data.berat_terima);
      api.TerimaLebur.addTerimaLebur({ dataKirim: data }).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [getDataTerimaLebur, setBeratSusut, addDataTerimaLebur];

export default data;
