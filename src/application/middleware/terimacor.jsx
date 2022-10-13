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
      api.TerimaCOR.getDetailPohon(action.payload.data).then((res) => {
        if (res.value !== null) {
          dispatch(setDataDetailPohonSuccess({ feedback: res.value }));
          dispatch(setNoPohon({ feedback: action.payload.data }));
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Mengambil Data !"
          );
          dispatch(setDataDetailPohonFailed({ error: res.error }));
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
      const dataKirim = {
        no_pohon: data.pohon,
        kode_jenis_bahan: data.kode_jenis_bahan,
        berat_awal: data.berat,
        berat_terima: data.berat_terima,
        berat_susut: data.berat_susut,
      };
      api.TerimaCOR.addTerimaCOR(dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menerima Casting !"
          );
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
    }
  };

const data = [getDataDetailPohon, setBeratSusut, addDataTerimaCor];

export default data;
