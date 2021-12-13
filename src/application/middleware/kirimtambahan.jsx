import {
  setDataAsalStockBahanSuccess,
  setDataAsalStockBahanFailed,
  GET_ALL_ASAL_STOCK_BAHAN,
  GET_STOCK_BAHAN_ADMIN,
  setDataStockBahanAdminByStaffSuccess,
  setDataStockBahanAdminByStaffFailed,
} from "../actions/kirimtambahan";

const getAsalStockBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_ASAL_STOCK_BAHAN) {
      const response = await api.KirimTambahan.getAllAsalStockBahan();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataAsalStockBahanSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataAsalStockBahanFailed({ error: response.error }));
      }
    }
  };

const getStockBahanAdmin =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_STOCK_BAHAN_ADMIN) {
      if (action.payload.data === null) {
        const staffKirim = getState().form.FormDetailTambahan.values.saldo_asal;
        const data = {
          staff: staffKirim,
        };
        const response = await api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        });
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataStockBahanAdminByStaffSuccess({
              feedback: response.value.data,
            })
          );
        } else {
          dispatch(
            setDataStockBahanAdminByStaffFailed({ error: response.error })
          );
        }
      } else {
        const staffKirim = action.payload.data;
        const data = {
          staff: staffKirim,
        };
        const response = await api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        });
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataStockBahanAdminByStaffSuccess({
              feedback: response.value.data,
            })
          );
        } else {
          dispatch(
            setDataStockBahanAdminByStaffFailed({ error: response.error })
          );
        }
      }
    }
  };

const data = [getAsalStockBahan, getStockBahanAdmin];

export default data;
