import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_DETAIL_JO_POST_METHOD,
  COUNT_BERAT_KIRIM_JO,
  setCountBeratKirimJO,
  SAVE_JUMLAH_KIRIM_JO,
  setJumlahKirimJO,
} from "../actions/kirimjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_JO_POST_METHOD) {
      const noJO = action.payload.data;
      const asalDivisi = localStorage.getItem("divisi");
      let data = {
        asal_divisi: asalDivisi,
        no_job_order: noJO,
        parameter: "GET_DETAIL",
      };
      const response = await api.KirimJO.getDetailJO({ dataKirim: data });
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil !");
        dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
      } else {
        sweetalert.default.Failed("NO JO Tidak Ada !");
        dispatch(setDataDetailJOFailed({ error: response.error }));
      }
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_KIRIM_JO) {
      let total = 0;
      const berat_kirim = action.payload;
      const berat_akhir = parseFloat(
        getState().kirimjo.dataDetailJO[0].berat_akhir
      );
      total = berat_akhir - berat_kirim;
      dispatch(setCountBeratKirimJO(total));
    }
  };

const savejumlahkirim =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SAVE_JUMLAH_KIRIM_JO) {
      const jumlahKirim = action.payload;
      log(jumlahKirim);

      dispatch(setJumlahKirimJO(jumlahKirim));
    }
  };

const data = [getDataDetailJO, countberatbatu, savejumlahkirim];

export default data;
