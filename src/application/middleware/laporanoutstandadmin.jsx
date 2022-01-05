//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_LAPORAN_OUTSTAND_ADMIN,
  setDataLaporanOutstandAdminSuccess,
  setDataLaporanOutstandAdminFailed,
} from "../actions/laporanoutstandadmin";
import { setLoadingButton } from "../actions/ui";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataLaporanOutstand =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_LAPORAN_OUTSTAND_ADMIN) {
      dispatch(setLoadingButton(true));
      dispatch(setDataLaporanOutstandAdminSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanOutstandAdmin.values;

      if (data.tukang === null) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const dataOnsend = {
          divisi: "ADMIN",
          kode_staff: data.tukang,
        };
        writeLocal("laporan_outstand_admin", dataOnsend);

        const response = await api.LaporanOutstand.getAllLaporanOutstand(
          dataOnsend
        );
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.status === "berhasil") {
            if (response?.value.data.length === 0) {
              sweetalert.default.Failed(response?.value.pesan);
              dispatch(setDataLaporanOutstandAdminSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload(response?.value.pesan);
              dispatch(
                setDataLaporanOutstandAdminSuccess({
                  feedback: response?.value.data,
                })
              );
            }
          } else {
            sweetalert.default.Failed(response?.value.pesan);
            dispatch(setDataLaporanOutstandAdminSuccess({ feedback: [] }));
            dispatch(
              setDataLaporanOutstandAdminFailed({
                error: response.value.pesan,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(
            setDataLaporanOutstandAdminFailed({ error: response.error })
          );
        }
      }
    }
  };

const data = [getAllDataLaporanOutstand];

export default data;
