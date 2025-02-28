import login from "./login";
import dashboard from "./dashboard";
import masterjenis from "./masterjenis";
import MasterWarna from "./masterwarna";
import MasterJenisBahan from "./masterjenisbahan";
import MasterBatu from "./masterbatu";
import MasterCuttingBatu from "./mastercuttingbatu";
import MasterJenisBatu from "./masterjenisbatu";
import MasterKondisi from "./masterkondisi";
import MasterBahan from "./masterbahan";
import MasterMarketing from "./mastermarketing";
import MasterTukang from "./mastertukang";
import MasterCustomer from "./mastercustomer";
import MasterUkuran from "./masterukuran";
import MasterOriginal from "./masteroriginal";
import KirimBatuProduksi from "./kirimbatuproduksi";
import SaldoMurni from "./saldomurni";
import PembuatanJenisBahan from "./pembuatanjenisbahan";
import KirimBahanAdmin from "./kirim-bahan-admin";
import TerimaBahanTukang from "./terimabahantukang";
import KirimJO from "./kirimjo";
import TerimaBatu from "./terimabatu";
import TerimaTambahan from "./terimatambahan";
import TerimaBahan from "./terimabahan";
import KirimBahanAdminPusat from "./kirimbahanadminpusat";
import KirimTambahan from "./kirimtambahan";
import AbuTukangCOR from "./abutukangcor";
import AbuTukangPotong from "./abutukangpotong";
import AbuTukang from "./abutukang";
import KirimLebur from "./kirimlebur";
import TerimaLebur from "./terimalebur";
import KirimMasak from "./kirimmasak";
import TerimaMasak from "./terimamasak";
import TerimaTukangPotong from "./terimatukangpotong";
import TambahAmbilBatu from "./tambahambilbatu";
import TambahSaldoBahan from "./tambahsaldobahan";
import TerimaCOR from "./terimacor";
import TambahJobOrder from "./tambahjo";
import TerimaJO from "./terimajo";
import CloseJO from "./closejo";
import GabungJO from "./gabungjo";
import LaporanTambahAmbilSaldoBatu from "./laporantambahambilsaldobatu";
import LaporanKirimBatu from "./laporankirimbatu";
import LaporanSaldoBatu from "./laporansaldobatu";
import GroupBahan from "./groupbahan";
import LaporanSaldoBahan from "./laporansaldobahan";
import LaporanTambahSaldoBahan from "./laporantambahsaldobahan";
import LaporanPembuatanJenisBahan from "./laporanpembuatanjenisbahan";
import LaporanTerimaPotong from "./laporanterimapotong";
import LaporanTambahJobOrder from "./laporantambahjoborder";
import LaporanTerimaBatu from "./laporanterimabatu";
import LaporanKirimBatuPusat from "./laporankirimbatupusat";
import LaporanKirimTambahan from "./laporankirimtambahan";
import LaporanKirimJO from "./laporankirimjo";
import LaporanTerimaJO from "./laporanterimajo";
import KartuJobOrder from "./kartujo";
import LaporanOutstand from "./laporanoutstand";
import LaporanSaldoBahanPusat from "./laporansaldobahanpusat";
import LaporanSetorAbuCOR from "./laporansetorabucor";
import LaporanSetorAbuPotong from "./laporansetorabupotong";
import LaporanSetorAbuTukang from "./laporansetorabutukang";
import LaporanLebur from "./laporanlebur";
import LaporanMasak from "./laporanmasak";
import LaporanProduksi from "./laporanproduksi";
import KirimBatuPusat from "./kirimbatupusat";
import TerimaBatuProduksi from "./terimabatuproduksi";
import MasterUser from "./masteruser";
import MasterDivisi from "./masterdivisi";
import HakAkses from "./hakakses";
import MasterKelompokJenisBahan from "./masterkelompokjenisbahan";
import MasterBillOfMaterials from "./masterbillofmaterials";
import MasterStatus from "./masterstatus";
import BatalProsesJO from "./batalprosesjo";
import CetakBarcode from "./cetakbarcode";
import System from "./system";
import KirimJOCabang from "./kirimjocabang";
import TerimaJOCabang from "./terimajocabang";
import KirimBahanCabang from "./kirimbahancabang";
import TerimaBahanCabang from "./terimabahancabang";

const api = {
  login,
  dashboard,
  masterjenis,
  MasterWarna,
  MasterJenisBahan,
  MasterBatu,
  MasterCuttingBatu,
  MasterJenisBatu,
  MasterKondisi,
  MasterBahan,
  MasterMarketing,
  MasterTukang,
  MasterCustomer,
  MasterUkuran,
  MasterOriginal,
  KirimBatuProduksi,
  SaldoMurni,
  PembuatanJenisBahan,
  KirimBahanAdmin,
  TerimaBahanTukang,
  KirimJO,
  TerimaBatu,
  TerimaTambahan,
  TerimaBahan,
  KirimBahanAdminPusat,
  KirimTambahan,
  AbuTukangCOR,
  AbuTukangPotong,
  AbuTukang,
  KirimLebur,
  TerimaLebur,
  KirimMasak,
  TerimaMasak,
  TerimaTukangPotong,
  TambahAmbilBatu,
  TambahSaldoBahan,
  TerimaCOR,
  TambahJobOrder,
  TerimaJO,
  CloseJO,
  GabungJO,
  LaporanTambahAmbilSaldoBatu,
  LaporanKirimBatu,
  LaporanSaldoBatu,
  GroupBahan,
  LaporanSaldoBahan,
  LaporanTambahSaldoBahan,
  LaporanPembuatanJenisBahan,
  LaporanTerimaPotong,
  LaporanTambahJobOrder,
  LaporanTerimaBatu,
  LaporanKirimBatuPusat,
  LaporanKirimTambahan,
  LaporanKirimJO,
  LaporanTerimaJO,
  KartuJobOrder,
  LaporanOutstand,
  LaporanSaldoBahanPusat,
  LaporanSetorAbuCOR,
  LaporanSetorAbuPotong,
  LaporanSetorAbuTukang,
  LaporanLebur,
  LaporanMasak,
  LaporanProduksi,
  KirimBatuPusat,
  TerimaBatuProduksi,
  MasterUser,
  MasterDivisi,
  HakAkses,
  MasterKelompokJenisBahan,
  MasterBillOfMaterials,
  MasterStatus,
  BatalProsesJO,
  CetakBarcode,
  System,
  KirimJOCabang,
  TerimaJOCabang,
  KirimBahanCabang,
  TerimaBahanCabang,
};

export default api;
