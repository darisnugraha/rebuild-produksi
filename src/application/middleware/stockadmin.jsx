import { GET_ALL_STOCK_ADMIN } from "../actions/stockadmin";
import { setLoadingButton } from "../actions/ui";

const kirimsaldotahun =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STOCK_ADMIN) {
      dispatch(setLoadingButton(true));
      const data = getState().form.FormLaporanStockAdmin.values;
      log(data);
      setTimeout(() => {
        dispatch(setLoadingButton(false));
      }, 1000);
    }
  };

const data = [kirimsaldotahun];

export default data;
