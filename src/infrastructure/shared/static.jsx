const baseurl = process.env.REACT_APP_BACKEND_URL;

const URL_LOGIN = `${baseurl}users/login`;

const URL_GET_JO_OUTSTAND_ALL = `${baseurl}produksi/outstand/`;
const URL_GET_OUTSTAND_ABU_CASTING_ALL = `${baseurl}produksi/dashboard/outstandabucasting/`;
const URL_GET_OUTSTAND_ABU_POTONG_ALL = `${baseurl}produksi/dashboard/outstandabupotong/`;
const URL_GET_OUTSTAND_ABU_TUKANG_ALL = `${baseurl}produksi/dashboard/outstandabutukang/`;
const URL_GET_OUTSTAND_CASTING_ALL = `${baseurl}produksi/outstandcasting/`;
const URL_GET_OUTSTAND_BAHAN_ALL = `${baseurl}produksi/outstandbahan/`;

const URL_GET_ALL_MASTER_JENIS = `${baseurl}jenis/all`;
const URL_ADD_MASTER_JENIS = `${baseurl}`;
const URL_DELETE_MASTER_JENIS = `${baseurl}`;
const URL_UPDATE_MASTER_JENIS = `${baseurl}`;

const URL_GET_ALL_MASTER_WARNA = `${baseurl}warna/all`;
const URL_ADD_MASTER_WARNA = `${baseurl}`;
const URL_DELETE_MASTER_WARNA = `${baseurl}`;
const URL_UPDATE_MASTER_WARNA = `${baseurl}`;

const URL_GET_ALL_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan/all`;
const URL_ADD_MASTER_JENIS_BAHAN = `${baseurl}`;
const URL_DELETE_MASTER_JENIS_BAHAN = `${baseurl}`;
const URL_UPDATE_MASTER_JENIS_BAHAN = `${baseurl}`;

const URL_GET_ALL_MASTER_BATU = `${baseurl}batu/all`;
const URL_ADD_MASTER_BATU = `${baseurl}`;
const URL_DELETE_MASTER_BATU = `${baseurl}`;
const URL_UPDATE_MASTER_BATU = `${baseurl}`;

const URL_GET_ALL_MASTER_CUTTING_BATU = `${baseurl}cutting-batu/all`;
const URL_ADD_MASTER_CUTTING_BATU = `${baseurl}`;
const URL_DELETE_MASTER_CUTTING_BATU = `${baseurl}`;
const URL_UPDATE_MASTER_CUTTING_BATU = `${baseurl}`;

const URL_GET_ALL_MASTER_JENIS_BATU = `${baseurl}jenis-batu/all`;
const URL_ADD_MASTER_JENIS_BATU = `${baseurl}`;
const URL_DELETE_MASTER_JENIS_BATU = `${baseurl}`;
const URL_UPDATE_MASTER_JENIS_BATU = `${baseurl}`;

const URL_GET_ALL_MASTER_KONDISI = `${baseurl}kondisi/all`;
const URL_ADD_MASTER_KONDISI = `${baseurl}`;
const URL_DELETE_MASTER_KONDISI = `${baseurl}`;
const URL_UPDATE_MASTER_KONDISI = `${baseurl}`;

const URL_GET_ALL_MASTER_BAHAN = `${baseurl}bahan/all`;
const URL_ADD_MASTER_BAHAN = `${baseurl}`;
const URL_DELETE_MASTER_BAHAN = `${baseurl}`;
const URL_UPDATE_MASTER_BAHAN = `${baseurl}`;

const URL_GET_ALL_MASTER_MARKETING = `${baseurl}marketing/all`;
const URL_ADD_MASTER_MARKETING = `${baseurl}`;
const URL_DELETE_MASTER_MARKETING = `${baseurl}`;
const URL_UPDATE_MASTER_MARKETING = `${baseurl}`;

const URL_GET_ALL_MASTER_TUKANG = `${baseurl}staff/all`;
const URL_ADD_MASTER_TUKANG = `${baseurl}`;
const URL_DELETE_MASTER_TUKANG = `${baseurl}`;
const URL_UPDATE_MASTER_TUKANG = `${baseurl}`;

const URL_GET_ALL_MASTER_CUSTOMER = `${baseurl}customer/all`;
const URL_ADD_MASTER_CUSTOMER = `${baseurl}`;
const URL_DELETE_MASTER_CUSTOMER = `${baseurl}`;
const URL_UPDATE_MASTER_CUSTOMER = `${baseurl}`;

const URL_GET_ALL_MASTER_UKURAN = `${baseurl}ukuran/all`;
const URL_ADD_MASTER_UKURAN = `${baseurl}`;
const URL_DELETE_MASTER_UKURAN = `${baseurl}`;
const URL_UPDATE_MASTER_UKURAN = `${baseurl}`;

const URL_GET_ALL_MASTER_ORIGINAL = `${baseurl}barang/all`;
const URL_ADD_MASTER_ORIGINAL = `${baseurl}`;
const URL_DELETE_MASTER_ORIGINAL = `${baseurl}`;
const URL_UPDATE_MASTER_ORIGINAL = `${baseurl}`;

const URL_GET_JO_BY_ID_KIRIM_BATU = `${baseurl}adm-mutasi-batu/get/jo-kirim-batu-proses/`;

const URL_GET_ALL_SALDO_MURNI = `${baseurl}saldo-murni/get/bahan/all`;
const URL_ADD_SALDO_MURNI = `${baseurl}`;
const URL_DELETE_SALDO_MURNI = `${baseurl}`;
const URL_UPDATE_SALDO_MURNI = `${baseurl}`;

const URL_GET_ALL_SALDO_BAHAN_STOCK = `${baseurl}saldo-bahan/stock-bahan`;

const URL_GET_ALL_PEMBUATAN_JENIS_BAHAN = `${baseurl}saldo-murni/get/bahan/all`;
const URL_ADD_PEMBUATAN_JENIS_BAHAN = `${baseurl}`;
const URL_DELETE_PEMBUATAN_JENIS_BAHAN = `${baseurl}`;
const URL_UPDATE_PEMBUATAN_JENIS_BAHAN = `${baseurl}`;

const URL_GET_ALL_DIVISI = `${baseurl}divisi/all`;

const URL_GET_ALL_DIVISI_ASAL_SALDO_BAHAN = `${baseurl}saldo-bahan/get/divisi-all`;
const URL_GET_STAFF_BY_DIVISI = `${baseurl}saldo-bahan/get/staff-by-divisi`;
const URL_GET_BAHAN_BY_STAFF = `${baseurl}saldo-bahan/get/bahan-by-staff`;
const URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN = `${baseurl}saldo-bahan/get/saldo-kirim-bahan-tukang-open`;

const URL_GET_DETAIL_JO_BY_POST = `${baseurl}kirim-jo/get/detail-jo`;
const URL_GET_NO_KIRIM_BATU_BY_TANGGAL = `${baseurl}adm-mutasi-batu/get/kirim-batu-open/`;
const URL_GET_DETAIL_KIRIM_BATU = `${baseurl}adm-mutasi-batu/no_batu_kirim/`;
const URL_GET_BAHAN_TERIMA_BAHAN = `${baseurl}saldo-bahan/get/bahan`;
const URL_GET_SALDO_KIRIM_BAHAN_OPEN = `${baseurl}saldo-bahan/get/saldo-kirim-bahan-open`;

const URL_GET_STOCK_BAHAN_DIVISI = `${baseurl}saldo-bahan/stock-bahan-divisi-all`;
const URL_GET_STOCK_BAHAN_STAFF_DIVISI = `${baseurl}saldo-bahan/stock-bahan-staff-by-divisi`;
const URL_GET_STOCK_BAHAN_BY_STAFF = `${baseurl}saldo-bahan/stock-bahan-divisi-by-staff`;

const URL_GET_ASAL_STOCK_BAHAN = `${baseurl}saldo-bahan/asal-stock-bahan`;
const URL_GET_STOCK_BAHAN_ADMIN = `${baseurl}saldo-bahan/stock-bahan-admin`;

const URL_GET_SETOR_OUTSTAND_CASTING = `${baseurl}produksi/setoroutstandcasting`;
const URL_GET_SETOR_OUTSTAND_POTONG = `${baseurl}produksi/setoroutstandpotong`;

const data = {
  URL_LOGIN,

  URL_GET_JO_OUTSTAND_ALL,
  URL_GET_OUTSTAND_ABU_CASTING_ALL,
  URL_GET_OUTSTAND_ABU_POTONG_ALL,

  URL_GET_OUTSTAND_ABU_TUKANG_ALL,
  URL_GET_OUTSTAND_CASTING_ALL,
  URL_GET_OUTSTAND_BAHAN_ALL,

  URL_GET_ALL_MASTER_JENIS,
  URL_ADD_MASTER_JENIS,
  URL_DELETE_MASTER_JENIS,
  URL_UPDATE_MASTER_JENIS,

  URL_GET_ALL_MASTER_WARNA,
  URL_ADD_MASTER_WARNA,
  URL_DELETE_MASTER_WARNA,
  URL_UPDATE_MASTER_WARNA,

  URL_GET_ALL_MASTER_JENIS_BAHAN,
  URL_ADD_MASTER_JENIS_BAHAN,
  URL_DELETE_MASTER_JENIS_BAHAN,
  URL_UPDATE_MASTER_JENIS_BAHAN,

  URL_GET_ALL_MASTER_BATU,
  URL_ADD_MASTER_BATU,
  URL_DELETE_MASTER_BATU,
  URL_UPDATE_MASTER_BATU,

  URL_GET_ALL_MASTER_CUTTING_BATU,
  URL_ADD_MASTER_CUTTING_BATU,
  URL_DELETE_MASTER_CUTTING_BATU,
  URL_UPDATE_MASTER_CUTTING_BATU,

  URL_GET_ALL_MASTER_JENIS_BATU,
  URL_ADD_MASTER_JENIS_BATU,
  URL_DELETE_MASTER_JENIS_BATU,
  URL_UPDATE_MASTER_JENIS_BATU,

  URL_GET_ALL_MASTER_KONDISI,
  URL_ADD_MASTER_KONDISI,
  URL_DELETE_MASTER_KONDISI,
  URL_UPDATE_MASTER_KONDISI,

  URL_GET_ALL_MASTER_BAHAN,
  URL_ADD_MASTER_BAHAN,
  URL_DELETE_MASTER_BAHAN,
  URL_UPDATE_MASTER_BAHAN,

  URL_GET_ALL_MASTER_MARKETING,
  URL_ADD_MASTER_MARKETING,
  URL_DELETE_MASTER_MARKETING,
  URL_UPDATE_MASTER_MARKETING,

  URL_GET_ALL_MASTER_TUKANG,
  URL_ADD_MASTER_TUKANG,
  URL_DELETE_MASTER_TUKANG,
  URL_UPDATE_MASTER_TUKANG,

  URL_GET_ALL_MASTER_CUSTOMER,
  URL_ADD_MASTER_CUSTOMER,
  URL_DELETE_MASTER_CUSTOMER,
  URL_UPDATE_MASTER_CUSTOMER,

  URL_GET_ALL_MASTER_UKURAN,
  URL_ADD_MASTER_UKURAN,
  URL_DELETE_MASTER_UKURAN,
  URL_UPDATE_MASTER_UKURAN,

  URL_GET_ALL_MASTER_ORIGINAL,
  URL_ADD_MASTER_ORIGINAL,
  URL_DELETE_MASTER_ORIGINAL,
  URL_UPDATE_MASTER_ORIGINAL,

  URL_GET_JO_BY_ID_KIRIM_BATU,

  URL_GET_ALL_SALDO_MURNI,
  URL_ADD_SALDO_MURNI,
  URL_DELETE_SALDO_MURNI,
  URL_UPDATE_SALDO_MURNI,

  URL_GET_ALL_SALDO_BAHAN_STOCK,

  URL_GET_ALL_PEMBUATAN_JENIS_BAHAN,
  URL_ADD_PEMBUATAN_JENIS_BAHAN,
  URL_DELETE_PEMBUATAN_JENIS_BAHAN,
  URL_UPDATE_PEMBUATAN_JENIS_BAHAN,

  URL_GET_ALL_DIVISI,
  URL_GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
  URL_GET_STAFF_BY_DIVISI,
  URL_GET_BAHAN_BY_STAFF,
  URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN,

  URL_GET_DETAIL_JO_BY_POST,
  URL_GET_NO_KIRIM_BATU_BY_TANGGAL,
  URL_GET_DETAIL_KIRIM_BATU,
  URL_GET_BAHAN_TERIMA_BAHAN,
  URL_GET_SALDO_KIRIM_BAHAN_OPEN,

  URL_GET_STOCK_BAHAN_DIVISI,
  URL_GET_STOCK_BAHAN_STAFF_DIVISI,
  URL_GET_STOCK_BAHAN_BY_STAFF,

  URL_GET_ASAL_STOCK_BAHAN,
  URL_GET_STOCK_BAHAN_ADMIN,

  URL_GET_SETOR_OUTSTAND_CASTING,
  URL_GET_SETOR_OUTSTAND_POTONG,
};

export default data;
