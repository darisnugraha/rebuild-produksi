import {
  setDataSetorOutstandPotongSuccess,
  setDataSetorOutstandPotongFailed,
  GET_ALL_SETOR_OUTSTAND_POTONG,
} from "../actions/abutukangpotong";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const getDataSetorAbuTukangPotong =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SETOR_OUTSTAND_POTONG) {
      dispatch(setLoadingButton(true));
      const response = await api.AbuTukangPotong.getSetorOutstandPotong({
        dataKirim: "",
      });
      if (response.value?.status === "berhasil") {
        dispatch(setLoadingButton(false));
        if (response.value?.data.length === 0) {
          sweetalert.default.Failed("Data Outstand Potong Kosong !");
          dispatch(
            setDataSetorOutstandPotongSuccess({ feedback: response.value.data })
          );
        } else {
          sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
          dispatch(
            setDataSetorOutstandPotongSuccess({ feedback: response.value.data })
          );
        }
      } else {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
        dispatch(setDataSetorOutstandPotongFailed({ error: response.error }));
      }
    }
  };

const data = [getDataSetorAbuTukangPotong];

export default data;
