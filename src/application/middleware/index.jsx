import ui from "./ui";
import login from "./login";
import laporanstockglobalproduksi from "./laporanstockglobalproduksi";
import kirimsaldotahun from "./kirimsaldotahun";
import stockadmin from "./stockadmin";
import saldobahan from "./saldobahan";
import kirimdesian from "./kirimdesian";
import kirimsaldodivisi from "./kirimsaldodivisi";
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

const midd = [
  ...ui,
  ...login,
  ...dashboard,
  ...masterjenis,
  ...masterwarna,
  ...masterjenisbahan,
  ...masterbatu,
  ...mastercuttingbatu,
  ...masterjenisbatu,
  ...masterkondisi,
  ...masterbahan,
  ...mastermarketing,
  ...mastertukang,
  ...mastercustomer,
  ...masterukuran,
  ...laporanstockglobalproduksi,
  ...kirimsaldotahun,
  ...stockadmin,
  ...saldobahan,
  ...kirimdesian,
  ...kirimsaldodivisi,
];

export default midd;
