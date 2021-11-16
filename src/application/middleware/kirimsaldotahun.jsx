import { GET_ALL_KIRIM_SALDO_TAHUN } from "../actions/kirimsaldotahun";
import { setLoadingButton } from "../actions/ui";
import moment from "moment";

const kirimsaldotahun =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_SALDO_TAHUN) {
      dispatch(setLoadingButton(true));
      const data = getState().form.FormLaporanKirimSaldoTahun.values;
      const tgl = new Date(data.date);
      data.date = moment.tz(tgl, "Asia/Jakarta").format("YYYY-MM");
      log(data);
      setTimeout(() => {
        dispatch(setLoadingButton(false));
      }, 1000);
    }
  };

const data = [kirimsaldotahun];

export default data;
