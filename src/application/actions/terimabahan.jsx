export const GET_SALDO_BAHAN_TUKANG = "[terimabahan] get saldo bahan tukang";
export const SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS =
  "[terimabahan] get saldo bahan tukang success";
export const SET_DATA_SALDO_BAHAN_TUKANG_FAILED =
  "[terimabahan] get saldo bahan tukang failed";

export const SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS =
  "[terimabahan] get saldo kirim bahan open success";
export const SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED =
  "[terimabahan] get saldo kirim bahan open failed";

export const GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE =
  "[terimabahan] get saldo kirim bahan open change";

export const SET_KODE_STAFF = "[terimabahan] set kode staff";
export const SET_BAHAN = "[terimabahan] set bahan";

export const ADD_TERIMA_BAHAN = "[terimabahan] add terima bahan";

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

export const getSaldoKirimBahanOpenChange = ({ noTransaksi }) => ({
  type: GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  payload: { data: noTransaksi },
});

export const addTerimaBahan = {
  type: ADD_TERIMA_BAHAN,
};
