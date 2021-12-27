import {
  setDataAbuTukangSuccess,
  setDataAbuTukangFailed,
  GET_ALL_ABU_TUKANG,
} from "../actions/abutukang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const getDataSetorAbuTukangPotong =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_ABU_TUKANG) {
      dispatch(setLoadingButton(true));
      const data = getState().form.ButtonAbuTukang.values;
      const dataDivisi = getState().kirimbahanadmin.feedback;
      const dataDivisiFill = dataDivisi.filter((item) => {
        return item.kode_divisi === data.divisi;
      });
      const onSendData = {
        nama_divisi: dataDivisiFill[0].nama_divisi,
        staff: data.staff,
      };
      const response = await api.AbuTukang.getSetorAbuTukang({
        dataKirim: onSendData,
      });
      if (response.value?.status === "berhasil") {
        dispatch(setLoadingButton(false));
        if (response.value?.data.length === 0) {
          sweetalert.default.Failed("Data Outstand Potong Kosong !");
          dispatch(setDataAbuTukangSuccess({ feedback: response.value.data }));
        } else {
          sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
          dispatch(setDataAbuTukangSuccess({ feedback: response.value.data }));
        }
      } else {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
        dispatch(setDataAbuTukangFailed({ error: response.error }));
      }
    }
  };

const data = [getDataSetorAbuTukangPotong];

export default data;
