import axios from "axios";

const AxiosGet = async ({ url }) => {
  try {
    let percentComplete = 0;
    const config = {
      headers: {
        // "x-auth-token": localStorage.getItem("token"),
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
    return {
      value: null,
      error: error.response,
    };
  }
};

export default AxiosGet;
