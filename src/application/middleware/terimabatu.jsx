import {
  setDataNoKirimBatuByTanggalSuccess,
  setDataNoKirimBatuByTanggalFailed,
  GET_ALL_NO_KIRIM_BATU_BY_TANGGAL,
  GET_DETAIL_KIRIM_BATU,
  setDataDetailKirimBatuSuccess,
  setDataDetailKirimBatuFailed,
  SET_DATA_KIRIM_BATU_LOKAL,
} from "../actions/terimabatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getNoKirimBatuByTanggal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_NO_KIRIM_BATU_BY_TANGGAL) {
      const response = await api.TerimaBatu.getNoKirimBatuByTanggal({
        tanggal: action.payload.data,
      });
      if (response.value?.data.length !== 0) {
        dispatch(
          setDataNoKirimBatuByTanggalSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(
          setDataNoKirimBatuByTanggalFailed({
            error: response.error ? response.error : response.value?.pesan,
          })
        );
      }
    }
  };

const getDetailKirimBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_KIRIM_BATU) {
      const response = await api.TerimaBatu.getDataDetailKirimBatu({
        noKirimBatu: action.payload.data,
      });
      if (response.value?.data.length !== 0 || response?.value !== null) {
        dispatch(
          setDataDetailKirimBatuSuccess({ feedback: response.value?.data })
        );
      } else {
        dispatch(
          setDataDetailKirimBatuFailed({
            error: response.error ? response.error : response.value?.pesan,
          })
        );
      }
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

const data = [
  getNoKirimBatuByTanggal,
  getDetailKirimBatu,
  simpanKirimBatuLokal,
];

export default data;
