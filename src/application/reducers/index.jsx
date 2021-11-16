import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import ui from "./ui";
import laporanStockGlobalProduksi from "./laporanstockglobalproduksi";
import kirimsaldotahun from "./kirimsaldotahun";
import stockadmin from "./stockadmin";
import saldobahan from "./saldobahan";
import kirimdesian from "./kirimdesian";
import kirimsaldodivisi from "./kirimsaldodivisi";

export default combineReducers({
  login,
  ui,
  laporanStockGlobalProduksi,
  kirimsaldotahun,
  stockadmin,
  saldobahan,
  kirimdesian,
  kirimsaldodivisi,
  form: formReducer,
});
