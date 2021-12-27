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
      const response = await api.TerimaLebur.getTerimaLebur({
        data: action.payload.data,
      });
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataTerimaLeburSuccess({ feedback: response.value.data })
          );
        } else {
          dispatch(setDataTerimaLeburSuccess({ feedback: [] }));
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataTerimaLeburFailed({ error: response.value }));
        }
      } else {
        dispatch(setDataTerimaLeburSuccess({ feedback: [] }));
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataTerimaLeburFailed({ error: response.error }));
      }
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
        getState().terimalebur.feedback[0]?.tot_berat_murni || 0;
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
      const response = await api.TerimaLebur.addTerimaLebur({
        dataKirim: data,
      });
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          sweetalert.default.Success(response.value.pesan);
        } else {
          sweetalert.default.Failed(response.value.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [getDataTerimaLebur, setBeratSusut, addDataTerimaLebur];

export default data;
