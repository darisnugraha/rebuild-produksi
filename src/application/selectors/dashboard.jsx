const getAllDashboard = (state) => state.dashboard.feedbackOutstandJO;
const getErrorDashboard = (state) => state.dashboard.error;

const getAllAbuCastingOutstand = (state) =>
  state.dashboard.feedbackOutstandAbuCasting;
const getErrorAbuCastingOutstand = (state) =>
  state.dashboard.errorOutstandAbuCasting;

const getAllAbuPotongOutstand = (state) =>
  state.dashboard.feedbackOutstandAbuPotong;
const getErrorAbuPotongOutstand = (state) =>
  state.dashboard.errorOutstandAbuPotong;

const getAllAbuTukangOutstand = (state) =>
  state.dashboard.feedbackOutstandAbuTukang;
const getErrorAbuTukangOutstand = (state) =>
  state.dashboard.errorOutstandAbuTukang;

const getAllCastingOutstand = (state) =>
  state.dashboard.feedbackOutstandCasting;
const getErrorCastingOutstand = (state) =>
  state.dashboard.errorOutstandCasting;

const getAllBahanOutstand = (state) =>
  state.dashboard.feedbackOutstandBahan;
const getErrorBahanOutstand = (state) =>
  state.dashboard.errorOutstandBahan;

const data = {
  getAllDashboard,
  getErrorDashboard,
  getAllAbuCastingOutstand,
  getErrorAbuCastingOutstand,
  getAllAbuPotongOutstand,
  getErrorAbuPotongOutstand,
  getAllAbuTukangOutstand,
  getErrorAbuTukangOutstand,
  getAllCastingOutstand,
  getErrorCastingOutstand,
  getAllBahanOutstand,
  getErrorBahanOutstand
};
export default data;
