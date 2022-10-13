import {
  setDataLaporanSaldoBatuSuccess,
  setDataLaporanSaldoBatuFailed,
  GET_ALL_LAPORAN_SALDO_BATU,
} from "../actions/laporansaldobatu";
import { setLoadingButton } from "../actions/ui";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataLaporanSaldoBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_LAPORAN_SALDO_BATU) {
      dispatch(setLoadingButton(true));
      dispatch(setDataLaporanSaldoBatuSuccess({ feedback: [] }));
      api.LaporanSaldoBatu.getAllLaporanSaldoBatu().then((res) => {
        dispatch(setLoadingButton(false));
        if (res.value !== null) {
          if (res.value.length === 0) {
            sweetalert.default.Failed("Data Laporan Kosong !");
            dispatch(setDataLaporanSaldoBatuSuccess({ feedback: [] }));
          } else {
            sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
            dispatch(setDataLaporanSaldoBatuSuccess({ feedback: res.value }));
          }
        } else {
          dispatch(setDataLaporanSaldoBatuSuccess({ feedback: [] }));
          sweetalert.default.Failed(
            res.error.data.message || "Terjadi Kesalahan !"
          );
          dispatch(setDataLaporanSaldoBatuFailed({ error: res.error }));
        }
      });
    }
  };

const data = [getAllDataLaporanSaldoBatu];

export default data;
