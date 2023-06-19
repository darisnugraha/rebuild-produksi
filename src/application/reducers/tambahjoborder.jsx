// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_STAFF_SUCCESS,
  SET_DATA_STAFF_FAILED,
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_BY_POHON,
  GET_DATA_BY_POHON,
  SET_TUKANG,
  COUNT_BERAT_BALIK,
  SET_BERAT_BALIK,
  SET_KODE_MARKETING,
  SET_KODE_CUSTOMER,
  SET_KODE_STATUS_JO,
  SET_KODE_BARANG,
  SET_SPK,
  SET_NAMA_BARANG,
  SET_JUMLAH_BARANG,
  SET_TYPE_POHON_MANUAL,
  SET_KODE_JENIS_BAHAN,
} from "../actions/tambahjoborder";

const initialState = {
  feedback: [],
  dataStaff: [],
  dataDetailJO: [],
  error: null,
  isEdit: false,
  dataPohon: undefined,
  noPohon: undefined,
  tukang: undefined,
  beratBahan: 0,
  beratBalik: 0,
  kodeMarketing: undefined,
  kodeCustomer: undefined,
  kodeStatusJO: undefined,
  kodeBarang: undefined,
  spk: undefined,
  namaBarang: undefined,
  jumlahBarang: 0,
  pohonManual: false,
  kodeJenisBahan: undefined,
};

const tambahjoborder = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_STAFF_SUCCESS:
      return {
        ...state,
        dataStaff: action.payload.data,
      };
    case SET_DATA_STAFF_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        dataDetailJO: action.payload.data,
      };
    case SET_DATA_BY_POHON:
      return {
        ...state,
        dataPohon: action.payload.data,
      };
    case GET_DATA_BY_POHON:
      return {
        ...state,
        noPohon: action.payload.data,
      };
    case SET_TUKANG:
      return {
        ...state,
        tukang: action.payload.data,
      };
    case COUNT_BERAT_BALIK:
      return {
        ...state,
        beratBahan: action.payload.data,
      };
    case SET_BERAT_BALIK:
      return {
        ...state,
        beratBalik: action.payload.data,
      };
    case SET_KODE_MARKETING:
      return {
        ...state,
        kodeMarketing: action.payload.data,
      };
    case SET_KODE_CUSTOMER:
      return {
        ...state,
        kodeCustomer: action.payload.data,
      };
    case SET_KODE_STATUS_JO:
      return {
        ...state,
        kodeStatusJO: action.payload.data,
      };
    case SET_KODE_BARANG:
      return {
        ...state,
        kodeBarang: action.payload.data,
      };
    case SET_SPK:
      return {
        ...state,
        spk: action.payload.data,
      };
    case SET_NAMA_BARANG:
      return {
        ...state,
        namaBarang: action.payload.data,
      };
    case SET_JUMLAH_BARANG:
      return {
        ...state,
        jumlahBarang: action.payload.data,
      };
    case SET_TYPE_POHON_MANUAL:
      return {
        ...state,
        pohonManual: action.payload.data,
      };
    case SET_KODE_JENIS_BAHAN:
      return {
        ...state,
        kodeJenisBahan: action.payload.data,
      };
    default:
      return state;
  }
};

export default tambahjoborder;
