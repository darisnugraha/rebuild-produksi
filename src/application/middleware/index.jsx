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

const midd = [
  ...ui,
  ...login,
  ...dashboard,
  ...masterjenis,
  ...masterwarna,
  ...masterjenisbahan,
  ...laporanstockglobalproduksi,
  ...kirimsaldotahun,
  ...stockadmin,
  ...saldobahan,
  ...kirimdesian,
  ...kirimsaldodivisi,
];

export default midd;
