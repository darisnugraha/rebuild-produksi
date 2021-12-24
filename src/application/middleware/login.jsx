import { message } from "antd";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import {
  CHECK_LOGIN,
  loginFailed,
  loginSuccess,
  SEND_LOGIN,
  setLoginState,
} from "../actions/login";
import { setLoading, setLoadingButton } from "../actions/ui";

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
        dispatch(setLoadingButton(false));
        dispatch(loginSuccess(response?.value));
        writeLocal("userInfo", response?.value);
        writeLocal("isLogin", true);
        message.success({ content: "Login Berhasil!", key, duration: 2 });
        window.history.pushState(null, "", "/dashboard");
        window.history.go(0);
      } else {
        dispatch(setLoadingButton(false));
        dispatch(loginFailed(response?.error));
        sweetalert.default.Failed("Coba Check Email Dan Passwordnya..");
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
      dispatch(setLoading(true));
      const data = getLocal("isLogin");
      dispatch(setLoginState(data ?? false));
      dispatch(setLoading(false));
    }
  };

const data = [handleLoginFlow, handleCheckLoginFlow];

export default data;
