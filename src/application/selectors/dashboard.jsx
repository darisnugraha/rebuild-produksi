const getAllDashboard= (state) => state.dashboard.feedback;
const getErrorDashboard= (state) => state.dashboard.error;
const getIsEditDashboard= (state) => state.dashboard.isEdit;
const data = { getAllDashboard, getErrorDashboard,getIsEditDashboard };
export default data;