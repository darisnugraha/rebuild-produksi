import { message } from "antd";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import {
  CHECK_LOGIN,
  doLogout,
  loginFailed,
  loginSuccess,
  LOGOUT,
  SEND_LOGIN,
  GET_SYSTEM,
} from "../actions/login";
import { getAllMasterDivisi } from "../actions/masterdivisi.jsx";
import { setLoadingButton } from "../actions/ui";

/**
({api}) ADALAH PARAMETER YANG DIDAPAT DARI FOLDER INFRASTRUCTURE -> SERVICES -> API 
{ DISINI JUGA BISA MEMANGGIL FOLDER YANG LAIN, SEPERTI LOGGER,
   DLL ASALKAN SUDAH TERDAFTAR DI INDEX SERVICE}
   
 */

const key = "updatable";

const handleLoginFlow =
  ({ api, writeLocal }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SEND_LOGIN) {
      dispatch(setLoadingButton(true));
      const data = getState().form.LoginForm.values;
      const response = await api.login.doLogin(data);

      if (response?.value !== null) {
        api.HakAkses.getHakAkses(response.value.user_id).then((res) => {
          if (res.value !== null) {
            writeLocal("hakAksesMenu", res.value);
          } else {
            writeLocal("hakAksesMenu", []);
          }
          const dataKirim = {
            divisi: "ADMIN BAHAN",
          };
          api.login.createDivisi(dataKirim).then(() => {
            dispatch(setLoadingButton(false));
            dispatch(loginSuccess(response?.value));
            writeLocal("userInfo", response?.value);
            writeLocal("isLogin", true);
            message.success({
              content: "Login Berhasil!",
              key,
              duration: 2,
            });
            dispatch(getAllMasterDivisi);
            window.history.pushState(null, "", "/dashboard");
            window.history.go(0);
          });
        });
      } else {
        dispatch(setLoadingButton(false));
        dispatch(loginFailed(response?.error));
        sweetalert.default.Failed(
          response?.error?.data?.message || "Coba Check Email Dan Passwordnya.."
        );
      }
    }
  };
const handleCheckLoginFlow =
  ({ api, writeLocal, getLocal }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === CHECK_LOGIN) {
      const dataUser = action.payload.data;
      api.login.authToken(dataUser).then((res) => {
        if (res.value !== null) {
          const dataUserInfo = getLocal("userInfo");
          dataUserInfo.access_token = res.value.access_token;
        } else {
          sweetalert.default.Failed(
            res?.error?.data?.message || "Token Tidak Valid !"
          );
          dispatch(doLogout(dataUser));
        }
      });
    }
    if (action.type === GET_SYSTEM) {
      api.System.getSystem().then((res) => {
        writeLocal("tp_system", res.value[0]);
      });
    }
  };

const handleLogout =
  ({ api, writeLocal, getLocal }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOGOUT) {
      const data = action.payload.data;
      const dataKirim = {
        user_id: data.user_id,
        refresh_token: data.refresh_token,
      };
      api.login.LogoutDo(dataKirim).then((res) => {
        if (res.value !== null) {
          window.history.pushState(null, "", "/");
          window.history.go(0);
          localStorage.clear();
        } else {
          sweetalert.default.Failed("User Telah Logout !");
          window.history.pushState(null, "", "/");
          window.history.go(0);
          localStorage.clear();
        }
      });
    }
  };

const data = [handleLoginFlow, handleCheckLoginFlow, handleLogout];

export default data;
