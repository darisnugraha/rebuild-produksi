import React from "react";
// import { Redirect } from "react-router";

import Login from "../../views/pages/auth/login/login";
import Dashboard from "../../views/pages/dashboard/dashboard";
//laporan

//notfound
import NotFound from "../../views/pages/notfound";
//master
import MasterJenis from "../../views/pages/master/master-jenis";
import MasterWarna from "../../views/pages/master/master-warna";
import MasterJenisBahan from "../../views/pages/master/master-jenis-bahan";
import MasterBatu from "../../views/pages/master/master-batu";
import MasterCuttingBatu from "../../views/pages/master/master-cutting-batu";
import MasterJenisBatu from "../../views/pages/master/master-jenis-batu";
import MasterKondisi from "../../views/pages/master/master-kondisi";
import MasterBahan from "../../views/pages/master/master-bahan";
import MasterMarketing from "../../views/pages/master/master-marketing";
import MasterTukang from "../../views/pages/master/master-tukang";
import MasterCustomer from "../../views/pages/master/master-customer";
import MasterUkuran from "../../views/pages/master/master-ukuran";
import MasterOriginal from "../../views/pages/master-original/master-original";
//admin berlian
import TerimaAmbilBatu from "../../views/pages/admin-berlian/tambah-ambil-batu";
import KirimBatuProduksi from "../../views/pages/admin-berlian/kirim-batu-produksi";
//admin bahan
import TambahSaldoBahan from "../../views/pages/admin-bahan/tambah-saldo-bahan";
import PembuatanJenisBahan from "../../views/pages/admin-bahan/pembuatan-jenis-bahan";
import TerimaCOR from "../../views/pages/admin-bahan/terima-cor";
import TerimaTukangPotong from "../../views/pages/admin-bahan/terima-tukang-potong";
import KirimBahanAdmin from "../../views/pages/admin-bahan/kirim-bahan-admin";
import TerimaBahanTukang from "../../views/pages/admin-bahan/terima-bahan-tukang";
//admin pusat
import TambahJobOrder from "../../views/pages/admin-pusat/tambah-jo";
import KirimJO from "../../views/pages/job-order/kirim-jo";
import TerimaJO from "../../views/pages/job-order/terima-jo";
import CloseJO from "../../views/pages/admin-pusat/close-jo";
import TerimaBatu from "../../views/pages/batu/terima-batu";
import TerimaBahan from "../../views/pages/bahan/terima-bahan";
import KirimBahanAdminPusat from "../../views/pages/admin-pusat/kirim-bahan-admin-pusat";
import KirimBatu from "../../views/pages/admin-pusat/kirim-batu";
import KirimTambahan from "../../views/pages/admin-pusat/kirim-tambahan";
import GabungJO from "../../views/pages/admin-pusat/gabung-jo";
import TerimaTambahan from "../../views/pages/produksi/terima-tambahan";
import TerimaBatuProduksi from "../../views/pages/produksi/terima-batu-produksi";
import KirimBahanProduksi from "../../views/pages/produksi/kirim-bahan";
import AbuTukangCOR from "../../views/pages/setor-abu/abu-tukang-cor";
import AbuTukangPotong from "../../views/pages/setor-abu/abu-tukang-potong";
import AbuTukang from "../../views/pages/setor-abu/abu-tukang";
import KirimLebur from "../../views/pages/lebur/kirim-lebur";
import TerimaLebur from "../../views/pages/lebur/terima-lebur";
import KirimMasak from "../../views/pages/masak-bahan/kirim-masak";
import TerimaMasak from "../../views/pages/masak-bahan/terima-masak";
//laporan
import LaporanTambahAmbilSaldoBatu from "../../views/pages/laporan/laporan-admin-berlian/laporan-tambah-dan-ambil-saldo-batu";
import LaporanKirimBatu from "../../views/pages/laporan/laporan-admin-berlian/laporan-kirim-batu";
import LaporanSaldoBatu from "../../views/pages/laporan/laporan-admin-berlian/laporan-saldo-batu";
import LaporanSaldoBahan from "../../views/pages/laporan/laporan-admin-bahan/laporan-saldo-bahan";
import LaporanTambahSaldoBahan from "../../views/pages/laporan/laporan-admin-bahan/laporan-tambah-saldo-bahan";
import LaporanPembuatanJenisBahan from "../../views/pages/laporan/laporan-admin-bahan/laporan-pembuatan-jenis-bahan";
import LaporanTerimaPotong from "../../views/pages/laporan/laporan-admin-bahan/laporan-terima-potong";
import LaporanTambahJobOrder from "../../views/pages/laporan/laporan-admin-pusat/laporan-tambah-job-order";
import LaporanTerimaBatu from "../../views/pages/laporan/laporan-admin-pusat/laporan-terima-batu";
import LaporanKirimBatuPusat from "../../views/pages/laporan/laporan-admin-pusat/laporan-kirim-batu-pusat";
import LaporanKirimTambahan from "../../views/pages/laporan/laporan-admin-pusat/laporan-kirim-tambahan";
import LaporanKirimJoAdmin from "../../views/pages/laporan/laporan-admin-pusat/laporan-kirim-jo-admin";
import LaporanTerimaJoAdmin from "../../views/pages/laporan/laporan-admin-pusat/laporan-terima-jo-admin";
import LaporanKartuJo from "../../views/pages/laporan/laporan-admin-pusat/kartu-job-order";
import LaporanOutstandAdmin from "../../views/pages/laporan/laporan-admin-pusat/laporan-outstand-admin";
import LaporanSaldoBahanPusat from "../../views/pages/laporan/laporan-admin-pusat/laporan-saldo-bahan";
import LaporanSetorAbuCOR from "../../views/pages/laporan/laporan-setoran-abu/laporan-setor-abu-cor";
import LaporanSetorAbuPotong from "../../views/pages/laporan/laporan-setoran-abu/laporan-setor-abu-potong";
import LaporanSetorAbuTukang from "../../views/pages/laporan/laporan-setoran-abu/laporan-setor-abu-tukang";
import LaporanKirimLebur from "../../views/pages/laporan/laporan-lebur/laporan-kirim-lebur";
import LaporanTerimaLebur from "../../views/pages/laporan/laporan-lebur/laporan-terima-lebur";
import LaporanKirimMasak from "../../views/pages/laporan/laporan-masak/laporan-kirim-masak";
import LaporanTerimaMasak from "../../views/pages/laporan/laporan-masak/laporan-terima-masak";
import LaporanTerimaProduksi from "../../views/pages/laporan/laporan-produksi/laporan-terima-produksi";
import LaporanKirimProduksi from "../../views/pages/laporan/laporan-produksi/laporan-kirim-produksi";
import LaporanTerimaTambahanProduksi from "../../views/pages/laporan/laporan-produksi/laporan-terima-tambahan-produksi";
import LaporanTerimaBatuProduksi from "../../views/pages/laporan/laporan-produksi/laporan-terima-batu-produksi";
import LaporanOutstandProduksi from "../../views/pages/laporan/laporan-produksi/laporan-outstand-produksi";
import LaporanTerimaGudangProduksi from "../../views/pages/laporan/laporan-produksi/laporan-terima-gudang-produksi";
import MasterUser from "../../views/pages/utility/master-user";

const routes = [
  // {
  //   path: "*",
  //   exact: true,
  //   component: () => <Redirect to="/notfound" />,
  // },
  {
    path: "/",
    title: "Login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: () => <Dashboard />,
  },
  //Master
  {
    path: "/master/jenis",
    title: "Master Jenis",
    component: () => <MasterJenis />,
  },
  {
    path: "/master/warna",
    title: "Master Warna",
    component: () => <MasterWarna />,
  },
  {
    path: "/master/jenis-bahan",
    title: "Master Jenis Bahan",
    component: () => <MasterJenisBahan />,
  },
  {
    path: "/master/batu",
    title: "Master Batu",
    component: () => <MasterBatu />,
  },
  {
    path: "/master/cutting-batu",
    title: "Master Cutting Batu",
    component: () => <MasterCuttingBatu />,
  },
  {
    path: "/master/jenis-batu",
    title: "Master Jenis Batu",
    component: () => <MasterJenisBatu />,
  },
  {
    path: "/master/kondisi",
    title: "Master Kondisi",
    component: () => <MasterKondisi />,
  },
  {
    path: "/master/bahan",
    title: "Master Bahan",
    component: () => <MasterBahan />,
  },
  {
    path: "/master/marketing",
    title: "Master Marketing",
    component: () => <MasterMarketing />,
  },
  {
    path: "/master/tukang",
    title: "Master Tukang",
    component: () => <MasterTukang />,
  },
  {
    path: "/master/customer",
    title: "Master Customer",
    component: () => <MasterCustomer />,
  },
  {
    path: "/master/ukuran",
    title: "Master Ukuran",
    component: () => <MasterUkuran />,
  },
  //Master Original
  {
    path: "/master-original",
    title: "Master Original",
    component: () => <MasterOriginal />,
  },
  //admin berlian
  {
    path: "/admin-berlian/tambah-ambil-batu",
    title: "Terima dan Ambil Batu",
    component: () => <TerimaAmbilBatu />,
  },
  {
    path: "/admin-berlian/kirim-batu-produksi",
    title: "Kirim Batu Produksi",
    component: () => <KirimBatuProduksi />,
  },
  //admin bahan
  {
    path: "/admin-bahan/tambah-saldo-bahan",
    title: "Tambah Saldo Bahan",
    component: () => <TambahSaldoBahan />,
  },
  {
    path: "/admin-bahan/pembuatan-jenis-bahan",
    title: "Pembuatan Jenis Bahan",
    component: () => <PembuatanJenisBahan />,
  },
  {
    path: "/admin-bahan/terima-cor",
    title: "Terima COR",
    component: () => <TerimaCOR />,
  },
  {
    path: "/admin-bahan/terima-tukang-potong",
    title: "Terima Tukang Potong",
    component: () => <TerimaTukangPotong />,
  },
  {
    path: "/admin-bahan/kirim-bahan-admin",
    title: "Kirim Bahan Admin",
    component: () => <KirimBahanAdmin />,
  },
  {
    path: "/admin-bahan/terima-bahan-tukang",
    title: "Terima Bahan Tukang",
    component: () => <TerimaBahanTukang />,
  },
  //admin pusat
  {
    path: "/admin-pusat/tambah-jo",
    title: "Tambah Job Order",
    component: () => <TambahJobOrder />,
  },
  {
    path: "/admin-pusat/kirim-jo",
    title: "Kirim Job Order",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <KirimJO />,
  },
  {
    path: "/admin-pusat/terima-jo",
    title: "Terima Job Order",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <TerimaJO />,
  },
  {
    path: "/admin-pusat/close-jo",
    title: "Close Job Order",
    component: () => <CloseJO />,
  },
  {
    path: "/admin-pusat/terima-batu",
    title: "Admin Terima Batu",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <TerimaBatu />,
  },
  {
    path: "/admin-pusat/terima-bahan",
    title: "Admin Terima Bahan",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <TerimaBahan />,
  },
  {
    path: "/admin-pusat/kirim-bahan-admin",
    title: "Kirim Bahan Admin",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <KirimBahanAdminPusat />,
  },
  {
    path: "/admin-pusat/kirim-batu",
    title: "Kirim Batu",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <KirimBatu />,
  },
  {
    path: "/admin-pusat/kirim-tambahan",
    title: "Kirim Tambahan",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <KirimTambahan />,
  },
  {
    path: "/admin-pusat/gabung-jo",
    title: "Gabung JO",
    menu: "Admin Pusat",
    divisi: "Admin",
    component: () => <GabungJO />,
  },
  //Produksi
  {
    path: "/produksi/boom/terima-barang",
    title: "Boom Terima Barang",
    menu: "Boom",
    divisi: "Boom",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/polis/terima-barang",
    title: "Polis Terima Barang",
    menu: "Polis",
    divisi: "Polis",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/laser/terima-barang",
    title: "Laser Terima Barang",
    menu: "Laser",
    divisi: "Laser",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/ukir/terima-barang",
    title: "Ukir Terima Barang",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/micro/terima-barang",
    title: "Micro Terima Barang",
    menu: "Micro",
    divisi: "Micro",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/gudang-qc-qj/terima-barang",
    title: "Gudang QC QJ Terima Barang",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/krum/terima-barang",
    title: "Krum Terima Barang",
    menu: "Krum",
    divisi: "Krum",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/gosok/terima-barang",
    title: "Gosok Terima Barang",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/pasang-batu/terima-barang",
    title: "Pasang Batu Terima Barang",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/enamel/terima-barang",
    title: "Enamel Terima Barang",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <TerimaJO />,
  },
  {
    path: "/produksi/gudang-qc-vv/terima-barang",
    title: "Gudang QC VV Terima Barang",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <TerimaJO />,
  },

  {
    path: "/produksi/boom/kirim-barang",
    title: "Boom Kirim Barang",
    menu: "Boom",
    divisi: "Boom",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/polis/kirim-barang",
    title: "Polis Kirim Barang",
    menu: "Polis",
    divisi: "Polis",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/laser/kirim-barang",
    title: "Laser Kirim Barang",
    menu: "Laser",
    divisi: "Laser",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/ukir/kirim-barang",
    title: "Ukir Kirim Barang",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/micro/kirim-barang",
    title: "Micro Kirim Barang",
    menu: "Micro",
    divisi: "Micro",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/gudang-qc-qj/kirim-barang",
    title: "Gudang QC QJ Kirim Barang",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/krum/kirim-barang",
    title: "Krum Kirim Barang",
    menu: "Krum",
    divisi: "Krum",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/gosok/kirim-barang",
    title: "Gosok Kirim Barang",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/pasang-batu/kirim-barang",
    title: "Pasang Batu Kirim Barang",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/enamel/kirim-barang",
    title: "Enamel Kirim Barang",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <KirimJO />,
  },
  {
    path: "/produksi/gudang-qc-vv/kirim-barang",
    title: "Gudang QC VV Kirim Barang",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <KirimJO />,
  },

  {
    path: "/produksi/boom/terima-tambahan",
    title: "Boom Terima Tambahan",
    menu: "Boom",
    divisi: "Boom",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/polis/terima-tambahan",
    title: "Polis Terima Tambahan",
    menu: "Polis",
    divisi: "Polis",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/laser/terima-tambahan",
    title: "Laser Terima Tambahan",
    menu: "Laser",
    divisi: "Laser",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/ukir/terima-tambahan",
    title: "Ukir Terima Tambahan",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/micro/terima-tambahan",
    title: "Micro Terima Tambahan",
    menu: "Micro",
    divisi: "Micro",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/gudang-qc-qj/terima-tambahan",
    title: "Gudang QC QJ Terima Tambahan",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/krum/terima-tambahan",
    title: "Krum Terima Tambahan",
    menu: "Krum",
    divisi: "Krum",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/gosok/terima-tambahan",
    title: "Gosok Terima Tambahan",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/pasang-batu/terima-tambahan",
    title: "Pasang Batu Terima Tambahan",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/enamel/terima-tambahan",
    title: "Enamel Terima Tambahan",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <TerimaTambahan />,
  },
  {
    path: "/produksi/gudang-qc-vv/terima-tambahan",
    title: "Gudang QC VV Terima Tambahan",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <TerimaTambahan />,
  },

  {
    path: "/produksi/boom/terima-batu",
    title: "Boom Terima Batu",
    menu: "Boom",
    divisi: "Boom",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/polis/terima-batu",
    title: "Polis Terima Batu",
    menu: "Polis",
    divisi: "Polis",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/laser/terima-batu",
    title: "Laser Terima Batu",
    menu: "Laser",
    divisi: "Laser",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/ukir/terima-batu",
    title: "Ukir Terima Batu",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/micro/terima-batu",
    title: "Micro Terima Batu",
    menu: "Micro",
    divisi: "Micro",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/gudang-qc-qj/terima-batu",
    title: "Gudang QC QJ Terima Batu",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/krum/terima-batu",
    title: "Krum Terima Batu",
    menu: "Krum",
    divisi: "Krum",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/gosok/terima-batu",
    title: "Gosok Terima Batu",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/pasang-batu/terima-batu",
    title: "Pasang Batu Terima Batu",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/enamel/terima-batu",
    title: "Enamel Terima Batu",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <TerimaBatuProduksi />,
  },
  {
    path: "/produksi/gudang-qc-vv/terima-batu",
    title: "Gudang QC VV Terima Batu",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <TerimaBatuProduksi />,
  },

  {
    path: "/produksi/boom/terima-bahan",
    title: "Boom Terima Bahan",
    menu: "Boom",
    divisi: "Boom",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/polis/terima-bahan",
    title: "Polis Terima Bahan",
    menu: "Polis",
    divisi: "Polis",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/laser/terima-bahan",
    title: "Laser Terima Bahan",
    menu: "Laser",
    divisi: "Laser",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/ukir/terima-bahan",
    title: "Ukir Terima Bahan",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/micro/terima-bahan",
    title: "Micro Terima Bahan",
    menu: "Micro",
    divisi: "Micro",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/gudang-qc-qj/terima-bahan",
    title: "Gudang QC QJ Terima Bahan",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/krum/terima-bahan",
    title: "Krum Terima Bahan",
    menu: "Krum",
    divisi: "Krum",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/gosok/terima-bahan",
    title: "Gosok Terima Bahan",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/pasang-bahan/terima-bahan",
    title: "Pasang Batu Terima Bahan",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/enamel/terima-bahan",
    title: "Enamel Terima Bahan",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <TerimaBahan />,
  },
  {
    path: "/produksi/gudang-qc-vv/terima-bahan",
    title: "Gudang QC VV Terima Bahan",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <TerimaBahan />,
  },

  {
    path: "/produksi/boom/kirim-bahan",
    title: "Boom Kirim Bahan",
    menu: "Boom",
    divisi: "Boom",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/polis/kirim-bahan",
    title: "Polis Kirim Bahan",
    menu: "Polis",
    divisi: "Polis",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/laser/kirim-bahan",
    title: "Laser Kirim Bahan",
    menu: "Laser",
    divisi: "Laser",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/ukir/kirim-bahan",
    title: "Ukir Kirim Bahan",
    menu: "Ukir",
    divisi: "Ukir",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/micro/kirim-bahan",
    title: "Micro Kirim Bahan",
    menu: "Micro",
    divisi: "Micro",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/gudang-qc-qj/kirim-bahan",
    title: "Gudang QC QJ Kirim Bahan",
    menu: "Gudang QC QJ",
    divisi: "Gudang QC QJ",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/krum/kirim-bahan",
    title: "Krum Kirim Bahan",
    menu: "Krum",
    divisi: "Krum",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/gosok/kirim-bahan",
    title: "Gosok Kirim Bahan",
    menu: "Gosok",
    divisi: "Gosok",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/pasang-bahan/kirim-bahan",
    title: "Pasang Batu Kirim Bahan",
    menu: "Pasang Batu",
    divisi: "Pasang Batu",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/enamel/kirim-bahan",
    title: "Enamel Kirim Bahan",
    menu: "Enamel",
    divisi: "Enamel",
    component: () => <KirimBahanProduksi />,
  },
  {
    path: "/produksi/gudang-qc-vv/kirim-bahan",
    title: "Gudang QC VV Kirim Bahan",
    menu: "Gudang QC VV",
    divisi: "Gudang QC VV",
    component: () => <KirimBahanProduksi />,
  },
  //Setor Abu
  {
    path: "/setor-abu/abu-tukang-cor",
    title: "Abu Tukang COR",
    component: () => <AbuTukangCOR />,
  },
  {
    path: "/setor-abu/abu-tukang-potong",
    title: "Abu Tukang Potong",
    component: () => <AbuTukangPotong />,
  },
  {
    path: "/setor-abu/abu-tukang",
    title: "Abu Tukang",
    component: () => <AbuTukang />,
  },
  //Lebur
  {
    path: "/lebur/kirim-lebur",
    title: "Kirim Lebur",
    component: () => <KirimLebur />,
  },
  {
    path: "/lebur/terima-lebur",
    title: "Terima Lebur",
    component: () => <TerimaLebur />,
  },
  //Masak
  {
    path: "/masak/kirim-masak",
    title: "Kirim Masak Bahan",
    component: () => <KirimMasak />,
  },
  {
    path: "/masak/terima-masak",
    title: "Terima Masak Bahan",
    component: () => <TerimaMasak />,
  },
  //Laporan
  {
    path: "/laporan/admin-berlian/ambil-tambah-saldo-batu",
    title: "Laporan Tambah dan Ambil Saldo Batu",
    component: () => <LaporanTambahAmbilSaldoBatu />,
  },
  {
    path: "/laporan/admin-berlian/kirim-batu",
    title: "Laporan Kirim Batu",
    component: () => <LaporanKirimBatu />,
  },
  {
    path: "/laporan/admin-berlian/saldo-batu",
    title: "Laporan Saldo Batu",
    component: () => <LaporanSaldoBatu />,
  },
  {
    path: "/laporan/admin-bahan/saldo-bahan",
    title: "Laporan Saldo Bahan",
    component: () => <LaporanSaldoBahan />,
  },
  {
    path: "/laporan/admin-bahan/tambah-saldo-bahan",
    title: "Laporan Tambah Saldo Bahan",
    component: () => <LaporanTambahSaldoBahan />,
  },
  {
    path: "/laporan/admin-bahan/pembuatan-jenis-bahan",
    title: "Laporan Pembuatan Jenis Bahan",
    component: () => <LaporanPembuatanJenisBahan />,
  },
  {
    path: "/laporan/admin-bahan/terima-potong",
    title: "Laporan Terima Potong",
    component: () => <LaporanTerimaPotong />,
  },
  {
    path: "/laporan/admin-pusat/tambah-job-order",
    title: "Laporan Tambah Job Order",
    component: () => <LaporanTambahJobOrder />,
  },
  {
    path: "/laporan/admin-pusat/terima-batu",
    title: "Laporan Terima Batu",
    component: () => <LaporanTerimaBatu />,
  },
  {
    path: "/laporan/admin-pusat/kirim-batu",
    title: "Laporan Kirim Batu",
    component: () => <LaporanKirimBatuPusat />,
  },
  {
    path: "/laporan/admin-pusat/kirim-tambahan",
    title: "Laporan Kirim Tambahan",
    component: () => <LaporanKirimTambahan />,
  },
  {
    path: "/laporan/admin-pusat/kirim-jo-admin",
    title: "Laporan Kirim JO Admin",
    component: () => <LaporanKirimJoAdmin />,
  },
  {
    path: "/laporan/admin-pusat/terima-jo-admin",
    title: "Laporan Terima JO Admin",
    component: () => <LaporanTerimaJoAdmin />,
  },
  {
    path: "/laporan/admin-pusat/kartu-jo",
    title: "Kartu Job Order",
    component: () => <LaporanKartuJo />,
  },
  {
    path: "/laporan/admin-pusat/outstand-admin",
    title: "Laporan Outstand Admin",
    component: () => <LaporanOutstandAdmin />,
  },
  {
    path: "/laporan/admin-pusat/saldo-bahan",
    title: "Laporan Saldo Bahan",
    component: () => <LaporanSaldoBahanPusat />,
  },
  {
    path: "/laporan/setor-abu/setor-abu-cor",
    title: "Laporan Setor Abu COR",
    component: () => <LaporanSetorAbuCOR />,
  },
  {
    path: "/laporan/setor-abu/setor-abu-potong",
    title: "Laporan Setor Abu Potong",
    component: () => <LaporanSetorAbuPotong />,
  },
  {
    path: "/laporan/setor-abu/setor-abu-tukang",
    title: "Laporan Setor Abu Tukang",
    component: () => <LaporanSetorAbuTukang />,
  },
  {
    path: "/laporan/lebur/kirim",
    title: "Laporan Kirim Lebur",
    component: () => <LaporanKirimLebur />,
  },
  {
    path: "/laporan/lebur/terima",
    title: "Laporan Terim Lebur",
    component: () => <LaporanTerimaLebur />,
  },
  {
    path: "/laporan/masak/kirim",
    title: "Laporan Kirim Masak",
    component: () => <LaporanKirimMasak />,
  },
  {
    path: "/laporan/masak/terima",
    title: "Laporan Terima Masak",
    component: () => <LaporanTerimaMasak />,
  },
  {
    path: "/laporan-produksi/terima",
    title: "Laporan Terima Produksi",
    component: () => <LaporanTerimaProduksi />,
  },
  {
    path: "/laporan-produksi/kirim",
    title: "Laporan Kirim Produksi",
    component: () => <LaporanKirimProduksi />,
  },
  {
    path: "/laporan-produksi/terima-tambahan",
    title: "Laporan Terima Tambahan Produksi",
    component: () => <LaporanTerimaTambahanProduksi />,
  },
  {
    path: "/laporan-produksi/terima-batu",
    title: "Laporan Terima Batu Produksi",
    component: () => <LaporanTerimaBatuProduksi />,
  },
  {
    path: "/laporan-produksi/outstand",
    title: "Laporan Outstand Produksi",
    component: () => <LaporanOutstandProduksi />,
  },
  {
    path: "/laporan-produksi/terima-gudang",
    title: "Laporan Terima Gudang Produksi",
    component: () => <LaporanTerimaGudangProduksi />,
  },
  {
    path: "/utility/master-user",
    title: "Master User",
    component: () => <MasterUser />,
  },
  {
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
