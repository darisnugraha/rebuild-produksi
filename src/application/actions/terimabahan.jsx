export const GET_BAHAN = "[terimabahan] get bahan";
export const SET_DATA_BAHAN_SUCCESS =
  "[terimabahan] get tukang terima bahan success";
export const SET_DATA_BAHAN_FAILED =
  "[terimabahan] get tukang terima bahan failed";

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
export const SET_BERAT = "[terimabahan] set berat";

export const ADD_TERIMA_BAHAN = "[terimabahan] add terima bahan";

export const SET_DIVISI = "[terimabahan] set divisi";

export const GET_TUKANG_DIVISI = "[terimabahan] get tukang by divisi";
export const SET_TUKANG_DIVISI_SUCCESS =
  "[terimabahan] get tukang by divisi success";
export const SET_TUKANG_DIVISI_FAILED =
  "[terimabahan] get tukang by divisi failed";

export const GET_TUKANG_DIVISI_PUSAT =
  "[terimabahan] get tukang by divisi pusat";
export const SET_TUKANG_DIVISI_PUSAT_SUCCESS =
  "[terimabahan] get tukang by divisi pusat success";
export const SET_TUKANG_DIVISI_PUSAT_FAILED =
  "[terimabahan] get tukang by divisi pusat failed";

export const GET_DETAIL_BAHAN = "[terimabahan] get detail bahan";
export const SET_DETAIL_BAHAN_SUCCESS =
  "[terimabahan] get detail bahan success";
export const SET_DETAIL_BAHAN_FAILED = "[terimabahan] get detail bahan failed";

export const getBahanbyDivisiAndStaff = ({ staff }) => ({
  type: GET_BAHAN,
  payload: { data: staff },
});
export const setDataBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataBahanFailed = ({ error }) => ({
  type: SET_DATA_BAHAN_FAILED,
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

export const setBahan = ({ namaBahan }) => ({
  type: SET_BAHAN,
  payload: { data: namaBahan },
});

export const setBeratBahan = ({ berat }) => ({
  type: SET_BERAT,
  payload: { data: berat },
});

export const getSaldoKirimBahanOpenChange = ({ namaBahan }) => ({
  type: GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  payload: { data: namaBahan },
});

export const addTerimaBahan = {
  type: ADD_TERIMA_BAHAN,
};

export const setDivisi = (divisi) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});

export const getTukangByDivisi = (divisi) => ({
  type: GET_TUKANG_DIVISI,
  payload: { data: divisi },
});
export const setTukangDivisiSuccess = ({ feedback }) => ({
  type: SET_TUKANG_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setTukangDivisiFailed = ({ error }) => ({
  type: SET_TUKANG_DIVISI_FAILED,
  payload: { data: error },
});

export const getTukangByDivisiPusat = (divisi) => ({
  type: GET_TUKANG_DIVISI_PUSAT,
  payload: { data: divisi },
});
export const setTukangDivisiPusatSuccess = ({ feedback }) => ({
  type: SET_TUKANG_DIVISI_PUSAT_SUCCESS,
  payload: { data: feedback },
});
export const setTukangDivisiPusatFailed = ({ error }) => ({
  type: SET_TUKANG_DIVISI_PUSAT_FAILED,
  payload: { data: error },
});

export const getDetailBahan = (dataKirim) => ({
  type: GET_DETAIL_BAHAN,
  payload: { data: dataKirim },
});
export const setDetailBahanSuccess = ({ feedback }) => ({
  type: SET_DETAIL_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDetailBahanFailed = ({ error }) => ({
  type: SET_DETAIL_BAHAN_FAILED,
  payload: { data: error },
});
