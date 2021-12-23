import {
  setDataTerimaTukangPotongSuccess,
  setDataTerimaTukangPotongFailed,
  GET_TERIMA_TUKANG_POTONG,
  setNoPohon,
  setDataSusutSuccess,
  setDataBeratTerima,
  setDataBeratPentolan,
  SET_SUSUT,
  ADD_TERIMA_TUKANG_POTONG,
} from "../actions/terimatukangpotong";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataPohon =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_TUKANG_POTONG) {
      const response = await api.TerimaTukangPotong.getTerimaTukangPotong({
        data: action.payload.data,
      });
      dispatch(setNoPohon({ feedback: action.payload.data }));
      log(response);
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataTerimaTukangPotongSuccess({ feedback: response.value.data })
          );
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataSusutSuccess({ feedback: "" }));
          dispatch(setDataBeratTerima({ beratTerima: "" }));
          dispatch(setDataBeratPentolan({ beratPentolan: "" }));
          dispatch(setDataTerimaTukangPotongSuccess({ feedback: [] }));
          dispatch(
            setDataTerimaTukangPotongFailed({ error: response.value.pesan })
          );
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataSusutSuccess({ feedback: "" }));
        dispatch(setDataBeratTerima({ beratTerima: "" }));
        dispatch(setDataBeratPentolan({ beratPentolan: "" }));
        dispatch(setDataTerimaTukangPotongSuccess({ feedback: [] }));
        dispatch(
          setDataTerimaTukangPotongFailed({ error: response.error.data.pesan })
        );
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
        getState().terimatukangpotong.feedback[0]?.berat_casting || 0;
      let berat_terima = action.payload.data || 0;
      let berat_pentolan =
        getState().form.FormTerimaTukangPotong.values.berat_terima || 0;
      let susut = 0;
      susut =
        parseFloat(berat_murni) -
        parseFloat(berat_terima) -
        parseFloat(berat_pentolan);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
      dispatch(setDataBeratPentolan({ beratPentolan: berat_pentolan }));
    }
  };

const addDataTerimaTukangPotong =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_TUKANG_POTONG) {
      const data = getState().form.FormTerimaTukangPotong.values;
      if (data !== undefined) {
        data.berat = parseFloat(data.berat);
        data.berat_susut = parseFloat(data.berat_susut);
        data.berat_terima = parseFloat(data.berat_terima);
        data.berat_barang = parseFloat(data.berat_barang);
        const response = await api.TerimaTukangPotong.addTerimaPotong(data);
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            sweetalert.default.Success(response.value?.pesan);
          } else {
            sweetalert.default.Failed(response.value?.pesan);
          }
        } else {
          sweetalert.default.Failed(response.error?.data.pesan);
        }
      } else {
        sweetalert.default.Failed("Mohon Isi Form Terlebih Dahulu !");
      }
    }
  };

const data = [getDataPohon, setBeratSusut, addDataTerimaTukangPotong];

export default data;
