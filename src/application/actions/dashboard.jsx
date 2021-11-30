//getJOOutstand
export const GET_ALL_DASHBOARD = "[dashboard] get all dashboard";
export const SET_DATA_DASHBOARD_SUCCESS = "[dashboard] get all dashboard success";
export const SET_DATA_DASHBOARD_FAILED = "[dashboard] get all dashboard failed";
//getAbuCastingOutstand
export const GET_ABU_CASTING_OUTSTAND = "[dashboard] get all abu casting outstand";
export const SET_DATA_ABU_CASTING_OUTSTAND_SUCCESS = "[dashboard] get all abu casting outstand success";
export const SET_DATA_ABU_CASTING_OUTSTAND_FAILED = "[dashboard] get all abu casting outstand failed";
//getAbuPotong
export const GET_ABU_POTONG_OUTSTAND = "[dashboard] get all abu potong outstand";
export const SET_DATA_ABU_POTONG_OUTSTAND_SUCCESS = "[dashboard] get all abu potong outstand success";
export const SET_DATA_ABU_POTONG_OUTSTAND_FAILED = "[dashboard] get all abu potong outstand failed";
//getAbuTukang
export const GET_ABU_TUKANG_OUTSTAND = "[dashboard] get all abu tukang outstand";
export const SET_DATA_ABU_TUKANG_OUTSTAND_SUCCESS = "[dashboard] get all abu tukang outstand success";
export const SET_DATA_ABU_TUKANG_OUTSTAND_FAILED = "[dashboard] get all abu tukang outstand failed";
//getCastingOutstand
export const GET_CASTING_OUTSTAND = "[dashboard] get all casting outstand";
export const SET_DATA_CASTING_OUTSTAND_SUCCESS = "[dashboard] get all casting outstand success";
export const SET_DATA_CASTING_OUTSTAND_FAILED = "[dashboard] get all casting outstand failed";
//getBahanOutstand
export const GET_BAHAN_OUTSTAND = "[dashboard] get all bahan outstand";
export const SET_DATA_BAHAN_OUTSTAND_SUCCESS = "[dashboard] get all bahan outstand success";
export const SET_DATA_BAHAN_OUTSTAND_FAILED = "[dashboard] get all bahan outstand failed";

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

export const getAllAbuCastingOutstand ={
	type : GET_ABU_CASTING_OUTSTAND,
}
export const setDataAbuCastingSuccess =({feedback}) => ({
	type : SET_DATA_ABU_CASTING_OUTSTAND_SUCCESS,
	payload : { data : feedback }
})
export const setDataAbuCastingFailed =({error}) => ({
	type : SET_DATA_ABU_CASTING_OUTSTAND_FAILED,
	payload : { data : error }
})

export const getAllAbuPotongOutstand ={
	type : GET_ABU_POTONG_OUTSTAND,
}
export const setDataAbuPotongSuccess =({feedback}) => ({
	type : SET_DATA_ABU_POTONG_OUTSTAND_SUCCESS,
	payload : { data : feedback }
})
export const setDataAbuPotongFailed =({error}) => ({
	type : SET_DATA_ABU_POTONG_OUTSTAND_FAILED,
	payload : { data : error }
})

export const getAllAbuTukangOutstand ={
	type : GET_ABU_TUKANG_OUTSTAND,
}
export const setDataAbuTukangSuccess =({feedback}) => ({
	type : SET_DATA_ABU_TUKANG_OUTSTAND_SUCCESS,
	payload : { data : feedback }
})
export const setDataAbuTukangFailed =({error}) => ({
	type : SET_DATA_ABU_TUKANG_OUTSTAND_FAILED,
	payload : { data : error }
})

export const getAllCastingOutstand ={
	type : GET_CASTING_OUTSTAND,
}
export const setDataCastingSuccess =({feedback}) => ({
	type : SET_DATA_CASTING_OUTSTAND_SUCCESS,
	payload : { data : feedback }
})
export const setDataCastingFailed =({error}) => ({
	type : SET_DATA_CASTING_OUTSTAND_FAILED,
	payload : { data : error }
})

export const getAllBahanOutstand ={
	type : GET_BAHAN_OUTSTAND,
}
export const setDataBahanSuccess =({feedback}) => ({
	type : SET_DATA_BAHAN_OUTSTAND_SUCCESS,
	payload : { data : feedback }
})
export const setDataBahanFailed =({error}) => ({
	type : SET_DATA_BAHAN_OUTSTAND_FAILED,
	payload : { data : error }
})