const getLocal = (nama) => {
  try {
    return JSON.parse(localStorage.getItem(nama));
  } catch (error) {
    return localStorage.getItem(nama);
  }
};

export default getLocal;
