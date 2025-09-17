import { useSelector } from "react-redux";

export const useToken = () => {
  return useSelector((state) => {
    if (state.user.value) {
      return state.user.value.token;
    }
  });
};

export const useUser = () => {
  return useSelector((state) => state.user.value);
};

export const useLoading = () => {
  return useSelector((state) => state.user.loading || state.loading.value);
};
