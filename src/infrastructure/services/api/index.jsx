import login from "./login";
import laporanStockGlobalProduksi from "./laporanstockglobalproduksi";
import kirimsaldotahun from "./kirimsaldotahun";
import stockadmin from "./stockadmin";
import saldobahan from "./saldobahan";
import kirimdesian from "./kirimdesian";
import kirimsaldodivisi from "./kirimsaldodivisi";
import dashboard from "./dashboard";
import masterjenis from "./masterjenis";
import MasterWarna from "./masterwarna";
import MasterJenisBahan from "./masterjenisbahan";

const api = {
  login,
  dashboard,
  masterjenis,
  MasterWarna,
  MasterJenisBahan,
  laporanStockGlobalProduksi,
  kirimsaldotahun,
  stockadmin,
  saldobahan,
  kirimdesian,
  kirimsaldodivisi,
};

export default api;
