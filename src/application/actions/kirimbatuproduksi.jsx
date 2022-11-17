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

export const SET_JUMLAH_KIRIM = "[kirimbatuproduksi] set jumlah batu";

export const COUNT_BERAT_KIRIM_BATU_PRODUKSI =
  "[kirimbatuproduksi] count berat kirim batu produksi";

export const SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI =
  "[kirimbatuproduksi] set count berat kirim batu produksi";

export const POST_DATA_KIRIM_BATU_LOKAL =
  "[kirimbatuproduksi] post data kirim batu produksi";
export const SET_DATA_KIRIM_BATU_SUCCESS =
  "[kirimbatuproduksi] set data kirim batu produksi success";
export const SET_DATA_KIRIM_BATU_FAILED =
  "[kirimbatuproduksi] set data kirim batu produksi failed";

export const POST_DATA_DETAIL_BATU_LOKAL =
  "[kirimbatuproduksi] post data detail batu produksi";
export const SET_DATA_DETAIL_BATU_SUCCESS =
  "[kirimbatuproduksi] set data detail batu produksi success";
export const SET_DATA_DETAIL_BATU_FAILED =
  "[kirimbatuproduksi] set data detail batu produksi failed";

export const SET_DATA_HISTORY_KIRIM_BATU_SUCCESS =
  "[kirimbatuproduksi] set data history kirim batu produksi success";
export const SET_DATA_HISTORY_KIRIM_BATU_FAILED =
  "[kirimbatuproduksi] set data history kirim batu produksi failed";

export const ADD_DATA_KIRIM_BATU =
  "[kirimbatuproduksi] add data kirim batu post";

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

export const setJumlahKirim = ({ jumlah }) => ({
  type: SET_JUMLAH_KIRIM,
  payload: { data: jumlah },
});

export const countBeratKirimBatuProduksi = ({ beratBatu }) => ({
  type: COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  payload: beratBatu,
});
export const setCountBeratKirimBatuProduksi = (berat) => ({
  type: SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  payload: { data: berat },
});

export const addDataKirimBatu = {
  type: POST_DATA_KIRIM_BATU_LOKAL,
};

export const setDataKirimBatuProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBatuProduksiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BATU_FAILED,
  payload: { data: error },
});

export const addDataDetailBatu = {
  type: POST_DATA_DETAIL_BATU_LOKAL,
};

export const setDataDetailBatuProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailBatuProduksiFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_BATU_FAILED,
  payload: { data: error },
});

export const setDataHistoryKirimBatuProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_HISTORY_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataHistoryKirimBatuProduksiFailed = ({ error }) => ({
  type: SET_DATA_HISTORY_KIRIM_BATU_FAILED,
  payload: { data: error },
});

export const addDataKirimBatuPost = {
  type: ADD_DATA_KIRIM_BATU,
};
