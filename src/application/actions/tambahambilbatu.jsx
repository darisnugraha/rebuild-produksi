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

export const SET_COUNT_BERAT_TAMBAH_AMBIL_BATU =
  "[tambahambilbatu] set count berat tambah ambil batu";

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

export const countBeratTambahAmbilBatu = ({ jumlah }) => ({
  type: COUNT_BERAT_TAMBAH_AMBIL_BATU,
  payload: jumlah,
});
export const setCountBeratTambahAmbilBatu = (berat) => ({
  type: SET_COUNT_BERAT_TAMBAH_AMBIL_BATU,
  payload: { data: berat },
});
