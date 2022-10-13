import axios from "axios";
import Swal from "sweetalert2";

const AxiosGet = async ({ url }) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).access_token;
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
    if (error.response.data.statusCode === 401) {
      Swal.fire({
        title: "Ops..",
        text: "Session Anda Habis Silahkan Login Kembali !",
        icon: "error",
      }).then(() => {
        localStorage.clear();
      });
    } else {
      return {
        value: null,
        error: error.response,
      };
    }
  }
};

export default AxiosGet;
