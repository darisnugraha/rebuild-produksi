export const GET_DETAIL_JO_POST_METHOD = "[kirimjo] get detail jo post method";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[kirimjo] get detail jo post method success";
export const SET_DATA_DETAIL_JO_FAILED =
  "[kirimjo] get detail jo post method failed";
export const SET_BAHAN_KEMBALI_KIRIM = "[kirimjo] set bahan kembali kirim jo";

export const COUNT_BERAT_BALIK_JO = "[kirimjo] count berat balik jo";
export const COUNT_BERAT_KIRIM_JO = "[kirimjo] count berat kirim jo";
export const SET_COUNT_BERAT_KIRIM_JO = "[kirimjo] set count berat kirim jo";
export const SET_TUKANG_TUJUAN = "[kirimjo] set tukang tujuan";
export const SET_JUMLAH_KIRIM_JO = "[kirimjo] set jumlah kirim jo";
export const SAVE_JUMLAH_KIRIM_JO = "[kirimjo] save jumlah kirim jo";
export const SAVE_BERAT_BATU_TAK_TERPAKAI =
  "[kirimjo] save berat batu tak terpakai";

export const ADD_LOCAL_KIRIM_JO = "[kirimjo] add local kirim jo";
export const ADD_LOCAL_TAMBAHAN = "[kirimjo] add local tambahan";
export const ADD_LOCAL_TAMBAHAN_BAHAN = "[kirimjo] add local tambahan bahan";
export const ADD_LOCAL_BATU = "[kirimjo] add local batu";

export const GET_NO_INDUK_JOB_ORDER = "[kirimjo] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[kirimjo] set no induk job order";

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[kirimjo] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[kirimjo] set data by no induk job order";

export const DELETE_JOB_ORDER = "[kirimjo] delete job order";
export const DELETE_DETAIL_BATU = "[kirimjo] delete detail batu";
export const DELETE_DETAIL_TAMBAHAN = "[kirimjo] delete detail tambahan";

export const EDIT_JOB_ORDER = "[kirimjo] edit job order";
export const SET_DATA_EDIT_JOB_ORDER = "[kirimjo] set data edit job order";
export const SET_IS_EDIT_JOB_ORDER = "[kirimjo] set is edit job order";
export const SAVE_EDIT_JOB_ORDER = "[kirimjo] save edit job order";

export const EDIT_BATU = "[kirimjo] edit batu";
export const SET_DATA_EDIT_BATU = "[kirimjo] set data edit batu";
export const SET_IS_EDIT_BATU = "[kirimjo] set is edit batu";
export const SAVE_EDIT_BATU = "[kirimjo] save edit batu";

export const EDIT_TAMBAHAN = "[kirimjo] edit tambahan";
export const SET_DATA_EDIT_TAMBAHAN = "[kirimjo] set data edit tambahan";
export const SET_IS_EDIT_TAMBAHAN = "[kirimjo] set is edit tambahan";
export const SAVE_EDIT_TAMBAHAN = "[kirimjo] save edit tambahan";

export const GET_TUKANG_BY_DIVISI = "[kirimjo] get tukang by divisi";
export const SET_TUKANG_BY_DIVISI = "[kirimjo] set tukang by divisi";

export const GET_ALL_NO_JOB_ORDER = "[kirimjo] get all no job order";
export const SET_ALL_NO_JOB_ORDER = "[kirimjo] set all no job order";

export const getDataDetailJO = ({ noJO, type }) => ({
  type: GET_DETAIL_JO_POST_METHOD,
  payload: { data: noJO, dataType: type },
});
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const setBahanKembaliKirim = (bahan) => ({
  type: SET_BAHAN_KEMBALI_KIRIM,
  payload: { data: bahan },
});

export const countBeratBalik = ({ beratBalik }) => ({
  type: COUNT_BERAT_BALIK_JO,
  payload: beratBalik,
});
export const countBeratKirimJO = ({ beratKirim }) => ({
  type: COUNT_BERAT_KIRIM_JO,
  payload: beratKirim,
});
export const setCountBeratKirimJO = (beratSusut) => ({
  type: SET_COUNT_BERAT_KIRIM_JO,
  payload: { data: beratSusut },
});

export const simpanJumlahKirim = ({ jumlahKirim }) => ({
  type: SAVE_JUMLAH_KIRIM_JO,
  payload: jumlahKirim,
});

export const simpanBeratBatuTakTerpakai = ({ beratBatuTakTerpakai }) => ({
  type: SAVE_BERAT_BATU_TAK_TERPAKAI,
  payload: { data: beratBatuTakTerpakai },
});

export const setJumlahKirimJO = (jumlah) => ({
  type: SET_JUMLAH_KIRIM_JO,
  payload: { data: jumlah },
});

export const setTukangTujuan = (tukang) => ({
  type: SET_TUKANG_TUJUAN,
  payload: { data: tukang },
});

export const addLocalKirimJO = {
  type: ADD_LOCAL_KIRIM_JO,
};

export const addLocalTambahan = {
  type: ADD_LOCAL_TAMBAHAN,
};

export const addLocalTambahanBahan = {
  type: ADD_LOCAL_TAMBAHAN_BAHAN,
};

export const addLocalBatu = {
  type: ADD_LOCAL_BATU,
};

export const getNoIndukJobOrder = {
  type: GET_NO_INDUK_JOB_ORDER,
};

export const getAllNoJobOrder = {
  type: GET_ALL_NO_JOB_ORDER,
};

export const setNoIndukJobOrder = (feedback) => ({
  type: SET_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});
export const setAllNoJobOrder = (feedback) => ({
  type: SET_ALL_NO_JOB_ORDER,
  payload: { data: feedback },
});

export const getDataByNoInduk = (noInduk) => ({
  type: GET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: noInduk },
});

export const setDataByNoInduk = (feedback) => ({
  type: SET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const deleteJobOrder = (noJO) => ({
  type: DELETE_JOB_ORDER,
  payload: { data: noJO },
});

export const deleteBatu = (noJO, kode_batu) => ({
  type: DELETE_DETAIL_BATU,
  payload: { data: noJO, batu: kode_batu },
});

export const deleteTambahan = (noJO, kode_tambahan) => ({
  type: DELETE_DETAIL_TAMBAHAN,
  payload: { data: noJO, tambahan: kode_tambahan },
});

//editjo
export const editJobOrder = (noJO) => ({
  type: EDIT_JOB_ORDER,
  payload: { data: noJO },
});

export const setDataEditJobOrder = (feedback) => ({
  type: SET_DATA_EDIT_JOB_ORDER,
  payload: { data: feedback },
});

export const setIsEditJobOrder = (isEdit) => ({
  type: SET_IS_EDIT_JOB_ORDER,
  payload: { data: isEdit },
});

export const saveEditJobOrder = {
  type: SAVE_EDIT_JOB_ORDER,
};

//editbatu
export const editBatu = (noJO, dataBatu) => ({
  type: EDIT_BATU,
  payload: { data: noJO, batu: dataBatu },
});

export const setDataEditBatu = (feedback) => ({
  type: SET_DATA_EDIT_BATU,
  payload: { data: feedback },
});

export const setIsEditBatu = (isEdit) => ({
  type: SET_IS_EDIT_BATU,
  payload: { data: isEdit },
});

export const saveEditBatu = {
  type: SAVE_EDIT_BATU,
};

//edittambahan
export const editTambahan = (noJO, dataTambahan) => ({
  type: EDIT_TAMBAHAN,
  payload: { data: noJO, tambahan: dataTambahan },
});

export const setDataEditTambahan = (feedback) => ({
  type: SET_DATA_EDIT_TAMBAHAN,
  payload: { data: feedback },
});

export const setIsEditTambahan = (isEdit) => ({
  type: SET_IS_EDIT_TAMBAHAN,
  payload: { data: isEdit },
});

export const saveEditTambahan = {
  type: SAVE_EDIT_TAMBAHAN,
};

export const getTukangByDivisi = (divisi) => ({
  type: GET_TUKANG_BY_DIVISI,
  payload: { data: divisi },
});

export const setTukangByDivisi = (feedback) => ({
  type: SET_TUKANG_BY_DIVISI,
  payload: { data: feedback },
});
