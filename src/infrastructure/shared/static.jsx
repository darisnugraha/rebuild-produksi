const baseurl = process.env.REACT_APP_BACKEND_URL;

const URL_LOGIN = `${baseurl}user/login`;

const URL_GET_JO_OUTSTAND_ALL = `${baseurl}produksi/outstand/`;
const URL_GET_OUTSTAND_ABU_CASTING_ALL = `${baseurl}produksi/dashboard/outstandabucasting/`;
const URL_GET_OUTSTAND_ABU_POTONG_ALL = `${baseurl}produksi/dashboard/outstandabupotong/`;
const URL_GET_OUTSTAND_ABU_TUKANG_ALL = `${baseurl}produksi/dashboard/outstandabutukang/`;
const URL_GET_OUTSTAND_CASTING_ALL = `${baseurl}produksi/outstandcasting/`;
const URL_GET_OUTSTAND_BAHAN_ALL = `${baseurl}produksi/outstandbahan/`;

const URL_GET_ALL_MASTER_JENIS = `${baseurl}jenis/all`;
const URL_ADD_MASTER_JENIS = `${baseurl}jenis`;
const URL_DELETE_MASTER_JENIS = `${baseurl}jenis`;
const URL_UPDATE_MASTER_JENIS = `${baseurl}jenis`;

const URL_GET_ALL_MASTER_WARNA = `${baseurl}warna/all`;
const URL_ADD_MASTER_WARNA = `${baseurl}warna`;
const URL_DELETE_MASTER_WARNA = `${baseurl}warna`;
const URL_UPDATE_MASTER_WARNA = `${baseurl}warna`;

const URL_GET_ALL_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan/all`;
const URL_ADD_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;
const URL_DELETE_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;
const URL_UPDATE_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;

const URL_GET_ALL_MASTER_BATU = `${baseurl}batu/all`;
const URL_ADD_MASTER_BATU = `${baseurl}batu`;
const URL_DELETE_MASTER_BATU = `${baseurl}batu`;
const URL_UPDATE_MASTER_BATU = `${baseurl}batu`;

const URL_GET_ALL_MASTER_CUTTING_BATU = `${baseurl}cutting-batu/all`;
const URL_ADD_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;
const URL_DELETE_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;
const URL_UPDATE_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;

const URL_GET_ALL_MASTER_JENIS_BATU = `${baseurl}jenis-batu/all`;
const URL_ADD_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;
const URL_DELETE_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;
const URL_UPDATE_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;

const URL_GET_ALL_MASTER_KONDISI = `${baseurl}kondisi/all`;
const URL_ADD_MASTER_KONDISI = `${baseurl}kondisi`;
const URL_DELETE_MASTER_KONDISI = `${baseurl}kondisi`;
const URL_UPDATE_MASTER_KONDISI = `${baseurl}kondisi`;

const URL_GET_ALL_MASTER_BAHAN = `${baseurl}bahan/all`;
const URL_ADD_MASTER_BAHAN = `${baseurl}bahan`;
const URL_DELETE_MASTER_BAHAN = `${baseurl}bahan`;
const URL_UPDATE_MASTER_BAHAN = `${baseurl}bahan`;

const URL_GET_ALL_MASTER_MARKETING = `${baseurl}marketing/all`;
const URL_ADD_MASTER_MARKETING = `${baseurl}marketing`;
const URL_DELETE_MASTER_MARKETING = `${baseurl}marketing`;
const URL_UPDATE_MASTER_MARKETING = `${baseurl}marketing`;

const URL_GET_ALL_MASTER_TUKANG = `${baseurl}staff/all`;
const URL_ADD_MASTER_TUKANG = `${baseurl}staff`;
const URL_DELETE_MASTER_TUKANG = `${baseurl}staff`;
const URL_UPDATE_MASTER_TUKANG = `${baseurl}staff`;

const URL_GET_ALL_MASTER_CUSTOMER = `${baseurl}customer/all`;
const URL_ADD_MASTER_CUSTOMER = `${baseurl}customer`;
const URL_DELETE_MASTER_CUSTOMER = `${baseurl}customer`;
const URL_UPDATE_MASTER_CUSTOMER = `${baseurl}customer`;

const URL_GET_ALL_MASTER_UKURAN = `${baseurl}ukuran/all`;
const URL_ADD_MASTER_UKURAN = `${baseurl}ukuran`;
const URL_DELETE_MASTER_UKURAN = `${baseurl}ukuran`;
const URL_UPDATE_MASTER_UKURAN = `${baseurl}ukuran`;

const URL_GET_ALL_MASTER_ORIGINAL = `${baseurl}barang/all`;
const URL_ADD_MASTER_ORIGINAL = `${baseurl}barang`;
const URL_DELETE_MASTER_ORIGINAL = `${baseurl}barang`;
const URL_UPDATE_MASTER_ORIGINAL = `${baseurl}barang`;

const URL_GET_JO_BY_ID_KIRIM_BATU = `${baseurl}adm-mutasi-batu/get/jo-kirim-batu-proses/`;

const URL_GET_ALL_SALDO_MURNI = `${baseurl}saldo-murni/get/bahan/all`;
const URL_ADD_SALDO_MURNI = `${baseurl}`;
const URL_DELETE_SALDO_MURNI = `${baseurl}`;
const URL_UPDATE_SALDO_MURNI = `${baseurl}`;

const URL_GET_ALL_SALDO_BAHAN_STOCK = `${baseurl}saldo-bahan/stock-bahan`;
const URL_GET_POTONG_POHON = `${baseurl}saldo-bahan/pohonpotong/`;

const URL_GET_ALL_PEMBUATAN_JENIS_BAHAN = `${baseurl}saldo-murni/get/bahan/all`;
const URL_ADD_PEMBUATAN_JENIS_BAHAN = `${baseurl}saldo-bahan`;

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
const URL_GET_ABU_TUKANG = `${baseurl}kirim-jo/setorabu`;

const URL_GET_HISTORY_KIRIM_LEBUR = `${baseurl}lebur/get/history-kirim-lebur`;
const URL_GET_ALL_SALDO_BAHAN_OPEN = `${baseurl}lebur/get/saldo-bahan-all-open`;
const URL_GET_ALL_SALDO_BAHAN = `${baseurl}lebur/get/saldo-bahan`;
const URL_GET_TERIMA_LEBUR = `${baseurl}lebur/get/lebur-by-no-kirim/`;

const URL_GET_HISTORY_KIRIM_MASAK = `${baseurl}masak-bahan/get/history-kirim-masak`;
const URL_GET_DATA_TERIMA_LEBUR = `${baseurl}masak-bahan/get/lebur-by-no-terima/`;
const URL_GET_KIRIM_MASAK = `${baseurl}masak-bahan/get/by-no-kirim/`;

const URL_ADD_MUTASI_BATU = `${baseurl}mutasi-batu`;
const URL_GET_HISTORY_KIRIM_BATU = `${baseurl}adm-mutasi-batu/get/history-kirim-batu/`;
const URL_ADD_KIRIM_BATU_PRODUKSI = `${baseurl}mutasi-batu/kirim-produksi`;

const URL_ADD_TAMBAH_SALDO_BAHAN = `${baseurl}saldo-murni`;
const URL_GET_DETAIL_POHON = `${baseurl}saldo-bahan/pohon/`;
const URL_ADD_TERIMA_COR = `${baseurl}saldo-bahan/terimacasting`;
const URL_ADD_TERIMA_POTONG = `${baseurl}saldo-bahan/terimapotong`;
const URL_ADD_KIRIM_BAHAN_ADMIN_BAHAN = `${baseurl}saldo-bahan/kirimbahan`;

const URL_ADD_JOB_ORDER_CART = `${baseurl}tambah-jo/cart`;
const URL_ADD_JOB_ORDER_CHECKOUT = `${baseurl}tambah-jo/check-out`;

const URL_ADD_KIRIM_JOB_ORDER_CART = `${baseurl}kirim-jo/cart`;
const URL_ADD_KIRIM_JOB_ORDER_CHECKOUT = `${baseurl}kirim-jo/check-out`;

const URL_GET_DETAIL_JO = `${baseurl}terima-jo/no_job_order`;

const URL_ADD_TERIMA_JOB_ORDER_CART = `${baseurl}terima-jo/cart`;
const URL_ADD_TERIMA_JOB_ORDER_CHECKOUT = `${baseurl}terima-jo/check-out`;

const URL_GET_DETAIL_JO_CLOSE = `${baseurl}close-jo/no_job_order`;
const URL_ADD_CLOSE_JO = `${baseurl}close-jo`;

const URL_ADD_TERIMA_BAHAN = `${baseurl}saldo-bahan/terimabahan`;
const URL_ADD_KIRIM_BAHAN = `${baseurl}saldo-bahan/kirimbahantukang`;

const URL_GET_CART_KIRIM_TAMBAHAN = `${baseurl}adm-kirim-tambahan/cart/`;
const URL_GET_DATA_JO_GABUNG_JO = `${baseurl}adm-mutasi-batu/getjo/no_job_order/`;
const URL_ADD_GABUNG_JO = `${baseurl}saldo-bahan/gabungjo/`;
const URL_ADD_KIRIM_LEBUR = `${baseurl}lebur/post/kirim-lebur`;
const URL_ADD_TERIMA_LEBUR = `${baseurl}lebur/post/terima-lebur`;
const URL_ADD_KIRIM_MASAK = `${baseurl}masak-bahan/post/kirim-masak`;
const URL_ADD_TERIMA_MASAK = `${baseurl}masak-bahan/post/terima-masak`;

const URL_GET_LAPORAN_TAMBAH_AMBIL_SALDO_BATU = `${baseurl}mutasi-batu/all`;
const URL_GET_LAPORAN_KIRIM_BATU = `${baseurl}mutasi-batu/all`;
const URL_GET_LAPORAN_SALDO_BATU = `${baseurl}mutasi-batu/saldo-batu/all`;

const URL_GET_GROUP_BAHAN = `${baseurl}report/saldo-bahan/group-bahan`;
const URL_GET_LAPORAN_SALDO_BAHAN = `${baseurl}report/saldo-bahan/bahan`;
const URL_GET_LAPORAN_TAMBAH_SALDO_BAHAN = `${baseurl}saldo-murni/all`;

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
  URL_GET_ABU_TUKANG,

  URL_GET_HISTORY_KIRIM_LEBUR,
  URL_GET_ALL_SALDO_BAHAN_OPEN,
  URL_GET_ALL_SALDO_BAHAN,
  URL_GET_TERIMA_LEBUR,

  URL_GET_HISTORY_KIRIM_MASAK,
  URL_GET_DATA_TERIMA_LEBUR,
  URL_GET_KIRIM_MASAK,
  URL_GET_POTONG_POHON,

  URL_ADD_MUTASI_BATU,

  URL_GET_HISTORY_KIRIM_BATU,
  URL_ADD_KIRIM_BATU_PRODUKSI,

  URL_ADD_TAMBAH_SALDO_BAHAN,
  URL_GET_DETAIL_POHON,
  URL_ADD_TERIMA_COR,
  URL_ADD_TERIMA_POTONG,
  URL_ADD_KIRIM_BAHAN_ADMIN_BAHAN,

  URL_ADD_JOB_ORDER_CART,
  URL_ADD_JOB_ORDER_CHECKOUT,

  URL_ADD_KIRIM_JOB_ORDER_CART,
  URL_ADD_KIRIM_JOB_ORDER_CHECKOUT,

  URL_GET_DETAIL_JO,
  URL_ADD_TERIMA_JOB_ORDER_CART,
  URL_ADD_TERIMA_JOB_ORDER_CHECKOUT,

  URL_GET_DETAIL_JO_CLOSE,
  URL_ADD_CLOSE_JO,

  URL_ADD_TERIMA_BAHAN,
  URL_ADD_KIRIM_BAHAN,
  URL_GET_CART_KIRIM_TAMBAHAN,
  URL_GET_DATA_JO_GABUNG_JO,
  URL_ADD_GABUNG_JO,
  URL_ADD_KIRIM_LEBUR,
  URL_ADD_TERIMA_LEBUR,
  URL_ADD_KIRIM_MASAK,
  URL_ADD_TERIMA_MASAK,

  URL_GET_LAPORAN_TAMBAH_AMBIL_SALDO_BATU,
  URL_GET_LAPORAN_KIRIM_BATU,
  URL_GET_LAPORAN_SALDO_BATU,
  URL_GET_GROUP_BAHAN,
  URL_GET_LAPORAN_SALDO_BAHAN,
  URL_GET_LAPORAN_TAMBAH_SALDO_BAHAN,
};

export default data;
