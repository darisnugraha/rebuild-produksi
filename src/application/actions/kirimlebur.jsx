export const GET_ALL_HISTORY_KIRIM_LEBUR =
  "[kirimlebur] get all history kirim lebur";
export const SET_DATA_HISTORY_KIRIM_LEBUR_SUCCESS =
  "[kirimlebur] get all history kirim lebur success";
export const SET_DATA_HISTORY_KIRIM_LEBUR_FAILED =
  "[kirimlebur] get all history kirim lebur failed";

export const GET_ALL_SALDO_BAHAN_OPEN = "[kirimlebur] get all saldo bahan open";
export const SET_DATA_SALDO_BAHAN_OPEN_SUCCESS =
  "[kirimlebur] get all saldo bahan open success";
export const SET_DATA_SALDO_BAHAN_OPEN_FAILED =
  "[kirimlebur] get all saldo bahan open failed";

export const GET_ALL_SALDO_BAHAN = "[kirimlebur] get all saldo bahan";
export const SET_DATA_SALDO_BAHAN_SUCCESS =
  "[kirimlebur] get all saldo bahan success";
export const SET_DATA_SALDO_BAHAN_FAILED =
  "[kirimlebur] get all saldo bahan failed";

export const SET_DATA_24K = "[kirimlebur] set 24k";
export const SET_DATA_ASAL_BAHAN = "[kirimlebur] set data asal bahan";
export const SET_LOCAL_DATA_KIRIM_LEBUR =
  "[kirimlebur] set data local kirim lebur";
export const ADD_KIRIM_LEBUR = "[kirimlebur] add kirim lebur";
export const COUNT_24 = "[kirimlebur] count 24 karat total";
export const SET_COUNT_24 = "[kirimlebur] set count 24 karat total";

export const getAllHistoryKirimLebur = {
  type: GET_ALL_HISTORY_KIRIM_LEBUR,
};
export const setDataHistoryKirimLeburSuccess = ({ feedback }) => ({
  type: SET_DATA_HISTORY_KIRIM_LEBUR_SUCCESS,
  payload: { data: feedback },
});
export const setDataHistoryKirimLeburFailed = ({ error }) => ({
  type: SET_DATA_HISTORY_KIRIM_LEBUR_FAILED,
  payload: { data: error },
});

export const getAllSaldoBahanOpen = ({ asalBahan }) => ({
  type: GET_ALL_SALDO_BAHAN_OPEN,
  payload: { data: asalBahan },
});
export const setDataSaldoBahanOpenSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_BAHAN_OPEN_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoBahanOpenFailed = ({ error }) => ({
  type: SET_DATA_SALDO_BAHAN_OPEN_FAILED,
  payload: { data: error },
});

export const getAllSaldoBahan = ({ idBahan }) => ({
  type: GET_ALL_SALDO_BAHAN,
  payload: { data: idBahan },
});
export const setDataSaldoBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoBahanFailed = ({ error }) => ({
  type: SET_DATA_SALDO_BAHAN_FAILED,
  payload: { data: error },
});

export const setData24K = ({ karat24 }) => ({
  type: SET_DATA_24K,
  payload: { data: karat24 },
});

export const setDataAsalBahan = ({ asalBahan }) => ({
  type: SET_DATA_ASAL_BAHAN,
  payload: { data: asalBahan },
});

export const simpanDataLocalKirimLebur = {
  type: SET_LOCAL_DATA_KIRIM_LEBUR,
};

export const addKirimLebur = {
  type: ADD_KIRIM_LEBUR,
};

export const count24 = (kadar) => ({
  type: COUNT_24,
  payload: { data: kadar },
});

export const setcount24 = (k24) => ({
  type: SET_COUNT_24,
  payload: { data: k24 },
});
