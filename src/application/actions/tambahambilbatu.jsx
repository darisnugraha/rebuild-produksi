export const SET_TAMBAH_BATU_ON = "[tambahambilbatu] tambah batu form on";
export const SET_TAMBAH_BATU_OFF = "[tambahambilbatu] tambah batu form off";

export const SET_AMBIL_BATU_ON = "[tambahambilbatu] ambil batu form on";
export const SET_AMBIL_BATU_OFF = "[tambahambilbatu] ambil batu form off";

export const GET_TAMBAH_AMBIL_BATU_ID =
  "[tambahambilbatu] get tambah ambil batu id";
export const SET_DATA_TAMBAH_AMBIL_BATU =
  "[tambahambilbatu] set tambah ambil batu edit";

export const COUNT_BERAT_TAMBAH_AMBIL_BATU =
  "[tambahambilbatu] count berat tambah ambil batu";

export const SET_JUMLAH_BATU = "[tambahambilbatu] set jumlah tambah ambil batu";
export const SET_KONVERSI_BERAT =
  "[tambahambilbatu] set konversi berat tambah ambil batu";

export const ADD_TAMBAH_BATU = "[tambahambilbatu] add tambah batu";
export const ADD_AMBIL_BATU = "[tambahambilbatu] add ambil batu";

export const GET_SALDO_BATU = "[tambahambilbatu] get saldo batu";
export const SET_SALDO_BATU = "[tambahambilbatu] set saldo batu";

export const setTambahBatuForm = (isAdd) => ({
  type: isAdd ? SET_TAMBAH_BATU_ON : SET_TAMBAH_BATU_OFF,
  payload: isAdd,
});

export const setAmbilBatuForm = (isTake) => ({
  type: isTake ? SET_AMBIL_BATU_ON : SET_AMBIL_BATU_OFF,
  payload: isTake,
});

export const getTambahAmbilBatuByID = ({ dataID, btnType }) => ({
  type: GET_TAMBAH_AMBIL_BATU_ID,
  payload: { data: dataID, type: btnType },
});
export const setDataTambahAmbilBatuID = ({ dataBatu }) => ({
  type: SET_DATA_TAMBAH_AMBIL_BATU,
  payload: { data: dataBatu },
});

export const countBeratTambahAmbilBatu = ({ berat }) => ({
  type: COUNT_BERAT_TAMBAH_AMBIL_BATU,
  payload: berat,
});
export const setJumlahBatu = (jumlah) => ({
  type: SET_JUMLAH_BATU,
  payload: { data: jumlah },
});

export const setKonversiBerat = (berat) => ({
  type: SET_KONVERSI_BERAT,
  payload: { data: berat },
});

export const addTambahBatu = {
  type: ADD_TAMBAH_BATU,
};
export const addAmbilBatu = {
  type: ADD_AMBIL_BATU,
};

export const getSaldoBatu = {
  type: GET_SALDO_BATU,
};
export const setDataSaldoBatu = (feedback) => ({
  type: SET_SALDO_BATU,
  payload: { data: feedback },
});
