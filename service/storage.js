export const setTokenToLocalStorage = (token) => {
  window.localStorage.setItem("token", token);
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};
export const deleteToken = () => {
  window.localStorage.removeItem("token");
};
