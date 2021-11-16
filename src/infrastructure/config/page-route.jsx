import React from "react";
// import { Redirect } from "react-router";

import Login from "../../views/pages/auth/login/login";
import Dashboard from "../../views/pages/dashboard/dashboard";
//laporan
import StockGlobalProduksi from "../../views/pages/laporan/stock-global-produksi";
import KirimSaldoTahunan from "../../views/pages/laporan/kirim-saldo-tahunan";
import SaldoBahan from "../../views/pages/laporan/saldo-bahan";
import StockAdmin from "../../views/pages/laporan/stock-admin";
import KirimDesian from "../../views/pages/laporan/kirim-desian";
import KirimSaldoDivisi from "../../views/pages/laporan/kirim-saldo-divisi";
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
  //Laporan
  {
    path: "/laporan/stock-global-produksi",
    title: "Laporan Stock Global Produksi",
    component: () => <StockGlobalProduksi />,
  },
  {
    path: "/laporan/kirim-saldo-tahunan",
    title: "Laporan Kirim dan Saldo per Tahun",
    component: () => <KirimSaldoTahunan />,
  },
  {
    path: "/laporan/saldo-bahan",
    title: "Laporan Saldo Bahan",
    component: () => <SaldoBahan />,
  },
  {
    path: "/laporan/stock-admin",
    title: "Laporan Stock Admin",
    component: () => <StockAdmin />,
  },
  {
    path: "/laporan/kirim-desian",
    title: "Laporan Kirim per Desian",
    component: () => <KirimDesian />,
  },
  {
    path: "/laporan/kirim-saldo-divisi",
    title: "Laporan Kirim dan Saldo per Divisi",
    component: () => <KirimSaldoDivisi />,
  },
  {
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
