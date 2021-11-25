import get from "../../../axios/get";
// import post from "../../../axios/post";
// import deleteAxios from "../../../axios/delete";
// import put from "../../../axios/put";
import word from "../../../shared/static";
const dashboard = {
  getAllDashboard: async () => {
    const response = await get({ url: word.URL_GET_JO_OUTSTAND_ALL });
    return response;
  },
  //   addDashboard: async (data) => {
  // 	const response = await post.AxiosPost(word.URL_ADD_DASHBOARD, data);
  // 	return response;
  //   },
  //   deleteDashboard: async (data) => {
  // 	const response = await deleteAxios.AxiosDelete(
  // 	  word.URL_DELETE_DASHBOARD + data
  // 	);
  // 	return response;
  //   },
  //   editDashboard: async (url, data) => {
  // 	const response = await put.AxiosPut(word.URL_UPDATE_DASHBOARD + url, data);
  // 	return response;
  //   },
};

export default dashboard;
