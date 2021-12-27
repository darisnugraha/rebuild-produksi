import {
  setDataTerimaMasakSuccess,
  setDataTerimaMasakFailed,
  GET_TERIMA_MASAK,
  SET_SUSUT,
  setDataSusutSuccess,
  setDataBeratTerima,
  ADD_TERIMA_MASAK,
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
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataTerimaMasakSuccess({ feedback: response.value.data })
          );
        } else {
          setDataTerimaMasakSuccess({ feedback: [] });
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataTerimaMasakFailed({ error: response.value }));
        }
      } else {
        setDataTerimaMasakSuccess({ feedback: [] });
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

const addDataTerimaMasak =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_MASAK) {
      const data = getState().form.FormTerimaMasak.values;
      delete data.berat_tot_kirim;
      const dataBahan = getState().masterbahan.feedback;
      const dataBahanFill = dataBahan.filter((item) => {
        return item.kode_bahan === data.kode_bahan;
      });
      data.kode_bahan = dataBahanFill[0].nama_bahan;
      const response = await api.TerimaMasak.addTerimaMasak({
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

const data = [getDataTerimaMasak, setBeratSusut, addDataTerimaMasak];

export default data;
