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
              res.error.data.message || "Terjadi Kesalahan !"
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
      let berat_murni =
        getState().terimamasak.feedback[0]?.total_berat_murni || 0;
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
      const onSendData = {
        no_kirim_masak: data.no_kirim,
        nama_bahan: data.kode_bahan,
        berat_jadi: parseFloat(data.berat_jadi),
        berat_susut: parseFloat(data.berat_susut),
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
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [getDataTerimaMasak, setBeratSusut, addDataTerimaMasak];

export default data;
