import post from "../../../axios/post";
import word from "../../../shared/static";

const login = {
  doLogin: async (data) => {
    const response = await post.AxiosPostLogin(word.URL_LOGIN, data);
    return response;
  },
  authToken: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_CHECK_TOKEN,
      data: dataKirim,
    });
    return response;
  },
  LogoutDo: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_LOGOUT,
      data: dataKirim,
    });
    return response;
  },
};

export default login;
