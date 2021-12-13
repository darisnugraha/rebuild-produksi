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
    ],
  },
];

export default Menu;
