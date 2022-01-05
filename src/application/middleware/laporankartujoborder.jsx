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

        const response = await api.KartuJobOrder.getAllKartuJobOrder(data);
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataKartuJoSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataKartuJoSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataKartuJoSuccess({ feedback: [] }));
            dispatch(
              setDataKartuJoFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(setDataKartuJoFailed({ error: response.error }));
        }
      }
    }
  };

const data = [getAllDataKartuJobOrder];

export default data;
