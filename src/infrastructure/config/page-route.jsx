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

  //Laporan
  {
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
