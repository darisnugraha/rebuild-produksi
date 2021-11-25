export const GET_ALL_DASHBOARD = "[dashboard] get all dashboard";
export const SET_DATA_DASHBOARD_SUCCESS = "[dashboard] get all dashboard success";
export const SET_DATA_DASHBOARD_FAILED = "[dashboard] get all dashboard failed";

export const getAllDashboard ={
	type : GET_ALL_DASHBOARD,
}
export const setDataDashboardSuccess =({feedback}) => ({
	type : SET_DATA_DASHBOARD_SUCCESS,
	payload : { data : feedback }
})
export const setDataDashboardFailed =({error}) => ({
	type : SET_DATA_DASHBOARD_FAILED,
	payload : { data : error }
})