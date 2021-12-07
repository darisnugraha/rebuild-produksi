export const GET_DETAIL_JO_BY_ID =
  "[kirimbatuproduksi] get jo detail kirim batu produksi";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[kirimbatuproduksi] get jo detail kirim batu produksi success";
export const SET_DATA_DETAIL_JO_FAILED =
  "[kirimbatuproduksi] get jo detail kirim batu produksi failed";

export const GET_BERAT_BATU = "[kirimbatuproduksi] get berat batu";
export const SET_BERAT_BATU_SUCCESS =
  "[kirimbatuproduksi] set berat batu success";
export const SET_BERAT_BATU_FAILED =
  "[kirimbatuproduksi] set berat batu failed";

export const COUNT_BERAT_KIRIM_BATU_PRODUKSI =
  "[kirimbatuproduksi] count berat kirim batu produksi";

export const SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI =
  "[kirimbatuproduksi] set count berat kirim batu produksi";

export const getJOKirimBatuByID = ({ noJO }) => ({
  type: GET_DETAIL_JO_BY_ID,
  payload: { data: noJO },
});
export const setDataJoKirimBatuProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataJoKirimBatuProduksiFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const getBeratBatuByID = ({ kodeBatu }) => ({
  type: GET_BERAT_BATU,
  payload: { data: kodeBatu },
});
export const setBeratBatuSuccess = ({ dataBatu }) => ({
  type: SET_BERAT_BATU_SUCCESS,
  payload: { data: dataBatu },
});
export const setBeratBatuFailed = ({ error }) => ({
  type: SET_BERAT_BATU_FAILED,
  payload: { data: error },
});

export const countBeratKirimBatuProduksi = ({ jumlah }) => ({
  type: COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  payload: jumlah,
});
export const setCountBeratKirimBatuProduksi = (berat) => ({
  type: SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  payload: { data: berat },
});
