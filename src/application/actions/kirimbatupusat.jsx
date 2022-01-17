export const GET_ALL_JO_KIRIM_BATU =
  "[kirimbatupusat] get all jo kirim batu pusat";
export const SET_DATA_JO_KIRIM_BATU_SUCCESS =
  "[kirimbatupusat] get all jo kirim batu pusat success";
export const SET_DATA_JO_KIRIM_BATU_FAILED =
  "[kirimbatupusat] get all jo kirim batu pusat failed";
export const SET_DETAIL_JO_LOCAL = "[kirimbatupusat] set detail jo local";
export const GET_ALL_DETAIL_BATU = "[kirimbatupusat] get all detail batu pusat";
export const SET_DATA_DETAIL_BATU_SUCCESS =
  "[kirimbatupusat] get all detail batu pusat success";
export const SET_DATA_DETAIL_BATU_FAILED =
  "[kirimbatupusat] get all detail batu pusat failed";
export const COUNT_BERAT_BATU_KIRIM = "[kirimbatupusat] count berat batu kirim";
export const COUNT_BERAT_BATU_KIRIM_SUCCESS =
  "[kirimbatupusat] count berat batu kirim success";
export const COUNT_BERAT_BATU_KIRIM_FAILED =
  "[kirimbatupusat] count berat batu kirim failed";
export const SET_BATU_LOCAL = "[kirimbatupusat] set batu local";
export const ADD_CART_BATU_KIRIM_SUCCESS =
  "[kirimbatupusat] add cart batu kirim success";
export const ADD_CART_BATU_KIRIM_FAILED =
  "[kirimbatupusat] add cart batu kirim failed";
export const CHECKOUT_KIRIM_BATU = "[kirimbatupusat] checkout kirim batu local";
export const CHECKOUT_KIRIM_BATU_SUCCESS =
  "[kirimbatupusat] checkout batu kirim success";
export const CHECKOUT_KIRIM_BATU_FAILED =
  "[kirimbatupusat] checkout batu kirim failed";

export const getAllJOKirimBatuPusat = ({ noJO }) => ({
  type: GET_ALL_JO_KIRIM_BATU,
  payload: { data: noJO },
});
export const setDataJOKirimBatuPusatSuccess = ({ feedback }) => ({
  type: SET_DATA_JO_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataJOKirimBatuPusatFailed = ({ error }) => ({
  type: SET_DATA_JO_KIRIM_BATU_FAILED,
  payload: { data: error },
});

export const simpanDetailJOLokal = {
  type: SET_DETAIL_JO_LOCAL,
};

export const getAllDetailBatu = ({ noJO }) => ({
  type: GET_ALL_DETAIL_BATU,
  payload: { data: noJO },
});
export const setDataDetailBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailBatuFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_BATU_FAILED,
  payload: { data: error },
});

export const countBeratBatuKirim = ({ jumlah }) => ({
  type: COUNT_BERAT_BATU_KIRIM,
  payload: { data: jumlah },
});
export const setCountBeratBatuSuccess = ({ feedback }) => ({
  type: COUNT_BERAT_BATU_KIRIM_SUCCESS,
  payload: { data: feedback },
});
export const setCountBeratBatuFailed = ({ error }) => ({
  type: COUNT_BERAT_BATU_KIRIM_FAILED,
  payload: { data: error },
});

export const simpanBatuLokal = {
  type: SET_BATU_LOCAL,
};
export const addCartKirimBatuSuccess = ({ feedback }) => ({
  type: ADD_CART_BATU_KIRIM_SUCCESS,
  payload: { data: feedback },
});
export const addCartKirimBatuFailed = ({ error }) => ({
  type: ADD_CART_BATU_KIRIM_FAILED,
  payload: { data: error },
});

export const checkoutKirimBatu = {
  type: CHECKOUT_KIRIM_BATU,
};
export const checkoutKirimBatuSuccess = ({ feedback }) => ({
  type: CHECKOUT_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const checkoutKirimBatuFailed = ({ error }) => ({
  type: CHECKOUT_KIRIM_BATU_FAILED,
  payload: { data: error },
});
