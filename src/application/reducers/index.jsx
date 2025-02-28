import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import ui from "./ui";
import dashboard from "./dashboard";
import masterjenis from "./masterjenis";
import masterwarna from "./masterwarna";
import masterjenisbahan from "./masterjenisbahan";
import masterbatu from "./masterbatu";
import mastercuttingbatu from "./mastercuttingbatu";
import masterjenisbatu from "./masterjenisbatu";
import masterkondisi from "./masterkondisi";
import masterbahan from "./masterbahan";
import mastermarketing from "./mastermarketing";
import mastertukang from "./mastertukang";
import mastercustomer from "./mastercustomer";
import masterukuran from "./masterukuran";
import masteroriginal from "./masteroriginal";
import tambahambilbatu from "./tambahambilbatu";
import kirimbatuproduksi from "./kirimbatuproduksi";
import saldomurni from "./saldomurni";
import pembuatanjenisbahan from "./pembuatanjenisbahan";
import kirimbahanadmin from "./kirimbahanadmin";
import terimabahantukang from "./terimabahantukang";
import tambahjoborder from "./tambahjoborder";
import kirimjo from "./kirimjo";
import terimabatu from "./terimabatu";
import terimabahan from "./terimabahan";
import terimatambahan from "./terimatambahan";
import kirimbahanadminpusat from "./kirimbahanadminpusat";
import kirimtambahan from "./kirimtambahan";
import abutukangcor from "./abutukangcor";
import abutukangpotong from "./abutukangpotong";
import abutukang from "./abutukang";
import kirimlebur from "./kirimlebur";
import terimalebur from "./terimalebur";
import kirimmasak from "./kirimmasak";
import terimamasak from "./terimamasak";
import terimatukangpotong from "./terimatukangpotong";
import terimacor from "./terimacor";
import terimajo from "./terimajo";
import closejo from "./closejo";
import gabungjo from "./gabungjo";
import laporantambahambilsaldobatu from "./laporantambahambilsaldobatu";
import laporankirimbatu from "./laporankirimbatu";
import laporansaldobatu from "./laporansaldotukang";
import groupbahan from "./groupbahan";
import laporansaldobahan from "./laporansaldobahan";
import laporantambahsaldobahan from "./laporantambahsaldobahan";
import laporanpembuatanjenisbahan from "./laporanpembuatanjenisbahan";
import laporanterimapotong from "./laporanterimapotong";
import laporantambahjoborder from "./laporantambahjoborder";
import laporanterimabatu from "./laporanterimabatu";
import laporankirimbatupusat from "./laporankirimbatupusat";
import laporankirimtambahan from "./laporankirimtambahan";
import laporankirimjoadmin from "./laporankirimjoadmin";
import laporanterimajoadmin from "./laporanterimajoadmin";
import laporankartujoborder from "./laporankartujoborder";
import laporanoutstandadmin from "./laporanoutstandadmin";
import laporansaldobahanpusat from "./laporansaldobahanpusat";
import laporansetorabucor from "./laporansetorabucor";
import laporansetorabupotong from "./laporansetorabupotong";
import laporansetorabutukang from "./laporansetorabutukang";
import laporanlebur from "./laporanlebur";
import laporanmasak from "./laporanmasak";
import laporanproduksi from "./laporanproduksi";
import kirimbatupusat from "./kirimbatupusat";
import terimabatuproduksi from "./terimabatuproduksi";
import masteruser from "./masteruser";
import masterdivisi from "./masterdivisi";
import masterkelompokjenisbahan from "./masterkelompokjenisbahan";
import masterbillofmaterials from "./masterbillofmaterials";
import masterstatus from "./masterstatus";
import batalprosesjo from "./bataprosesjo";
import cetakbarcode from "./cetakbarcode";
import kirimjocabang from "./kirimjocabang";
import terimajocabang from "./terimajocabang";
import kirimbahancabang from "./kirimbahancabang";
import terimabahancabang from "./terimabahancabang";

export default combineReducers({
  login,
  ui,
  dashboard,
  masterjenis,
  masterwarna,
  masterjenisbahan,
  masterbatu,
  mastercuttingbatu,
  masterjenisbatu,
  masterkondisi,
  masterbahan,
  mastermarketing,
  mastertukang,
  mastercustomer,
  masterukuran,
  masteroriginal,
  tambahambilbatu,
  kirimbatuproduksi,
  saldomurni,
  pembuatanjenisbahan,
  kirimbahanadmin,
  terimabahantukang,
  tambahjoborder,
  kirimjo,
  terimabatu,
  terimabahan,
  terimatambahan,
  kirimbahanadminpusat,
  kirimtambahan,
  abutukangcor,
  abutukangpotong,
  abutukang,
  kirimlebur,
  terimalebur,
  kirimmasak,
  terimamasak,
  terimatukangpotong,
  terimacor,
  terimajo,
  closejo,
  gabungjo,
  laporantambahambilsaldobatu,
  laporankirimbatu,
  laporansaldobatu,
  groupbahan,
  laporansaldobahan,
  laporantambahsaldobahan,
  laporanpembuatanjenisbahan,
  laporanterimapotong,
  laporantambahjoborder,
  laporanterimabatu,
  laporankirimbatupusat,
  laporankirimtambahan,
  laporankirimjoadmin,
  laporanterimajoadmin,
  laporankartujoborder,
  laporanoutstandadmin,
  laporansaldobahanpusat,
  laporansetorabucor,
  laporansetorabupotong,
  laporansetorabutukang,
  laporanlebur,
  laporanmasak,
  laporanproduksi,
  kirimbatupusat,
  terimabatuproduksi,
  masteruser,
  masterdivisi,
  masterkelompokjenisbahan,
  masterbillofmaterials,
  masterstatus,
  batalprosesjo,
  cetakbarcode,
  kirimjocabang,
  terimajocabang,
  kirimbahancabang,
  terimabahancabang,
  form: formReducer,
});
