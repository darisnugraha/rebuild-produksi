// API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
// writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
// getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import { reset } from 'redux-form';
import moment from 'moment-timezone';
import {
  GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI,
  setDataLaporanStockGlobalProduksiLSuccess,
  setDataLaporanStockGlobalProduksiLFailed,
  setDataLaporanStockGlobalProduksiRSuccess,
} from '../actions/laporanstockglobalproduksi';
import * as sweetalert from '../../infrastructure/shared/sweetalert';
import { setLoadingButton } from '../actions/ui';

const laporanStockGlobalProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI) {
      dispatch(setLoadingButton(true));
      const data = getState().form.FormLaporanGlobalProduksi.values;
      const tgl = new Date(data.date);
      data.date = moment.tz(tgl, 'Asia/Jakarta').format('YYYY-MM-DD');
      delete data.repair;
      const response = await api.laporanStockGlobalProduksi.addLaporanStockGlobalProduksi(data);
      if (response?.value !== null) {
        sweetalert.default.Success('Berhasil Melihat Laporan !');
        writeLocal('tanggal_lap', tgl.toLocaleDateString());
        if (data.tipe_laporan === 'L') {
          dispatch(setDataLaporanStockGlobalProduksiLSuccess(response?.value));
        } else {
          dispatch(setDataLaporanStockGlobalProduksiRSuccess(response?.value));
        }
        dispatch(reset('FormLaporanGlobalProduksi'));
        dispatch(setLoadingButton(false));
      } else {
        dispatch(setDataLaporanStockGlobalProduksiLFailed(response?.error));
        sweetalert.default.Failed('Gagal Melihat Laporan');
        dispatch(setLoadingButton(false));
      }
    }
  };

const data = [laporanStockGlobalProduksi];

export default data;
