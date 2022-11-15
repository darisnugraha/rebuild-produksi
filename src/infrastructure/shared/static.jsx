const baseurl = process.env.REACT_APP_BACKEND_URL;

const URL_LOGIN = `${baseurl}auth/login`;
const URL_CHECK_TOKEN = `${baseurl}auth/token`;
const URL_CREATE_DIVISI = `${baseurl}divisi/generate`;
const URL_LOGOUT = `${baseurl}auth/logout`;

const URL_GET_JO_OUTSTAND_ALL = `${baseurl}dashboard/outstand-job-order`;
const URL_GET_OUTSTAND_ABU_CASTING_ALL = `${baseurl}abu-cor/setor-outstand-casting`;
const URL_GET_OUTSTAND_ABU_POTONG_ALL = `${baseurl}dashboard/outstand-abu-potong`;
const URL_GET_OUTSTAND_ABU_TUKANG_ALL = `${baseurl}dashboard/outstand-abu-tukang`;
const URL_GET_OUTSTAND_CASTING_ALL = `${baseurl}dashboard/outstand-abu-casting`;
const URL_GET_OUTSTAND_BAHAN_ALL = `${baseurl}dashboard/outstand-bahan`;

const URL_GET_ALL_MASTER_JENIS = `${baseurl}jenis/open`;
const URL_GET_MASTER_JENIS_BY_ID = `${baseurl}jenis/by-id/`;
const URL_ADD_MASTER_JENIS = `${baseurl}jenis`;
const URL_DELETE_MASTER_JENIS = `${baseurl}jenis`;
const URL_UPDATE_MASTER_JENIS = `${baseurl}jenis`;

const URL_GET_ALL_MASTER_WARNA = `${baseurl}warna/open`;
const URL_GET_MASTER_WARNA_BY_ID = `${baseurl}warna/by-id/`;
const URL_ADD_MASTER_WARNA = `${baseurl}warna`;
const URL_DELETE_MASTER_WARNA = `${baseurl}warna`;
const URL_UPDATE_MASTER_WARNA = `${baseurl}warna`;

const URL_GET_ALL_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan/open`;
const URL_GET_MASTER_JENIS_BAHAN_BY_ID = `${baseurl}jenis-bahan/by-id/`;
const URL_ADD_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;
const URL_DELETE_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;
const URL_UPDATE_MASTER_JENIS_BAHAN = `${baseurl}jenis-bahan`;

const URL_GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN = `${baseurl}kelompok-jenis-bahan/open`;
const URL_GET_MASTER_KELOMPOK_JENIS_BAHAN_BY_ID = `${baseurl}kelompok-jenis-bahan/by-id/`;
const URL_ADD_MASTER_KELOMPOK_JENIS_BAHAN = `${baseurl}kelompok-jenis-bahan`;
const URL_DELETE_MASTER_KELOMPOK_JENIS_BAHAN = `${baseurl}kelompok-jenis-bahan`;
const URL_UPDATE_MASTER_KELOMPOK_JENIS_BAHAN = `${baseurl}kelompok-jenis-bahan`;

const URL_GET_ALL_MASTER_BILL_OF_MATERIALS = `${baseurl}bill-of-materials/open`;
const URL_GET_MASTER_BILL_OF_MATERIALS_BY_ID = `${baseurl}bill-of-materials/by-id/`;
const URL_ADD_MASTER_BILL_OF_MATERIALS = `${baseurl}bill-of-materials`;
const URL_DELETE_MASTER_BILL_OF_MATERIALS = `${baseurl}bill-of-materials`;
const URL_UPDATE_MASTER_BILL_OF_MATERIALS = `${baseurl}bill-of-materials`;

const URL_GET_ALL_MASTER_BATU = `${baseurl}batu/open`;
const URL_GET_MASTER_BATU_BY_ID = `${baseurl}batu/by-id/`;
const URL_ADD_MASTER_BATU = `${baseurl}batu`;
const URL_DELETE_MASTER_BATU = `${baseurl}batu`;
const URL_UPDATE_MASTER_BATU = `${baseurl}batu`;

const URL_GET_ALL_MASTER_CUTTING_BATU = `${baseurl}cutting-batu/open`;
const URL_GET_MASTER_CUTTING_BATU_BY_ID = `${baseurl}cutting-batu/by-id/`;
const URL_ADD_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;
const URL_DELETE_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;
const URL_UPDATE_MASTER_CUTTING_BATU = `${baseurl}cutting-batu`;

const URL_GET_ALL_MASTER_JENIS_BATU = `${baseurl}jenis-batu/open`;
const URL_GET_MASTER_JENIS_BATU_BY_ID = `${baseurl}jenis-batu/by-id/`;
const URL_ADD_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;
const URL_DELETE_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;
const URL_UPDATE_MASTER_JENIS_BATU = `${baseurl}jenis-batu`;

const URL_GET_ALL_MASTER_KONDISI = `${baseurl}kondisi/open`;
const URL_GET_MASTER_KONDISI_BY_ID = `${baseurl}kondisi/by-id/`;
const URL_ADD_MASTER_KONDISI = `${baseurl}kondisi`;
const URL_DELETE_MASTER_KONDISI = `${baseurl}kondisi`;
const URL_UPDATE_MASTER_KONDISI = `${baseurl}kondisi`;

const URL_GET_ALL_MASTER_BAHAN = `${baseurl}bahan/open`;
const URL_GET_MASTER_BAHAN_BY_ID = `${baseurl}bahan/by-id/`;
const URL_ADD_MASTER_BAHAN = `${baseurl}bahan`;
const URL_DELETE_MASTER_BAHAN = `${baseurl}bahan`;
const URL_UPDATE_MASTER_BAHAN = `${baseurl}bahan`;

const URL_GET_ALL_MASTER_MARKETING = `${baseurl}marketing/open`;
const URL_GET_MASTER_MARKETING_BY_ID = `${baseurl}marketing/by-id/`;
const URL_ADD_MASTER_MARKETING = `${baseurl}marketing`;
const URL_DELETE_MASTER_MARKETING = `${baseurl}marketing`;
const URL_UPDATE_MASTER_MARKETING = `${baseurl}marketing`;

const URL_GET_TUKANG_DIVISI = `${baseurl}tukang/by-divisi/`;

const URL_GET_ALL_MASTER_TUKANG = `${baseurl}tukang/open`;
const URL_GET_MASTER_TUKANG_BY_ID = `${baseurl}tukang/by-id/`;
const URL_ADD_MASTER_TUKANG = `${baseurl}tukang`;
const URL_DELETE_MASTER_TUKANG = `${baseurl}tukang`;
const URL_UPDATE_MASTER_TUKANG = `${baseurl}tukang`;

const URL_GET_ALL_MASTER_CUSTOMER = `${baseurl}customer/open`;
const URL_GET_MASTER_CUSTOMER_BY_ID = `${baseurl}customer/by-id/`;
const URL_ADD_MASTER_CUSTOMER = `${baseurl}customer`;
const URL_DELETE_MASTER_CUSTOMER = `${baseurl}customer`;
const URL_UPDATE_MASTER_CUSTOMER = `${baseurl}customer`;

const URL_GET_ALL_MASTER_UKURAN = `${baseurl}ukuran/open`;
const URL_GET_MASTER_UKURAN_BY_ID = `${baseurl}ukuran/by-id/`;
const URL_ADD_MASTER_UKURAN = `${baseurl}ukuran`;
const URL_DELETE_MASTER_UKURAN = `${baseurl}ukuran`;
const URL_UPDATE_MASTER_UKURAN = `${baseurl}ukuran`;

const URL_GET_ALL_MASTER_STATUS = `${baseurl}status-job-order/open`;
const URL_GET_MASTER_STATUS_BY_ID = `${baseurl}status-job-order/by-id/`;
const URL_ADD_MASTER_STATUS = `${baseurl}status-job-order`;
const URL_DELETE_MASTER_STATUS = `${baseurl}status-job-order`;
const URL_UPDATE_MASTER_STATUS = `${baseurl}status-job-order`;

const URL_GET_ALL_MASTER_ORIGINAL = `${baseurl}barang-master/open`;
const URL_GET_MASTER_ORIGINAL_BY_ID = `${baseurl}barang-master/by-id/`;
const URL_ADD_MASTER_ORIGINAL = `${baseurl}barang-master`;
const URL_DELETE_MASTER_ORIGINAL = `${baseurl}barang-master/`;
const URL_UPDATE_MASTER_ORIGINAL = `${baseurl}barang-master/`;

const URL_GET_JO_BY_ID_KIRIM_BATU = `${baseurl}admin-batu/jo-kirim-batu-proses/`;
const URL_GET_DETAIL_BATU_KIRIM_PUSAT = `${baseurl}admin-pusat-kirim-batu/list-batu/by-no-terima/`;
const URL_ADD_CART_BATU_KIRIM_PUSAT = `${baseurl}adm-mutasi-batu/cart/kirim`;
const URL_CHECKOUT_BATU_KIRIM_PUSAT = `${baseurl}admin-pusat-kirim-batu`;

const URL_GET_ALL_SALDO_MURNI = `${baseurl}saldo-murni/saldo`;
const URL_ADD_SALDO_MURNI = `${baseurl}`;
const URL_DELETE_SALDO_MURNI = `${baseurl}`;
const URL_UPDATE_SALDO_MURNI = `${baseurl}`;

const URL_GET_ALL_SALDO_BAHAN_STOCK = `${baseurl}saldo-murni/saldo`;
const URL_GET_POTONG_POHON = `${baseurl}saldo-bahan/potong-pohon/`;
const URL_GET_POTONG_POHON_JENIS_BAHAN = `${baseurl}jenis-bahan/by-kode/`;

const URL_GET_ALL_PEMBUATAN_JENIS_BAHAN = `${baseurl}saldo-murni/get/bahan/all`;
const URL_GET_BILL_OF_MATERIALS = `${baseurl}bill-of-materials/find-bom-by-jenis-bahan?`;
const URL_ADD_PEMBUATAN_JENIS_BAHAN = `${baseurl}saldo-bahan`;

const URL_GET_ALL_DIVISI = `${baseurl}divisi/open`;

const URL_GET_ALL_DIVISI_ASAL_SALDO_BAHAN = `${baseurl}saldo-bahan/get/divisi-all`;
const URL_GET_STAFF_BY_DIVISI = `${baseurl}saldo-murni-divisi/tukang-by-divisi/`;
const URL_GET_STAFF_BY_DIVISI_NEW = `${baseurl}tukang/by-divisi/`;
const URL_GET_PERIODE_BY_TUKANG = `${baseurl}susut-tukang-report/by-tukang/`;
const URL_GET_BAHAN_BY_STAFF = `${baseurl}saldo-murni/bahan?`;
const URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN = `${baseurl}saldo-murni-divisi/saldo-kirim-bahan-open?`;

const URL_GET_DETAIL_JO_BY_POST = `${baseurl}kirim-jo/get/detail-jo`;
const URL_GET_NO_KIRIM_BATU_BY_TANGGAL = `${baseurl}admin-pusat-terima-batu/kirim-batu-open/`;
const URL_ADD_TERIMA_BATU_PUSAT = `${baseurl}admin-pusat-terima-batu`;
const URL_GET_JO_KIRIM_BATU_PUSAT = `${baseurl}admin-pusat-kirim-batu/kirim-job-order/`;
const URL_GET_DETAIL_KIRIM_BATU = `${baseurl}admin-batu/by-no-kirim/`;
const URL_GET_TUKANG_TERIMA_TAMBAHAN = `${baseurl}admin-kirim-tambahan/stock-bahan-tambahan/`;
const URL_GET_SALDO_TAMBAHAN = `${baseurl}admin-kirim-tambahan/stock-bahan-tambahan/`;
const URL_GET_BAHAN_TERIMA_TAMBAHAN = `${baseurl}admin-kirim-tambahan/stock-bahan-by-tukang/`;
const URL_GET_BAHAN_TERIMA_BAHAN = `${baseurl}saldo-bahan/get/bahan`;
const URL_GET_SALDO_KIRIM_BAHAN_OPEN = `${baseurl}saldo-bahan/get/saldo-kirim-bahan-open`;
const URL_GET_BAHAN = `${baseurl}saldo-murni-divisi/bahan/terima-bahan?`;
const URL_GET_BAHAN_TUKANG = `${baseurl}saldo-murni-divisi/bahan?`;
const URL_GET_BAHAN_ADMIN_BAHAN = `${baseurl}saldo-murni-divisi/bahan?`;
const URL_GET_DETAIL_BAHAN_TUKANG = `${baseurl}saldo-murni-divisi/saldo-kirim-bahan-open?`;
const URL_GET_BAHAN_PUSAT = `${baseurl}saldo-murni/bahan?`;

const URL_GET_STOCK_BAHAN_DIVISI = `${baseurl}saldo-murni-divisi/stock-bahan-all-divisi`;
const URL_GET_STOCK_BAHAN_STAFF_DIVISI = `${baseurl}saldo-murni-divisi/stock-bahan-tukang-by-divisi/`;
const URL_GET_STOCK_BAHAN_BY_STAFF = `${baseurl}saldo-murni-divisi/stock-bahan-divisi-by-tukang/`;

const URL_GET_ASAL_STOCK_BAHAN = `${baseurl}admin-kirim-tambahan/saldo-asal`;
const URL_GET_STOCK_BAHAN_ADMIN = `${baseurl}admin-kirim-tambahan/stock-bahan-by-tukang/`;

const URL_POST_SETOR_OUTSTAND_CASTING = `${baseurl}abu-cor`;
const URL_GET_SETOR_OUTSTAND_CASTING = `${baseurl}abu-cor/setor-outstand-casting`;
const URL_POST_SETOR_OUTSTAND_POTONG = `${baseurl}abu-potong`;
const URL_GET_SETOR_OUTSTAND_POTONG = `${baseurl}abu-potong/setor-outstand-potong`;
const URL_GET_ABU_TUKANG = `${baseurl}abu-tukang/setor-outstand-tukang/`;
const URL_POST_ABU_TUKANG = `${baseurl}abu-tukang`;

const URL_GET_HISTORY_KIRIM_LEBUR = `${baseurl}kirim-lebur/history-kirim-lebur`;
const URL_GET_ALL_SALDO_BAHAN_OPEN = `${baseurl}kirim-lebur/saldo-bahan-all-open/`;
const URL_GET_ALL_SALDO_BAHAN = `${baseurl}kirim-lebur/saldo-bahan/`;
const URL_GET_TERIMA_LEBUR = `${baseurl}terima-lebur/lebur-by-no-kirim/`;

const URL_GET_HISTORY_KIRIM_MASAK = `${baseurl}kirim-masak-bahan/history-kirim-masak`;
const URL_GET_DATA_TERIMA_LEBUR = `${baseurl}kirim-masak-bahan/lebur-by-no-terima/`;
const URL_GET_KIRIM_MASAK = `${baseurl}terima-masak-bahan/kirim-masak/by-no-kirim/`;

const URL_GET_SALDO_BATU = `${baseurl}mutasi-batu/saldo`;
const URL_GET_BATU_BY_KODE = `${baseurl}batu/by-kode/`;
const URL_ADD_MUTASI_BATU = `${baseurl}mutasi-batu`;
const URL_GET_HISTORY_KIRIM_BATU = `${baseurl}admin-batu/history-kirim-batu/`;
const URL_ADD_KIRIM_BATU_PRODUKSI = `${baseurl}admin-batu/kirim-batu`;

const URL_ADD_TAMBAH_SALDO_BAHAN = `${baseurl}saldo-murni`;
const URL_GET_DETAIL_POHON = `${baseurl}saldo-bahan/casting-pohon/`;
const URL_ADD_TERIMA_COR = `${baseurl}saldo-bahan/admin-bahan/terima-casting`;
const URL_ADD_TERIMA_POTONG = `${baseurl}saldo-bahan/admin-bahan/terima-cutter`;
const URL_ADD_KIRIM_BAHAN_ADMIN_BAHAN = `${baseurl}saldo-bahan/admin-bahan/kirim-bahan`;

const URL_ADD_JOB_ORDER_CART = `${baseurl}tambah-jo/cart`;
const URL_ADD_JOB_ORDER_CHECKOUT = `${baseurl}tambah-job-order`;
const URL_GET_DATA_POHON = `${baseurl}saldo-bahan/by-pohon/`;

const URL_GET_NO_INDUK_JO = `${baseurl}job-order/no-induk-job-order`;
const URL_GET_JO_BY_NO_INDUK = `${baseurl}kirim-job-order/by-no-induk-job-order`;
const URL_GET_JO_BY_NO_INDUK_TERIMA = `${baseurl}terima-job-order/by-no-induk-job-order`;
const URL_GET_JO_BY_NO_INDUK_CLOSE = `${baseurl}close-job-order/by-no-induk-job-order`;
const URL_ADD_KIRIM_JOB_ORDER_CART = `${baseurl}kirim-job-order`;
const URL_ADD_KIRIM_JOB_ORDER_CHECKOUT = `${baseurl}kirim-jo/check-out`;

const URL_GET_DETAIL_JO = `${baseurl}terima-job-order/detail-jo/`;
const URL_GET_DATA_BATU_KIRIM = `${baseurl}produksi-batu/data-kirim-batu/`;
const URL_ADD_TERIMA_BATU_PRODUKSI = `${baseurl}produksi-batu/terima-batu`;

const URL_ADD_TERIMA_JOB_ORDER_CHECKOUT = `${baseurl}terima-job-order`;

const URL_GET_DETAIL_JO_CLOSE = `${baseurl}close-job-order/detail-jo/`;
const URL_ADD_CLOSE_JO = `${baseurl}close-job-order`;

const URL_ADD_TERIMA_TAMBAHAN = `${baseurl}admin-kirim-tambahan/terima-tambahan`;
const URL_ADD_TERIMA_BAHAN = `${baseurl}saldo-bahan/admin-pusat/terima-bahan`;
const URL_ADD_KIRIM_BAHAN = `${baseurl}saldo-bahan/admin-pusat/kirim-bahan-tukang`;

const URL_GET_CART_KIRIM_TAMBAHAN = `${baseurl}adm-kirim-tambahan/cart/`;
const URL_DELETE_CART_KIRIM_TAMBAHAN = `${baseurl}adm-kirim-tambahan/delete-cart/`;
const URL_ADD_CHECKOUT_KIRIM_TAMBAHAN = `${baseurl}admin-kirim-tambahan`;

const URL_GET_NO_JO = `${baseurl}job-order/by-no-job-order/`;
const URL_GET_DATA_JO_GABUNG_JO = `${baseurl}job-order/by-no-job-order/`;
const URL_GET_DATA_JO = `${baseurl}job-order/by-no-induk-job-order/`;
const URL_ADD_GABUNG_JO = `${baseurl}job-order/gabung-jo`;
const URL_ADD_KIRIM_LEBUR = `${baseurl}kirim-lebur`;
const URL_ADD_TERIMA_LEBUR = `${baseurl}terima-lebur`;
const URL_ADD_KIRIM_MASAK = `${baseurl}kirim-masak-bahan`;
const URL_ADD_TERIMA_MASAK = `${baseurl}terima-masak-bahan`;

const URL_GET_LAPORAN_TAMBAH_AMBIL_SALDO_BATU = `${baseurl}reports/admin-berlian/mutasi-batu?`;
const URL_GET_LAPORAN_KIRIM_BATU = `${baseurl}reports/admin-berlian/kirim-batu?`;
const URL_GET_LAPORAN_SALDO_BATU = `${baseurl}reports/admin-berlian/saldo-batu`;

const URL_GET_GROUP_BAHAN = `${baseurl}admin-bahan-report/saldo-bahan/group-bahan`;
const URL_GET_LAPORAN_SALDO_BAHAN = `${baseurl}admin-bahan-report/saldo-bahan?`;
const URL_GET_LAPORAN_TAMBAH_SALDO_BAHAN = `${baseurl}admin-bahan-report/tambah-saldo-bahan?`;
const URL_GET_LAPORAN_PEMBUATAN_JENIS_BAHAN = `${baseurl}admin-bahan-report/pembuatan-saldo-bahan?`;
const URL_GET_LAPORAN_TERIMA_POTONG = `${baseurl}admin-bahan-report/terima-potong?`;

const URL_GET_LAPORAN_TAMBAH_JOB_ORDER = `${baseurl}admin-pusat-report/tambah-job-order?`;
const URL_GET_LAPORAN_TERIMA_BATU = `${baseurl}admin-pusat-report/terima-batu?`;
const URL_GET_LAPORAN_KIRIM_BATU_PUSAT = `${baseurl}admin-pusat-report/kirim-batu?`;
const URL_GET_LAPORAN_KIRIM_TAMBAHAN = `${baseurl}admin-pusat-report/kirim-tambahan?`;
const URL_GET_LAPORAN_KIRIM_JO_PUSAT = `${baseurl}admin-pusat-report/kirim-job-order?`;
const URL_GET_LAPORAN_KIRIM_JO = `${baseurl}kirim-jo/tgl/all`;
const URL_GET_LAPORAN_TERIMA_JO_PUSAT = `${baseurl}admin-pusat-report/terima-job-order?`;
const URL_GET_LAPORAN_TERIMA_JO = `${baseurl}terima-jo/tgl/all`;
const URL_GET_KARTU_JO = `${baseurl}admin-pusat-report/kartu-job-order?`;
const URL_GET_OUTSTAND = `${baseurl}admin-pusat-report/outstand-admin?`;
const URL_GET_LAPORAN_SALDO_BAHAN_PUSAT = `${baseurl}admin-pusat-report/saldo-bahan?`;

const URL_GET_LAPORAN_SETOR_ABU_COR = `${baseurl}setor-abu-report/setor-abu-cor?`;
const URL_GET_LAPORAN_SETOR_ABU_POTONG = `${baseurl}setor-abu-report/setor-abu-potong?`;
const URL_GET_LAPORAN_SETOR_ABU_TUKANG = `${baseurl}setor-abu-report/setor-abu-tukang?`;

const URL_GET_LAPORAN_KIRIM_LEBUR = `${baseurl}lebur-report/kirim-lebur?`;
const URL_GET_LAPORAN_TERIMA_LEBUR = `${baseurl}lebur-report/terima-lebur?`;

const URL_GET_LAPORAN_KIRIM_MASAK = `${baseurl}masak-bahan-report/kirim-masak-bahan?`;
const URL_GET_LAPORAN_TERIMA_MASAK = `${baseurl}masak-bahan-report/terima-masak-bahan?`;

const URL_GET_LAPORAN_TERIMA_PRODUKSI = `${baseurl}produksi-report/terima-produksi-by-divisi?`;
const URL_GET_LAPORAN_KIRIM_PRODUKSI = `${baseurl}produksi-report/kirim-produksi-by-divisi?`;
const URL_GET_LAPORAN_TERIMA_TAMBAHAN_PRODUKSI = `${baseurl}produksi-report/terima-tambahan-by-divisi?`;
const URL_GET_LAPORAN_TERIMA_BATU_PRODUKSI = `${baseurl}produksi-report/terima-batu-by-divisi?`;
const URL_GET_LAPORAN_OUTSTAND_PRODUKSI = `${baseurl}produksi-report/outstand-by-divisi?`;
const URL_GET_LAPORAN_SUSUT_PRODUKSI = `${baseurl}susut-tukang-report`;

const URL_GET_ALL_MASTER_USER = `${baseurl}users`;
const URL_AUTHORIZE_USER = `${baseurl}users/authorize?`;
const URL_GET_ALL_MASTER_USER_BY_ID = `${baseurl}users/`;
const URL_ADD_MASTER_USER = `${baseurl}auth/register`;
const URL_DELETE_MASTER_USER = `${baseurl}users/`;
const URL_UPDATE_MASTER_USER = `${baseurl}users/`;

const URL_GET_ALL_MASTER_DIVISI = `${baseurl}divisi/open`;
const URL_GET_MASTER_DIVISI_BY_ID = `${baseurl}divisi/by-id/`;
const URL_ADD_MASTER_DIVISI = `${baseurl}divisi`;
const URL_DELETE_MASTER_DIVISI = `${baseurl}divisi`;
const URL_UPDATE_MASTER_DIVISI = `${baseurl}divisi`;

const URL_GET_DETAIL_TAMBAH_JO = `${baseurl}kirim-job-order/detail-jo/`;

const URL_GET_MENU_HAK_AKSES_USER = `${baseurl}hak-akses/by-user-id/`;
const URL_ADD_MENU_HAK_AKSES_USER = `${baseurl}hak-akses`;

const URL_GET_JO_BY_NO_KIRIM = `${baseurl}kirim-job-order/by-no-kirim/`;
const URL_GET_JO_BY_NO_TERIMA = `${baseurl}terima-job-order/by-no-terima/`;

const URL_ADD_BATAL_PROSES_JO = `${baseurl}kirim-job-order/cancel`;
const URL_ADD_BATAL_PROSES_JO_TERIMA = `${baseurl}terima-job-order/cancel`;
const URL_ADD_TERIMA_BAHAN_TUKANG = `${baseurl}saldo-bahan/admin-bahan/terima-bahan-tukang`;

const URL_GET_DIVISI_SUSUT_TUKANG = `${baseurl}divisi/tukang-susut`;

const data = {
  URL_ADD_TERIMA_BAHAN_TUKANG,
  URL_GET_BAHAN_ADMIN_BAHAN,

  URL_LOGIN,
  URL_CHECK_TOKEN,
  URL_CREATE_DIVISI,
  URL_LOGOUT,

  URL_GET_JO_OUTSTAND_ALL,
  URL_GET_OUTSTAND_ABU_CASTING_ALL,
  URL_GET_OUTSTAND_ABU_POTONG_ALL,

  URL_GET_OUTSTAND_ABU_TUKANG_ALL,
  URL_GET_OUTSTAND_CASTING_ALL,
  URL_GET_OUTSTAND_BAHAN_ALL,

  URL_GET_ALL_MASTER_JENIS,
  URL_GET_MASTER_JENIS_BY_ID,
  URL_ADD_MASTER_JENIS,
  URL_DELETE_MASTER_JENIS,
  URL_UPDATE_MASTER_JENIS,

  URL_GET_ALL_MASTER_WARNA,
  URL_GET_MASTER_WARNA_BY_ID,
  URL_ADD_MASTER_WARNA,
  URL_DELETE_MASTER_WARNA,
  URL_UPDATE_MASTER_WARNA,

  URL_GET_ALL_MASTER_JENIS_BAHAN,
  URL_GET_MASTER_JENIS_BAHAN_BY_ID,
  URL_ADD_MASTER_JENIS_BAHAN,
  URL_DELETE_MASTER_JENIS_BAHAN,
  URL_UPDATE_MASTER_JENIS_BAHAN,

  URL_GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN,
  URL_GET_MASTER_KELOMPOK_JENIS_BAHAN_BY_ID,
  URL_ADD_MASTER_KELOMPOK_JENIS_BAHAN,
  URL_DELETE_MASTER_KELOMPOK_JENIS_BAHAN,
  URL_UPDATE_MASTER_KELOMPOK_JENIS_BAHAN,

  URL_GET_ALL_MASTER_BILL_OF_MATERIALS,
  URL_GET_MASTER_BILL_OF_MATERIALS_BY_ID,
  URL_ADD_MASTER_BILL_OF_MATERIALS,
  URL_DELETE_MASTER_BILL_OF_MATERIALS,
  URL_UPDATE_MASTER_BILL_OF_MATERIALS,

  URL_GET_ALL_MASTER_BATU,
  URL_GET_MASTER_BATU_BY_ID,
  URL_ADD_MASTER_BATU,
  URL_DELETE_MASTER_BATU,
  URL_UPDATE_MASTER_BATU,

  URL_GET_ALL_MASTER_CUTTING_BATU,
  URL_GET_MASTER_CUTTING_BATU_BY_ID,
  URL_ADD_MASTER_CUTTING_BATU,
  URL_DELETE_MASTER_CUTTING_BATU,
  URL_UPDATE_MASTER_CUTTING_BATU,

  URL_GET_ALL_MASTER_JENIS_BATU,
  URL_GET_MASTER_JENIS_BATU_BY_ID,
  URL_ADD_MASTER_JENIS_BATU,
  URL_DELETE_MASTER_JENIS_BATU,
  URL_UPDATE_MASTER_JENIS_BATU,

  URL_GET_ALL_MASTER_KONDISI,
  URL_GET_MASTER_KONDISI_BY_ID,
  URL_ADD_MASTER_KONDISI,
  URL_DELETE_MASTER_KONDISI,
  URL_UPDATE_MASTER_KONDISI,

  URL_GET_ALL_MASTER_BAHAN,
  URL_GET_MASTER_BAHAN_BY_ID,
  URL_ADD_MASTER_BAHAN,
  URL_DELETE_MASTER_BAHAN,
  URL_UPDATE_MASTER_BAHAN,

  URL_GET_ALL_MASTER_MARKETING,
  URL_GET_MASTER_MARKETING_BY_ID,
  URL_ADD_MASTER_MARKETING,
  URL_DELETE_MASTER_MARKETING,
  URL_UPDATE_MASTER_MARKETING,

  URL_GET_TUKANG_DIVISI,

  URL_GET_ALL_MASTER_TUKANG,
  URL_GET_MASTER_TUKANG_BY_ID,
  URL_ADD_MASTER_TUKANG,
  URL_DELETE_MASTER_TUKANG,
  URL_UPDATE_MASTER_TUKANG,

  URL_GET_ALL_MASTER_CUSTOMER,
  URL_GET_MASTER_CUSTOMER_BY_ID,
  URL_ADD_MASTER_CUSTOMER,
  URL_DELETE_MASTER_CUSTOMER,
  URL_UPDATE_MASTER_CUSTOMER,

  URL_GET_ALL_MASTER_UKURAN,
  URL_GET_MASTER_UKURAN_BY_ID,
  URL_ADD_MASTER_UKURAN,
  URL_DELETE_MASTER_UKURAN,
  URL_UPDATE_MASTER_UKURAN,

  URL_GET_ALL_MASTER_STATUS,
  URL_GET_MASTER_STATUS_BY_ID,
  URL_ADD_MASTER_STATUS,
  URL_DELETE_MASTER_STATUS,
  URL_UPDATE_MASTER_STATUS,

  URL_GET_ALL_MASTER_ORIGINAL,
  URL_GET_MASTER_ORIGINAL_BY_ID,
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
  URL_GET_BILL_OF_MATERIALS,
  URL_ADD_PEMBUATAN_JENIS_BAHAN,

  URL_GET_ALL_DIVISI,
  URL_GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
  URL_GET_STAFF_BY_DIVISI,
  URL_GET_STAFF_BY_DIVISI_NEW,
  URL_GET_PERIODE_BY_TUKANG,
  URL_GET_BAHAN_BY_STAFF,
  URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN,

  URL_GET_DETAIL_JO_BY_POST,
  URL_GET_NO_KIRIM_BATU_BY_TANGGAL,
  URL_ADD_TERIMA_BATU_PUSAT,
  URL_GET_JO_KIRIM_BATU_PUSAT,
  URL_GET_DETAIL_KIRIM_BATU,
  URL_GET_TUKANG_TERIMA_TAMBAHAN,
  URL_GET_SALDO_TAMBAHAN,
  URL_GET_BAHAN_TERIMA_TAMBAHAN,
  URL_GET_BAHAN_TERIMA_BAHAN,
  URL_GET_SALDO_KIRIM_BAHAN_OPEN,
  URL_GET_BAHAN,
  URL_GET_BAHAN_TUKANG,
  URL_GET_DETAIL_BAHAN_TUKANG,
  URL_GET_BAHAN_PUSAT,

  URL_GET_STOCK_BAHAN_DIVISI,
  URL_GET_STOCK_BAHAN_STAFF_DIVISI,
  URL_GET_STOCK_BAHAN_BY_STAFF,

  URL_GET_ASAL_STOCK_BAHAN,
  URL_GET_STOCK_BAHAN_ADMIN,

  URL_POST_SETOR_OUTSTAND_CASTING,
  URL_GET_SETOR_OUTSTAND_CASTING,
  URL_POST_SETOR_OUTSTAND_POTONG,
  URL_GET_SETOR_OUTSTAND_POTONG,
  URL_GET_ABU_TUKANG,
  URL_POST_ABU_TUKANG,

  URL_GET_HISTORY_KIRIM_LEBUR,
  URL_GET_ALL_SALDO_BAHAN_OPEN,
  URL_GET_ALL_SALDO_BAHAN,
  URL_GET_TERIMA_LEBUR,

  URL_GET_HISTORY_KIRIM_MASAK,
  URL_GET_DATA_TERIMA_LEBUR,
  URL_GET_KIRIM_MASAK,
  URL_GET_POTONG_POHON,
  URL_GET_POTONG_POHON_JENIS_BAHAN,

  URL_GET_SALDO_BATU,
  URL_GET_BATU_BY_KODE,
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
  URL_GET_DATA_POHON,

  URL_GET_NO_INDUK_JO,
  URL_GET_JO_BY_NO_INDUK,
  URL_GET_JO_BY_NO_INDUK_TERIMA,
  URL_GET_JO_BY_NO_INDUK_CLOSE,
  URL_ADD_KIRIM_JOB_ORDER_CART,
  URL_ADD_KIRIM_JOB_ORDER_CHECKOUT,

  URL_GET_DETAIL_JO,
  URL_ADD_TERIMA_JOB_ORDER_CHECKOUT,

  URL_GET_DETAIL_JO_CLOSE,
  URL_ADD_CLOSE_JO,

  URL_ADD_TERIMA_TAMBAHAN,
  URL_ADD_TERIMA_BAHAN,
  URL_ADD_KIRIM_BAHAN,
  URL_GET_CART_KIRIM_TAMBAHAN,

  URL_GET_NO_JO,
  URL_GET_DATA_JO_GABUNG_JO,
  URL_GET_DATA_JO,
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
  URL_GET_LAPORAN_PEMBUATAN_JENIS_BAHAN,
  URL_GET_LAPORAN_TERIMA_POTONG,

  URL_GET_LAPORAN_TAMBAH_JOB_ORDER,
  URL_GET_LAPORAN_TERIMA_BATU,
  URL_GET_LAPORAN_KIRIM_BATU_PUSAT,
  URL_GET_LAPORAN_KIRIM_TAMBAHAN,
  URL_DELETE_CART_KIRIM_TAMBAHAN,
  URL_ADD_CHECKOUT_KIRIM_TAMBAHAN,
  URL_GET_LAPORAN_KIRIM_JO_PUSAT,
  URL_GET_LAPORAN_KIRIM_JO,
  URL_GET_LAPORAN_TERIMA_JO_PUSAT,
  URL_GET_LAPORAN_TERIMA_JO,
  URL_GET_KARTU_JO,
  URL_GET_OUTSTAND,
  URL_GET_LAPORAN_SALDO_BAHAN_PUSAT,

  URL_GET_LAPORAN_SETOR_ABU_COR,
  URL_GET_LAPORAN_SETOR_ABU_POTONG,
  URL_GET_LAPORAN_SETOR_ABU_TUKANG,

  URL_GET_LAPORAN_KIRIM_LEBUR,
  URL_GET_LAPORAN_TERIMA_LEBUR,

  URL_GET_LAPORAN_KIRIM_MASAK,
  URL_GET_LAPORAN_TERIMA_MASAK,

  URL_GET_LAPORAN_TERIMA_PRODUKSI,
  URL_GET_LAPORAN_KIRIM_PRODUKSI,
  URL_GET_LAPORAN_TERIMA_TAMBAHAN_PRODUKSI,
  URL_GET_LAPORAN_TERIMA_BATU_PRODUKSI,
  URL_GET_LAPORAN_OUTSTAND_PRODUKSI,
  URL_GET_LAPORAN_SUSUT_PRODUKSI,
  URL_GET_DETAIL_BATU_KIRIM_PUSAT,
  URL_ADD_CART_BATU_KIRIM_PUSAT,
  URL_CHECKOUT_BATU_KIRIM_PUSAT,
  URL_GET_DATA_BATU_KIRIM,
  URL_ADD_TERIMA_BATU_PRODUKSI,

  URL_GET_ALL_MASTER_USER,
  URL_AUTHORIZE_USER,
  URL_GET_ALL_MASTER_USER_BY_ID,
  URL_ADD_MASTER_USER,
  URL_DELETE_MASTER_USER,
  URL_UPDATE_MASTER_USER,

  URL_GET_ALL_MASTER_DIVISI,
  URL_GET_MASTER_DIVISI_BY_ID,
  URL_ADD_MASTER_DIVISI,
  URL_DELETE_MASTER_DIVISI,
  URL_UPDATE_MASTER_DIVISI,

  URL_GET_DETAIL_TAMBAH_JO,

  URL_GET_MENU_HAK_AKSES_USER,
  URL_ADD_MENU_HAK_AKSES_USER,

  URL_GET_JO_BY_NO_KIRIM,
  URL_GET_JO_BY_NO_TERIMA,

  URL_ADD_BATAL_PROSES_JO,
  URL_ADD_BATAL_PROSES_JO_TERIMA,

  URL_GET_DIVISI_SUSUT_TUKANG,
};

export default data;
