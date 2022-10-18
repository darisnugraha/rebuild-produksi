import axios from "axios";

const AxiosGetAuth = async ({ url }) => {
  const token =
    JSON.parse(localStorage.getItem("userInfo"))?.access_token || "-";
  try {
    let percentComplete = 0;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        language: "id-ID",
      },
      onUploadProgress: (progressEvent) => {
        percentComplete = Math.floor(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
      timeout: 4000,
    };
    const response = await axios.get(url, config);
    // const response = await axios.get(url);
    return {
      value: response.data,
      error: null,
      percentCompleted: percentComplete,
    };
  } catch (error) {
    if (error.response === undefined) {
      return {
        value: null,
        error: null,
      };
    } else {
      return {
        value: null,
        error: error.response,
      };
    }
  }
};

export default AxiosGetAuth;
