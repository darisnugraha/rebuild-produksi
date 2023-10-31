export const ADD_DATA_STAFF = "[tambahjoborder] add data staff";
export const SET_DATA_STAFF_SUCCESS = "[tambahjoborder] add data staff success";
export const SET_DATA_STAFF_FAILED = "[tambahjoborder] add data staff failed";
export const ADD_DATA_DETAIL_JO = "[tambahjoborder] add data detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[tambahjoborder] add data detail jo success";
export const SET_DATA_DETAIL_JO_FAILED =
  "[tambahjoborder] add data detail jo failed";
export const ADD_JOB_ORDER_CHECKOUT = "[tambahjoborder] add job order checkout";
export const GET_DATA_BY_POHON = "[tambahjoborder] get data by pohon";
export const SET_DATA_BY_POHON = "[tambahjoborder] set data by pohon";

export const SET_TUKANG = "[tambahjoborder] set tukang";

export const COUNT_BERAT_BALIK = "[tambahjoborder] count berat balik";
export const SET_BERAT_BALIK = "[tambahjoborder] set berat balik";

export const SET_KODE_MARKETING = "[tambahjoborder] set kode marketing";
export const SET_KODE_CUSTOMER = "[tambahjoborder] set kode customer";
export const SET_KODE_STATUS_JO = "[tambahjoborder] set kode status jo";
export const SET_KODE_BARANG = "[tambahjoborder] set kode barang";
export const SET_SPK = "[tambahjoborder] set spk";
export const SET_NAMA_BARANG = "[tambahjoborder] set nama barang";
export const SET_JUMLAH_BARANG = "[tambahjoborder] set jumlah barang";
export const SET_TYPE_POHON_MANUAL = "[tambahjoborder] set type pohon manual";
export const SET_KODE_JENIS_BAHAN = "[tambahjoborder] set kode jenis bahan";

export const GET_TUKANG_BY_BAHAN = "[tambahjoborder] get tukang by bahan";
export const SET_TUKANG_BY_BAHAN = "[tambahjoborder] set tukang by bahan";

export const SET_BERAT_MANUAL = "[tambahjoborder] set berat manual";
export const COUNT_BERAT_MANUAL = "[tambahjoborder] count berat manual";

export const addDataStaff = {
  type: ADD_DATA_STAFF,
};
export const setDataStaffSuccess = ({ feedback }) => ({
  type: SET_DATA_STAFF_SUCCESS,
  payload: { data: feedback },
});
export const setDataStaffFailed = ({ error }) => ({
  type: SET_DATA_STAFF_FAILED,
  payload: { data: error },
});

export const addDataDetailJO = {
  type: ADD_DATA_DETAIL_JO,
};
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const addCheckOutJO = {
  type: ADD_JOB_ORDER_CHECKOUT,
};

export const getTukangByBahan = ({ bahan }) => ({
  type: GET_TUKANG_BY_BAHAN,
  payload: { data: bahan },
});
export const setTukangByBahan = ({ feedback }) => ({
  type: SET_TUKANG_BY_BAHAN,
  payload: { data: feedback },
});
export const getDataByPohon = ({ pohon }) => ({
  type: GET_DATA_BY_POHON,
  payload: { data: pohon },
});

export const setDataByPohon = ({ feedback }) => ({
  type: SET_DATA_BY_POHON,
  payload: { data: feedback },
});

export const setTukang = (tukang) => ({
  type: SET_TUKANG,
  payload: { data: tukang },
});

export const setBeratManual = (berat) => ({
  type: SET_BERAT_MANUAL,
  payload: { data: berat },
});

export const countBeratManual = (berat) => ({
  type: COUNT_BERAT_MANUAL,
  payload: { data: berat },
});

export const countBeratBalik = (beratBahan) => ({
  type: COUNT_BERAT_BALIK,
  payload: { data: beratBahan },
});

export const setBeratBalik = (beratBalik) => ({
  type: SET_BERAT_BALIK,
  payload: { data: beratBalik },
});

export const setKodeMarketing = (kodeMarketing) => ({
  type: SET_KODE_MARKETING,
  payload: { data: kodeMarketing },
});

export const setKodeCustomer = (kodeCustomer) => ({
  type: SET_KODE_CUSTOMER,
  payload: { data: kodeCustomer },
});

export const setKodeStatusJO = (kodeStatusJO) => ({
  type: SET_KODE_STATUS_JO,
  payload: { data: kodeStatusJO },
});

export const setKodeBarang = (kodeBarang) => ({
  type: SET_KODE_BARANG,
  payload: { data: kodeBarang },
});

export const setSPK = (spk) => ({
  type: SET_SPK,
  payload: { data: spk },
});

export const setNamaBarang = (namaBarang) => ({
  type: SET_NAMA_BARANG,
  payload: { data: namaBarang },
});

export const setJumlahBarang = (jumlahBarang) => ({
  type: SET_JUMLAH_BARANG,
  payload: { data: jumlahBarang },
});

export const setTypePohonManual = (type) => ({
  type: SET_TYPE_POHON_MANUAL,
  payload: { data: type },
});

export const setKodeJenisBahan = (kodeJenisBahan) => ({
  type: SET_KODE_JENIS_BAHAN,
  payload: { data: kodeJenisBahan },
});
