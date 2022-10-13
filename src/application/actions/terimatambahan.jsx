export const GET_TUKANG_BAHAN = "[terimatambahan] get tukang bahan";
export const SET_DATA_TUKANG_TERIMA_TAMBAHAN_SUCCESS =
  "[terimatambahan] get tukang terima tambahan success";
export const SET_DATA_TUKANG_TERIMA_TAMBAHAN_FAILED =
  "[terimatambahan] get tukang terima tambahan failed";

export const GET_SALDO_BAHAN_TUKANG = "[terimatambahan] get saldo bahan tukang";
export const SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS =
  "[terimatambahan] get saldo bahan tukang success";
export const SET_DATA_SALDO_BAHAN_TUKANG_FAILED =
  "[terimatambahan] get saldo bahan tukang failed";

export const SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS =
  "[terimatambahan] get saldo kirim bahan open success";
export const SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED =
  "[terimatambahan] get saldo kirim bahan open failed";

export const GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE =
  "[terimatambahan] get saldo kirim bahan open change";

export const SET_KODE_STAFF = "[terimatambahan] set kode staff";
export const SET_BAHAN = "[terimatambahan] set bahan";
export const SET_BERAT = "[terimatambahan] set berat";

export const ADD_TERIMA_TAMBAHAN = "[terimatambahan] add terima tambahan";

export const GET_DATA_SALDO_TAMBAHAN =
  "[terimatambahan] get data saldo tambahan";
export const SET_DATA_SALDO_TAMBAHAN =
  "[terimatambahan] set data saldo tambahan";

export const getAllTukangTerimaTambahan = {
  type: GET_TUKANG_BAHAN,
};
export const setDataTukangTerimaTambahanSuccess = ({ feedback }) => ({
  type: SET_DATA_TUKANG_TERIMA_TAMBAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataTukangTerimaTambahanFailed = ({ error }) => ({
  type: SET_DATA_TUKANG_TERIMA_TAMBAHAN_FAILED,
  payload: { data: error },
});

export const getSaldoBahanTukang = ({ staff }) => ({
  type: GET_SALDO_BAHAN_TUKANG,
  payload: { data: staff },
});
export const setDataSaldoBahanTukangSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoBahanTukangFailed = ({ error }) => ({
  type: SET_DATA_SALDO_BAHAN_TUKANG_FAILED,
  payload: { data: error },
});

export const setDataSaldoKirimBahanOpenSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoKirimBahanOpenFailed = ({ error }) => ({
  type: SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED,
  payload: { data: error },
});

export const setKodeStaff = ({ staff }) => ({
  type: SET_KODE_STAFF,
  payload: { data: staff },
});

export const setBahan = ({ noTransaksi }) => ({
  type: SET_BAHAN,
  payload: { data: noTransaksi },
});

export const setBeratBahan = ({ berat }) => ({
  type: SET_BERAT,
  payload: { data: berat },
});

export const getSaldoKirimBahanOpenChange = ({ noTransaksi }) => ({
  type: GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  payload: { data: noTransaksi },
});

export const addTerimaTambahan = {
  type: ADD_TERIMA_TAMBAHAN,
};

export const getSaldoTamabahan = (divisi) => ({
  type: GET_DATA_SALDO_TAMBAHAN,
  payload: { data: divisi },
});

export const setSaldoTamabahan = ({ feedback }) => ({
  type: SET_DATA_SALDO_TAMBAHAN,
  payload: { data: feedback },
});
