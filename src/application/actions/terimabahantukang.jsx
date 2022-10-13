export const GET_ALL_DIVISI_ASAL_SALDO_BAHAN =
  "[terimabahantukang] get all divisi asal";
export const SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS =
  "[terimabahantukang] get all divisi asal success";
export const SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED =
  "[terimabahantukang] get all divisi asal failed";

export const GET_ALL_TUKANG_ASAL_DIVISI =
  "[terimabahantukang] get all tukang asal divisi";
export const SET_DATA_TUKANG_ASAL_DIVISI_SUCCESS =
  "[terimabahantukang] get all tukang asal divisi success";
export const SET_DATA_TUKANG_ASAL_DIVISI_FAILED =
  "[terimabahantukang] get all tukang asal divisi failed";

export const GET_BAHAN_ASAL_TUKANG =
  "[terimabahantukang] get all bahan asal tukang";
export const SET_DATA_BAHAN_ASAL_TUKANG_SUCCESS =
  "[terimabahantukang] get all bahan asal tukang success";
export const SET_DATA_BAHAN_ASAL_TUKANG_FAILED =
  "[terimabahantukang] get all bahan asal tukang failed";

export const GET_BERAT_BAHAN = "[terimabahantukang] get berat bahan";
export const GET_BERAT_BAHAN_BY_STAFF =
  "[terimabahantukang] get berat bahan by staff";
export const SET_DATA_BERAT_BAHAN_SUCCESS =
  "[terimabahantukang] get berat bahan success";
export const SET_DATA_BERAT_BAHAN_FAILED =
  "[terimabahantukang] get berat bahan failed";

export const getAllDivisiAsalSaldoBahan = {
  type: GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
};
export const setDataDivisiAsalSaldoBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataDivisiAsalSaldoBahanFailed = ({ error }) => ({
  type: SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED,
  payload: { data: error },
});

export const getAllTukangAsalDivisi = ({ divisi }) => ({
  type: GET_ALL_TUKANG_ASAL_DIVISI,
  payload: { data: divisi },
});
export const setDataTukangAsalDivisiSuccess = ({
  feedback,
  divisi_asal,
  staff_asal,
}) => ({
  type: SET_DATA_TUKANG_ASAL_DIVISI_SUCCESS,
  payload: { data: feedback, datadivisi: divisi_asal, datastaff: staff_asal },
});
export const setDataTukangAsalDivisiFailed = ({ error }) => ({
  type: SET_DATA_TUKANG_ASAL_DIVISI_FAILED,
  payload: { data: error },
});

export const getAllBahanAsalTukang = ({ staff }) => ({
  type: GET_BAHAN_ASAL_TUKANG,
  payload: { data: staff },
});
export const setDataBahanAsalTukangSuccess = ({ feedback }) => ({
  type: SET_DATA_BAHAN_ASAL_TUKANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataBahanAsalTukangFailed = ({ error }) => ({
  type: SET_DATA_BAHAN_ASAL_TUKANG_FAILED,
  payload: { data: error },
});

export const getBeratBahan = ({ bahan }) => ({
  type: GET_BERAT_BAHAN,
  payload: { data: bahan },
});

export const getBeratBahanByStaff = ({ staff }) => ({
  type: GET_BERAT_BAHAN_BY_STAFF,
  payload: { data: staff },
});
export const setDataBeratBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_BERAT_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataBeratBahanFailed = ({ error }) => ({
  type: SET_DATA_BERAT_BAHAN_FAILED,
  payload: { data: error },
});
