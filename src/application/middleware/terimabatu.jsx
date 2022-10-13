import {
  setDataNoKirimBatuByTanggalSuccess,
  setDataNoKirimBatuByTanggalFailed,
  GET_ALL_NO_KIRIM_BATU_BY_TANGGAL,
  GET_DETAIL_KIRIM_BATU,
  setDataDetailKirimBatuSuccess,
  setDataDetailKirimBatuFailed,
  SET_DATA_KIRIM_BATU_LOKAL,
  ADD_TERIMA_BATU_PUSAT,
  getDetailKirimBatu,
} from "../actions/terimabatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getNoKirimBatuByTanggal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_NO_KIRIM_BATU_BY_TANGGAL) {
      api.TerimaBatu.getNoKirimBatuByTanggal({
        tanggal: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(
              setDataNoKirimBatuByTanggalSuccess({ feedback: res.value })
            );
            dispatch(
              getDetailKirimBatu({ noKirimBatu: res.value[0]?.no_kirim_batu })
            );
          } else {
            dispatch(setDataNoKirimBatuByTanggalFailed({ error: [] }));
            dispatch(setDataDetailKirimBatuSuccess({ feedback: res.value }));
          }
        } else {
          dispatch(setDataNoKirimBatuByTanggalFailed({ error: [] }));
          dispatch(setDataDetailKirimBatuSuccess({ feedback: [] }));
        }
      });
    }
  };

const getDetailKirimBatuAct =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_KIRIM_BATU) {
      api.TerimaBatu.getDataDetailKirimBatu({
        noKirimBatu: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          dispatch(setDataDetailKirimBatuSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataDetailKirimBatuFailed({ error: [] }));
        }
      });
    }
  };

const simpanKirimBatuLokal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_DATA_KIRIM_BATU_LOKAL) {
      const data = getState().terimabatu.detailKirim;
      if (data.length !== 0) {
        sweetalert.default.Success("Berhasil Menyimpan Data !");
        writeLocal("data_detail_kirim_batu", data);
        window.location.reload();
      } else {
        sweetalert.default.Failed("Lengkapi Data !");
      }
    }
  };

const simpanKirimBatuPOST =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_BATU_PUSAT) {
      const data_local = getLocal("data_detail_kirim_batu");
      const data = {
        no_kirim_batu: data_local[0].no_kirim_batu,
      };
      api.TerimaBatu.addTerimaBatuPusat({ dataKirim: data }).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(res.value.message);
          localStorage.removeItem("data_detail_kirim_batu");
        } else {
          sweetalert.default.Failed(res.error.data.message);
        }
      });
    }
  };

const data = [
  getNoKirimBatuByTanggal,
  getDetailKirimBatuAct,
  simpanKirimBatuLokal,
  simpanKirimBatuPOST,
];

export default data;
