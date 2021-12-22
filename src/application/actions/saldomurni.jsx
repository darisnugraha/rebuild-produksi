export const GET_ALL_SALDO_MURNI = "[saldomurni] get all saldo murni";
export const SET_DATA_SALDO_MURNI_SUCCESS =
  "[saldomurni] get all saldo murni success";
export const SET_DATA_SALDO_MURNI_FAILED =
  "[saldomurni] get all saldo murni failed";

export const SET_TAMBAH_SALDO_MURNI_ON =
  "[saldomurni] tambah saldo murni form on";
export const SET_TAMBAH_SALDO_MURNI_OFF =
  "[saldomurni] tambah saldo murni form off";

export const SET_AMBIL_SALDO_MURNI_ON =
  "[saldomurni] ambil saldo murni form on";
export const SET_AMBIL_SALDO_MURNI_OFF =
  "[saldomurni] ambil saldo murni form off";

export const GET_SALDO_MURNI_ID =
  "[saldomurni] get tambah ambil saldo murni id";
export const SET_DATA_SALDO_MURNI =
  "[saldomurni] set tambah ambil saldo murni edit";

export const ADD_TAMBAH_SALDO_BAHAN = "[saldomurni] add tambah saldo bahan";
export const ADD_AMBIL_SALDO_BAHAN = "[saldomurni] add ambil saldo bahan";

export const getAllSaldoMurni = {
  type: GET_ALL_SALDO_MURNI,
};
export const setDataSaldoMurniSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_MURNI_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoMurniFailed = ({ error }) => ({
  type: SET_DATA_SALDO_MURNI_FAILED,
  payload: { data: error },
});

export const setTambahSaldoMurniForm = (isAdd) => ({
  type: isAdd ? SET_TAMBAH_SALDO_MURNI_ON : SET_TAMBAH_SALDO_MURNI_OFF,
  payload: isAdd,
});

export const setAmbilSaldoMurniForm = (isTake) => ({
  type: isTake ? SET_AMBIL_SALDO_MURNI_ON : SET_AMBIL_SALDO_MURNI_OFF,
  payload: isTake,
});

export const getSaldoMurniByID = ({ dataID, btnType }) => ({
  type: GET_SALDO_MURNI_ID,
  payload: { data: dataID, type: btnType },
});
export const setDataSaldoMurniID = ({ dataSaldoMurni }) => ({
  type: SET_DATA_SALDO_MURNI,
  payload: { data: dataSaldoMurni },
});

export const addTambahSaldoBahan = {
  type: ADD_TAMBAH_SALDO_BAHAN,
};
export const addAmbilSaldoBahan = {
  type: ADD_AMBIL_SALDO_BAHAN,
};
