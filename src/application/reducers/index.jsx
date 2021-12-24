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
  form: formReducer,
});
