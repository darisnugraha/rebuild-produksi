import {
  PAGE_LOADED_LOGIN,
  setLoading,
  BUTTON_LOADED,
  setLoadingButton,
  CHANGE_TABLE_LAYOUT,
} from '../actions/ui';

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === PAGE_LOADED_LOGIN) {
      // log('Page Login Loaded');
      dispatch(setLoading(false));
    }
  };

const buttonLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === BUTTON_LOADED) {
      log('Button Loaded');
      dispatch(setLoadingButton(false));
    }
  };

const tableLayoutFlow =
  ({ log }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === CHANGE_TABLE_LAYOUT) {
      // log('Table Changed L');
      const type = action.payload;
      if (type === 'L') {
        // dispatch(setDataLaporanStockGlobalProduksiSuccess([]));
      } else {
        // dispatch(setDataLaporanStockGlobalProduksiSuccess([]));
      }
    }
  };

const data = [pageLoadedFlow, buttonLoadedFlow, tableLayoutFlow];

export default data;
