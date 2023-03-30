import axios from "axios";
import Swal from "sweetalert2";

const AxiosPut = async (url, dataKirim) => {
  const token =
    JSON.parse(localStorage.getItem("userInfo"))?.access_token || "-";
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        language: "id-ID",
        "ngrok-skip-browser-warning": 1,
      },
      timeout: 4000,
    };
    const response = await axios.put(url, dataKirim, config);
    // const response = await axios.put(url, dataKirim);
    return { value: response.data, error: null };
  } catch (error) {
    if (error.response === undefined) {
      return {
        value: null,
        error: null,
      };
    } else {
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
  }
};

export default AxiosPut;
