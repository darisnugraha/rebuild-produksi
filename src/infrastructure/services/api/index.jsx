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
  laporanStockGlobalProduksi,
  kirimsaldotahun,
  stockadmin,
  saldobahan,
  kirimdesian,
  kirimsaldodivisi,
};

export default api;
