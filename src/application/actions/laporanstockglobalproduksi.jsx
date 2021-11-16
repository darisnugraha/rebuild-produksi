export const GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI =
  '[laporanstockglobalproduksi] get all laporanstockglobalproduksi';
export const SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_SUCCESS =
  '[laporanstockglobalproduksi] get all laporanstockglobalproduksi R success';
export const SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_FAILED =
  '[laporanstockglobalproduksi] get all laporanstockglobalproduksi R failed';
export const SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_SUCCESS =
  '[laporanstockglobalproduksi] get all laporanstockglobalproduksi L success';
export const SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_FAILED =
  '[laporanstockglobalproduksi] get all laporanstockglobalproduksi L failed';

export const getAllLaporanStockGlobalProduksi = {
  type: GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI,
};

export const setDataLaporanStockGlobalProduksiRFailed = (error) => ({
  type: SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_FAILED,
  payload: { data: error },
});

export const setDataLaporanStockGlobalProduksiRSuccess = (feedback) => ({
  type: SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_SUCCESS,
  payload: { data: feedback },
});

export const setDataLaporanStockGlobalProduksiLFailed = (error) => ({
  type: SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_FAILED,
  payload: { data: error },
});

export const setDataLaporanStockGlobalProduksiLSuccess = (feedback) => ({
  type: SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_SUCCESS,
  payload: { data: feedback },
});
