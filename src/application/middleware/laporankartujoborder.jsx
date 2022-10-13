import {
  GET_ALL_KARTU_JOB_ORDER,
  setDataKartuJoSuccess,
  setDataKartuJoFailed,
} from "../actions/laporankartujoborder";
import { setLoadingButton } from "../actions/ui";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataKartuJobOrder =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KARTU_JOB_ORDER) {
      dispatch(setLoadingButton(true));
      dispatch(setDataKartuJoSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanKartuJo.values;

      if (data.no_job_order === null || data.no_job_order === undefined) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        writeLocal("laporan_kartu_jo", data);

        api.KartuJobOrder.getAllKartuJobOrder(data).then((res) => {
          dispatch(setLoadingButton(false));
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Laporan Kosong !");
              dispatch(setDataKartuJoSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataKartuJoSuccess({ feedback: res.value }));
            }
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
            dispatch(setDataKartuJoSuccess({ feedback: [] }));
            dispatch(setDataKartuJoFailed({ error: res.error }));
          }
        });
      }
    }
  };

const data = [getAllDataKartuJobOrder];

export default data;
