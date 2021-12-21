import {
  setDataTerimaMasakSuccess,
  setDataTerimaMasakFailed,
  GET_TERIMA_MASAK,
  SET_SUSUT,
  setDataSusutSuccess,
  setDataBeratTerima,
} from "../actions/terimamasak";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataTerimaMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_MASAK) {
      const response = await api.TerimaMasak.getTerimaMasak({
        data: action.payload.data,
      });
      log(response);
      if (response.value?.status === "berhasil") {
        dispatch(setDataTerimaMasakSuccess({ feedback: response.value.data }));
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataTerimaMasakFailed({ error: response.error }));
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
        getState().terimamasak.feedback[0]?.tot_berat_murni || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
    }
  };

const data = [getDataTerimaMasak, setBeratSusut];

export default data;
