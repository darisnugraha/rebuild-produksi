import {
  setDataDetailPohonSuccess,
  setDataDetailPohonFailed,
  GET_ALL_DETAIL_POHON,
  setNoPohon,
  setDataSusutSuccess,
  setDataBeratTerima,
  SET_SUSUT,
  ADD_TERIMA_COR,
} from "../actions/terimacor";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailPohon =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_POHON) {
      const response = await api.TerimaCOR.getDetailPohon(action.payload.data);
      if (response.value?.status === "berhasil") {
        dispatch(setDataDetailPohonSuccess({ feedback: response.value.data }));
        dispatch(setNoPohon({ feedback: action.payload.data }));
      } else {
        if (response.error === null) {
          sweetalert.default.Failed(response.value?.pesan);
          dispatch(setDataDetailPohonFailed({ error: response.value.pesan }));
        } else {
          dispatch(setDataDetailPohonFailed({ error: response.error }));
        }
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
      let berat_murni = getState().terimacor.feedback[0]?.berat || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
    }
  };

const addDataTerimaCor =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_COR) {
      const data = getState().form.FormTerimaCOR.values;
      data.berat = parseFloat(data.berat);
      data.berat_susut = parseFloat(data.berat_susut);
      data.berat_terima = parseFloat(data.berat_terima);
      const response = await api.TerimaCOR.addTerimaCOR(data);
      if (response.value !== null) {
        if (response.value.status === "berhasil") {
          sweetalert.default.Success(response.value?.pesan);
        } else {
          sweetalert.default.Failed(response.value?.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error?.data.pesan);
      }
    }
  };

const data = [getDataDetailPohon, setBeratSusut, addDataTerimaCor];

export default data;
