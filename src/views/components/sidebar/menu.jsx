const Menu = [
  { path: "/dashboard", icon: "fa fa-home", title: "Dashboard" },
  {
    path: "/master",
    icon: "fa fa-database",
    title: "Master",
    children: [
      {
        path: "/master/jenis",
        title: "Master Jenis",
      },
      {
        path: "/master/warna",
        title: "Master Warna",
      },
      {
        path: "/master/jenis-bahan",
        title: "Master Jenis Bahan",
      },
      {
        path: "/master/batu",
        title: "Master Batu",
      },
      {
        path: "/master/cutting-batu",
        title: "Master Cutting Batu",
      },
      {
        path: "/master/jenis-batu",
        title: "Master Jenis Batu",
      },
      {
        path: "/master/kondisi",
        title: "Master Kondisi",
      },
      {
        path: "/master/bahan",
        title: "Master Bahan",
      },
      {
        path: "/master/marketing",
        title: "Master Marketing",
      },
      {
        path: "/master/tukang",
        title: "Master Tukang",
      },
      {
        path: "/master/customer",
        title: "Master Customer",
      },
      {
        path: "/master/ukuran",
        title: "Master Ukuran",
      },
    ],
  },
  { path: "/master-original", icon: "fa fa-bars", title: "Master Original" },
  {
    path: "/admin-berlian",
    icon: "fa fa-cubes",
    title: "Admin Berlian",
    children: [
      {
        path: "/admin-berlian/tambah-ambil-batu",
        title: "Tambah dan Ambil Batu",
      },
      {
        path: "/admin-berlian/kirim-batu-produksi",
        title: "Kirim Batu Produksi",
      },
    ],
  },
  {
    path: "/admin-bahan",
    icon: "fa fa-clone",
    title: "Admin Bahan",
    children: [
      {
        path: "/admin-bahan/tambah-saldo-bahan",
        title: "Tambah Saldo Bahan",
      },
      {
        path: "/admin-bahan/pembuatan-jenis-bahan",
        title: "Pembuatan Jenis Bahan",
      },
      {
        path: "/admin-bahan/terima-cor",
        title: "Terima COR",
      },
      {
        path: "/admin-bahan/terima-tukang-potong",
        title: "Terima Tukang Potong",
      },
      {
        path: "/admin-bahan/kirim-bahan-admin",
        title: "Kirim Bahan ke Admin",
      },
      {
        path: "/admin-bahan/terima-bahan-tukang",
        title: "Terima Bahan Tukang",
      },
    ],
  },
  {
    path: "/admin-pusat",
    icon: "fa fa-th-large",
    title: "Admin Pusat",
    children: [
      {
        path: "/admin-pusat/tambah-jo",
        title: "Tambah Job Order",
      },
      {
        path: "/admin-pusat/kirim-jo",
        title: "Kirim Job Order",
      },
      {
        path: "/admin-pusat/terima-jo",
        title: "Terima Job Order",
      },
      {
        path: "/admin-pusat/close-jo",
        title: "Close Job Order",
      },
      {
        path: "/admin-pusat/terima-batu",
        title: "Admin Terima Batu",
      },
      {
        path: "/admin-pusat/terima-bahan",
        title: "Admin Terima Bahan",
      },
      {
        path: "/admin-pusat/kirim-bahan-admin",
        title: "Kirim Bahan Admin",
      },
      {
        path: "/admin-pusat/kirim-batu",
        title: "Kirim Batu",
      },
      {
        path: "/admin-pusat/kirim-tambahan",
        title: "Kirim Tambahan",
      },
      {
        path: "/admin-pusat/gabung-jo",
        title: "Gabung JO",
      },
    ],
  },
  {
    path: "/produksi",
    icon: "fa fa-tasks",
    title: "Produksi",
    children: [
      {
        path: "/produksi/boom",
        title: "Boom",
        children: [
          {
            path: "/produksi/boom/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/boom/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/boom/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/boom/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/boom/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/boom/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/polis",
        title: "Polis",
        children: [
          {
            path: "/produksi/polis/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/polis/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/polis/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/polis/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/polis/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/polis/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/laser",
        title: "Laser",
        children: [
          {
            path: "/produksi/laser/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/laser/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/laser/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/laser/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/laser/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/laser/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/ukir",
        title: "Ukir",
        children: [
          {
            path: "/produksi/ukir/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/ukir/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/ukir/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/ukir/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/ukir/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/ukir/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/micro",
        title: "Micro",
        children: [
          {
            path: "/produksi/micro/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/micro/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/micro/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/micro/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/micro/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/micro/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/gudang-qc-qj",
        title: "Gudang QC QJ",
        children: [
          {
            path: "/produksi/gudang-qc-qj/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/gudang-qc-qj/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/gudang-qc-qj/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/gudang-qc-qj/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/gudang-qc-qj/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/gudang-qc-qj/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/krum",
        title: "Krum",
        children: [
          {
            path: "/produksi/krum/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/krum/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/krum/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/krum/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/krum/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/krum/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/gosok",
        title: "Gosok",
        children: [
          {
            path: "/produksi/gosok/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/gosok/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/gosok/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/gosok/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/gosok/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/gosok/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/pasang-batu",
        title: "Pasang Batu",
        children: [
          {
            path: "/produksi/pasang-batu/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/pasang-batu/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/pasang-batu/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/pasang-batu/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/pasang-batu/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/pasang-batu/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/enamel",
        title: "Enamel",
        children: [
          {
            path: "/produksi/enamel/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/enamel/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/enamel/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/enamel/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/enamel/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/enamel/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
      {
        path: "/produksi/gudang-qc-vv",
        title: "Gudang QC VV",
        children: [
          {
            path: "/produksi/gudang-qc-vv/terima-barang",
            title: "Terima Job Order",
          },
          {
            path: "/produksi/gudang-qc-vv/kirim-barang",
            title: "Kirim Job Order",
          },
          {
            path: "/produksi/gudang-qc-vv/terima-tambahan",
            title: "Terima Tambahan",
          },
          {
            path: "/produksi/gudang-qc-vv/terima-batu",
            title: "Terima Batu",
          },
          {
            path: "/produksi/gudang-qc-vv/terima-bahan",
            title: "Terima Bahan",
          },
          {
            path: "/produksi/gudang-qc-vv/kirim-bahan",
            title: "Kirim Bahan",
          },
        ],
      },
    ],
  },
  {
    path: "/setor-abu",
    icon: "fa fa-tree",
    title: "Setor Abu",
    children: [
      {
        path: "/setor-abu/abu-tukang-cor",
        title: "Abu Tukang COR",
      },
      {
        path: "/setor-abu/abu-tukang-potong",
        title: "Abu Tukang Potong",
      },
      {
        path: "/setor-abu/abu-tukang",
        title: "Abu Tukang",
      },
    ],
  },
  {
    path: "/lebur",
    icon: "fa fa-fire",
    title: "Lebur",
    children: [
      {
        path: "/lebur/kirim-lebur",
        title: "Kirim Lebur",
      },
      {
        path: "/lebur/terima-lebur",
        title: "Terima Lebur",
      },
    ],
  },
  {
    path: "/masak",
    icon: "fa fa-magic",
    title: "Masak Bahan",
    children: [
      {
        path: "/masak/kirim-masak",
        title: "Kirim Masak",
      },
      {
        path: "/masak/terima-masak",
        title: "Terima Masak",
      },
    ],
  },
  {
    path: "/laporan",
    icon: "fa fa-book",
    title: "Laporan",
    children: [
      {
        path: "/laporan/admin-berlian",
        title: "Laporan Admin Berlian",
        children: [
          {
            path: "/laporan/admin-berlian/ambil-tambah-saldo-batu",
            title: "Laporan Ambil dan Tambah Saldo Batu",
          },
          {
            path: "/laporan/admin-berlian/kirim-batu",
            title: "Laporan Kirim Batu",
          },
        ],
      },
      {
        path: "/laporan/admin-bahan",
        title: "Laporan Admin Bahan",
        children: [
          {
            path: "/laporan/admin-bahan/saldo-bahan",
            title: "Laporan Saldo Bahan",
          },
        ],
      },
    ],
  },
];

export default Menu;
