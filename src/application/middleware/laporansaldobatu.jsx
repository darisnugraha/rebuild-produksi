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
      const response = await api.LaporanSaldoBatu.getAllLaporanSaldoBatu();
      if (response.value !== null) {
        dispatch(setLoadingButton(false));
        if (response.value?.status === "berhasil") {
          if (response.value.data.length === 0) {
            sweetalert.default.Failed(response.value.pesan);
            dispatch(setDataLaporanSaldoBatuSuccess({ feedback: [] }));
          } else {
            sweetalert.default.SuccessNoReload(response.value.pesan);
            dispatch(
              setDataLaporanSaldoBatuSuccess({ feedback: response.value.data })
            );
          }
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataLaporanSaldoBatuFailed({ error: response.value }));
        }
      } else {
        dispatch(setLoadingButton(false));
        dispatch(setDataLaporanSaldoBatuSuccess({ feedback: [] }));
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataLaporanSaldoBatuFailed({ error: response.error }));
      }
    }
  };

const data = [getAllDataLaporanSaldoBatu];

export default data;
