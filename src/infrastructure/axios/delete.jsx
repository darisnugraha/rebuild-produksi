import axios from "axios";

const AxiosDelete = async (url, dataKirim) => {
  try {
    const config = {
      headers: {
        // 'x-auth-token': localStorage.getItem('token'),
        language: "id-ID",
      },
      timeout: 4000,
    };
    const response = await axios.delete(url, { data: dataKirim }, config);
    // const response = await axios.delete(url, data);
    return { value: response.data, error: null };
  } catch (error) {
    return { value: null, error: error.response };
  }
};

export default AxiosDelete;
