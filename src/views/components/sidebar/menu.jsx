const Menu = [
  { path: "/dashboard", icon: "fa fa-home", title: "Dashboard", is_show: true },
  {
    path: "/master",
    icon: "fa fa-database",
    title: "Master",
    is_show: true,
    children: [
      {
        path: "/master/jenis",
        title: "Master Jenis",
        is_show: true,
      },
      {
        path: "/master/warna",
        title: "Master Warna",
        is_show: true,
      },
      {
        path: "/master/jenis-bahan",
        title: "Master Jenis Bahan",
        is_show: true,
      },
      {
        path: "/master/kelompok-jenis-bahan",
        title: "Master Kelompok Jenis Bahan",
        is_show: true,
      },
      {
        path: "/master/bill-of-materials",
        title: "Master Bill Of Materials",
        is_show: true,
      },
      {
        path: "/master/batu",
        title: "Master Batu",
        is_show: true,
      },
      {
        path: "/master/cutting-batu",
        title: "Master Cutting Batu",
        is_show: true,
      },
      {
        path: "/master/jenis-batu",
        title: "Master Jenis Batu",
        is_show: true,
      },
      {
        path: "/master/kondisi",
        title: "Master Kondisi",
        is_show: true,
      },
      {
        path: "/master/bahan",
        title: "Master Bahan",
        is_show: true,
      },
      {
        path: "/master/marketing",
        title: "Master Marketing",
        is_show: true,
      },
      {
        path: "/master/tukang",
        title: "Master Tukang",
        is_show: true,
      },
      {
        path: "/master/customer",
        title: "Master Customer",
        is_show: true,
      },
      {
        path: "/master/ukuran",
        title: "Master Ukuran",
        is_show: true,
      },
      {
        path: "/master/status",
        title: "Master Status Job Order",
        is_show: true,
      },
    ],
  },
  {
    path: "/master-original",
    icon: "fa fa-bars",
    title: "Master Original",
    is_show: true,
  },
  {
    path: "/admin-berlian",
    icon: "fa fa-cubes",
    title: "Admin Berlian",
    is_show: true,
    children: [
      {
        path: "/admin-berlian/tambah-ambil-batu",
        title: "Tambah dan Ambil Batu",
        is_show: true,
      },
      {
        path: "/admin-berlian/kirim-batu-produksi",
        title: "Kirim Batu Produksi",
        is_show: true,
      },
    ],
  },
  {
    path: "/admin-bahan",
    icon: "fa fa-clone",
    title: "Admin Bahan",
    is_show: true,
    children: [
      {
        path: "/admin-bahan/tambah-saldo-bahan",
        title: "Tambah Saldo Bahan",
        is_show: true,
      },
      {
        path: "/admin-bahan/pembuatan-jenis-bahan",
        title: "Pembuatan Jenis Bahan",
        is_show: true,
      },
      {
        path: "/admin-bahan/terima-cor",
        title: "Terima COR",
        is_show: true,
      },
      {
        path: "/admin-bahan/terima-tukang-potong",
        title: "Terima Tukang Potong",
        is_show: true,
      },
      {
        path: "/admin-bahan/kirim-bahan-admin",
        title: "Kirim Bahan ke Admin",
        is_show: true,
      },
      {
        path: "/admin-bahan/terima-bahan-tukang",
        title: "Terima Bahan Tukang",
        is_show: true,
      },
    ],
  },
  {
    path: "/admin-pusat",
    icon: "fa fa-th-large",
    title: "Admin Pusat",
    is_show: true,
    children: [
      {
        path: "/admin-pusat/tambah-jo",
        title: "Tambah Job Order",
        is_show: true,
      },
      {
        path: "/admin-pusat/kirim-jo",
        title: "Kirim Job Order",
        is_show: true,
      },
      {
        path: "/admin-pusat/terima-jo",
        title: "Terima Job Order",
        is_show: true,
      },
      {
        path: "/admin-pusat/close-jo",
        title: "Close Job Order",
        is_show: true,
      },
      {
        path: "/admin-pusat/batal-proses-jo",
        title: "Batal Proses Job Order",
        is_show: true,
      },
      {
        path: "/admin-pusat/terima-batu",
        title: "Admin Terima Batu",
        is_show: true,
      },
      {
        path: "/admin-pusat/terima-bahan",
        title: "Admin Terima Bahan",
        is_show: true,
      },
      {
        path: "/admin-pusat/kirim-bahan-admin",
        title: "Kirim Bahan Admin",
        is_show: true,
      },
      {
        path: "/admin-pusat/kirim-batu",
        title: "Kirim Batu",
        is_show: true,
      },
      {
        path: "/admin-pusat/kirim-tambahan",
        title: "Kirim Tambahan",
        is_show: true,
      },
      {
        path: "/admin-pusat/gabung-jo",
        title: "Gabung JO",
        is_show: true,
      },
    ],
  },
  {
    path: "/produksi",
    icon: "fa fa-tasks",
    title: "Produksi",
    is_show: true,
    children: [
      {
        path: "/produksi/boom",
        title: "Boom",
        is_show: true,
        children: [
          {
            path: "/produksi/boom/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/boom/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/boom/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/boom/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/boom/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/boom/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/polis",
        title: "Polis",
        is_show: true,
        children: [
          {
            path: "/produksi/polis/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/polis/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/polis/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/polis/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/polis/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/polis/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/laser",
        title: "Laser",
        is_show: true,
        children: [
          {
            path: "/produksi/laser/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/laser/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/laser/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/laser/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/laser/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/laser/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/ukir",
        title: "Ukir",
        is_show: true,
        children: [
          {
            path: "/produksi/ukir/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/ukir/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/ukir/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/ukir/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/ukir/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/ukir/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/micro",
        title: "Micro",
        is_show: true,
        children: [
          {
            path: "/produksi/micro/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/micro/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/micro/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/micro/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/micro/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/micro/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/gudang-qc-qj",
        title: "Gudang QC QJ",
        is_show: true,
        children: [
          {
            path: "/produksi/gudang-qc-qj/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-qj/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-qj/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-qj/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-qj/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-qj/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/krum",
        title: "Krum",
        is_show: true,
        children: [
          {
            path: "/produksi/krum/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/krum/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/krum/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/krum/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/krum/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/krum/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/gosok",
        title: "Gosok",
        is_show: true,
        children: [
          {
            path: "/produksi/gosok/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gosok/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gosok/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/gosok/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/gosok/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/gosok/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/pasang-batu",
        title: "Pasang Batu",
        is_show: true,
        children: [
          {
            path: "/produksi/pasang-batu/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/pasang-batu/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/pasang-batu/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/pasang-batu/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/pasang-batu/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/pasang-batu/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/enamel",
        title: "Enamel",
        is_show: true,
        children: [
          {
            path: "/produksi/enamel/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/enamel/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/enamel/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/enamel/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/enamel/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/enamel/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/produksi/gudang-qc-vv",
        title: "Gudang QC VV",
        is_show: true,
        children: [
          {
            path: "/produksi/gudang-qc-vv/terima-barang",
            title: "Terima Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-vv/kirim-barang",
            title: "Kirim Job Order",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-vv/terima-tambahan",
            title: "Terima Tambahan",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-vv/terima-batu",
            title: "Terima Batu",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-vv/terima-bahan",
            title: "Terima Bahan",
            is_show: true,
          },
          {
            path: "/produksi/gudang-qc-vv/kirim-bahan",
            title: "Kirim Bahan",
            is_show: true,
          },
        ],
      },
    ],
  },
  {
    path: "/setor-abu",
    icon: "fa fa-tree",
    title: "Setor Abu",
    is_show: true,
    children: [
      {
        path: "/setor-abu/abu-tukang-cor",
        title: "Abu Tukang COR",
        is_show: true,
      },
      {
        path: "/setor-abu/abu-tukang-potong",
        title: "Abu Tukang Potong",
        is_show: true,
      },
      {
        path: "/setor-abu/abu-tukang",
        title: "Abu Tukang",
        is_show: true,
      },
    ],
  },
  {
    path: "/lebur",
    icon: "fa fa-fire",
    title: "Lebur",
    is_show: true,
    children: [
      {
        path: "/lebur/kirim-lebur",
        title: "Kirim Lebur",
        is_show: true,
      },
      {
        path: "/lebur/terima-lebur",
        title: "Terima Lebur",
        is_show: true,
      },
    ],
  },
  {
    path: "/masak",
    icon: "fa fa-magic",
    title: "Masak Bahan",
    is_show: true,
    children: [
      {
        path: "/masak/kirim-masak",
        title: "Kirim Masak",
        is_show: true,
      },
      {
        path: "/masak/terima-masak",
        title: "Terima Masak",
        is_show: true,
      },
    ],
  },
  {
    path: "/laporan",
    icon: "fa fa-book",
    title: "Laporan",
    is_show: true,
    children: [
      {
        path: "/laporan/admin-berlian",
        title: "Laporan Admin Berlian",
        is_show: true,
        children: [
          {
            path: "/laporan/admin-berlian/ambil-tambah-saldo-batu",
            title: "Laporan Ambil dan Tambah Saldo Batu",
            is_show: true,
          },
          {
            path: "/laporan/admin-berlian/kirim-batu",
            title: "Laporan Kirim Batu",
            is_show: true,
          },
          {
            path: "/laporan/admin-berlian/saldo-batu",
            title: "Laporan Saldo Batu",
            is_show: true,
          },
        ],
      },
      {
        path: "/laporan/admin-bahan",
        title: "Laporan Admin Bahan",
        is_show: true,
        children: [
          {
            path: "/laporan/admin-bahan/saldo-bahan",
            title: "Laporan Saldo Bahan",
            is_show: true,
          },
          {
            path: "/laporan/admin-bahan/tambah-saldo-bahan",
            title: "Laporan Tambah Saldo Bahan",
            is_show: true,
          },
          {
            path: "/laporan/admin-bahan/pembuatan-jenis-bahan",
            title: "Laporan Pembuatan Jenis Bahan",
            is_show: true,
          },
          {
            path: "/laporan/admin-bahan/terima-potong",
            title: "Laporan Terima Potong",
            is_show: true,
          },
        ],
      },
      {
        path: "/laporan/admin-pusat",
        title: "Laporan Admin Pusat",
        is_show: true,
        children: [
          {
            path: "/laporan/admin-pusat/tambah-job-order",
            title: "Laporan Tambah Job Order",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/terima-batu",
            title: "Laporan Terima Batu",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/kirim-batu",
            title: "Laporan Kirim Batu",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/kirim-tambahan",
            title: "Laporan Kirim Tambahan",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/kirim-jo-admin",
            title: "Laporan Kirim JO Admin",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/terima-jo-admin",
            title: "Laporan Terima JO Admin",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/kartu-jo",
            title: "Kartu Job Order",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/outstand-admin",
            title: "Laporan Outstand Admin",
            is_show: true,
          },
          {
            path: "/laporan/admin-pusat/saldo-bahan",
            title: "Laporan Saldo Bahan",
            is_show: true,
          },
        ],
      },
      {
        path: "/laporan/setor-abu",
        title: "Laporan Setor Abu",
        is_show: true,
        children: [
          {
            path: "/laporan/setor-abu/setor-abu-cor",
            title: "Laporan Setor Abu COR",
            is_show: true,
          },
          {
            path: "/laporan/setor-abu/setor-abu-potong",
            title: "Laporan Setor Abu Potong",
            is_show: true,
          },
          {
            path: "/laporan/setor-abu/setor-abu-tukang",
            title: "Laporan Setor Abu Tukang",
            is_show: true,
          },
        ],
      },
      {
        path: "/laporan/lebur",
        title: "Laporan Lebur",
        is_show: true,
        children: [
          {
            path: "/laporan/lebur/kirim",
            title: "Laporan Kirim Lebur",
            is_show: true,
          },
          {
            path: "/laporan/lebur/terima",
            title: "Laporan Terima Lebur",
            is_show: true,
          },
        ],
      },
      {
        path: "/laporan/masak",
        title: "Laporan Masak",
        is_show: true,
        children: [
          {
            path: "/laporan/masak/kirim",
            title: "Laporan Kirim Masak",
            is_show: true,
          },
          {
            path: "/laporan/masak/terima",
            title: "Laporan Terima Masak",
            is_show: true,
          },
        ],
      },
    ],
  },
  {
    path: "/laporan-produksi",
    icon: "fa fa-book",
    title: "Laporan Produksi",
    is_show: true,
    children: [
      {
        path: "/laporan-produksi/kirim",
        title: "Laporan Kirim Produksi By Divisi",
        is_show: true,
      },
      {
        path: "/laporan-produksi/terima",
        title: "Laporan Terima Produksi By Divisi",
        is_show: true,
      },
      {
        path: "/laporan-produksi/terima-tambahan",
        title: "Laporan Terima Tambahan Produksi By Divisi",
        is_show: true,
      },
      {
        path: "/laporan-produksi/terima-batu",
        title: "Laporan Terima Batu Produksi By Divisi",
        is_show: true,
      },
      {
        path: "/laporan-produksi/outstand",
        title: "Laporan Outstand Produksi By Divisi",
        is_show: true,
      },
      {
        path: "/laporan-produksi/terima-gudang",
        title: "Laporan Terima Gudang Produksi By Divisi",
        is_show: true,
      },
    ],
  },
  {
    path: "/utility",
    icon: "fa fa-cogs",
    title: "Utility",
    is_show: true,
    children: [
      {
        path: "/utility/master-user",
        title: "Master User",
        is_show: true,
      },
      {
        path: "/utility/master-divisi",
        title: "Master Divisi",
        is_show: true,
      },
      {
        path: "/utility/hak-akses",
        title: "Hak Akses",
        is_show: true,
      },
    ],
  },
];

export default Menu;
