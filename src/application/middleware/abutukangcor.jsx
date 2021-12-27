import {
  setDataSetorOutstandCastingSuccess,
  setDataSetorOutstandCastingFailed,
  GET_ALL_SETOR_OUTSTAND_CASTING,
} from "../actions/abutukangcor";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const getDataSetorAbuTukangCOR =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SETOR_OUTSTAND_CASTING) {
      dispatch(setLoadingButton(true));
      const response = await api.AbuTukangCOR.getSetorOutstandCasting({
        dataKirim: "",
      });
      if (response.value?.status === "berhasil") {
        dispatch(setLoadingButton(false));
        if (response.value?.data.length === 0) {
          sweetalert.default.Failed("Data Outstand Casting Kosong !");
          dispatch(
            setDataSetorOutstandCastingSuccess({
              feedback: response.value.data,
            })
          );
        } else {
          sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
          dispatch(
            setDataSetorOutstandCastingSuccess({
              feedback: response.value.data,
            })
          );
        }
      } else {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
        dispatch(setDataSetorOutstandCastingFailed({ error: response.error }));
      }
    }
  };

const data = [getDataSetorAbuTukangCOR];

export default data;
