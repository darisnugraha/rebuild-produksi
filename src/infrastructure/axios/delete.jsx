import axios from "axios";
import Swal from "sweetalert2";

const AxiosDelete = async (url) => {
  const token =
    JSON.parse(localStorage.getItem("userInfo"))?.access_token || "-";
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        language: "id-ID",
      },
      timeout: 4000,
    };
    const response = await axios.delete(url, config);
    // const response = await axios.delete(url, data);
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

export default AxiosDelete;
