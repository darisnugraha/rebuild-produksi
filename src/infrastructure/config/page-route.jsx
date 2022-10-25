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
import MasterDivisi from "../../views/pages/utility/master-divisi";
import HakAksesPage from "../../views/pages/utility/hak-akses";
import MasterKelompokJenisBahan from "../../views/pages/master/master-kelompok-jenis-bahan";
import MasterBillOfMaterials from "../../views/pages/master/master-bill-of-materials";
import MasterStatus from "../../views/pages/master/master-status";
import BatalProsesJO from "../../views/pages/admin-pusat/batal-proses-job-order";
import LaporanSusutProduksi from "../../views/pages/laporan/laporan-produksi/laporan-susut-produksi";
import CetakBarcode from "../../views/pages/utility/cetak-barcode";
import getLocal from "../services/local/get-local";

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
    path: "/master/kelompok-jenis-bahan",
    title: "Master Kelompok Jenis Bahan",
    component: () => <MasterKelompokJenisBahan />,
  },
  {
    path: "/master/bill-of-materials",
    title: "Master Bill Of Materials",
    component: () => <MasterBillOfMaterials />,
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
  {
    path: "/master/status",
    title: "Master Status Job Order",
    component: () => <MasterStatus />,
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
    path: "/admin-pusat/batal-proses-jo",
    title: "Batal Proses Job Order",
    component: () => <BatalProsesJO />,
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
    path: "/laporan-produksi/susut",
    title: "Laporan Susut Produksi",
    component: () => <LaporanSusutProduksi />,
  },
  {
    path: "/utility/master-user",
    title: "Master User",
    component: () => <MasterUser />,
  },
  {
    path: "/utility/master-divisi",
    title: "Master Divisi",
    component: () => <MasterDivisi />,
  },
  {
    path: "/utility/hak-akses",
    title: "Hak Akses",
    component: () => <HakAksesPage />,
  },
  {
    path: "/utility/cetak-barcode",
    title: "Cetak Barcode",
    component: () => <CetakBarcode />,
  },
  {
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

const Divisi = getLocal("divisiAll");
Divisi.forEach((element) => {
  if (element.divisi === "ADMIN PUSAT" || element.divisi === "ADMIN BAHAN") {
    return false;
  } else {
    const rowTerimaBarang = {
      path: `/produksi/${element.divisi}/terima-barang`,
      title: `${element.divisi} Terima Barang`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <TerimaJO />,
    };
    routes.push(rowTerimaBarang);
    const rowKirimBarang = {
      path: `/produksi/${element.divisi}/kirim-barang`,
      title: `${element.divisi} Kirim Barang`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <KirimJO />,
    };
    routes.push(rowKirimBarang);
    const rowTerimaTambahan = {
      path: `/produksi/${element.divisi}/terima-tambahan`,
      title: `${element.divisi} Terima Tambahan`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <TerimaTambahan />,
    };
    routes.push(rowTerimaTambahan);
    const rowTerimaBatu = {
      path: `/produksi/${element.divisi}/terima-batu`,
      title: `${element.divisi} Terima Batu`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <TerimaBatuProduksi />,
    };
    routes.push(rowTerimaBatu);
    const rowTerimaBahan = {
      path: `/produksi/${element.divisi}/terima-bahan`,
      title: `${element.divisi} Terima Bahan`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <TerimaBahan />,
    };
    routes.push(rowTerimaBahan);
    const rowKirimBahan = {
      path: `/produksi/${element.divisi}/kirim-bahan`,
      title: `${element.divisi} Kirim Bahan`,
      menu: `${element.divisi}`,
      divisi: `${element.divisi}`,
      component: () => <KirimBahanProduksi />,
    };
    routes.push(rowKirimBahan);
  }
});

export default routes;
