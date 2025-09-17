import { useSelector } from "react-redux";

export const useToken = () => {
  return useSelector((state) => {
    if (state.student.value) {
      return state.student.value.token;
    }
  });
};

export const useStudent = () => {
  return useSelector((state) => state.student.value);
};

export const useLoading = () => {
  return useSelector(
    (state) =>
      state.student.loading || state.loading.value || state.appState.loading
  );
};

export const useAppSatate = () => {
  return useSelector((state) => state.appState.value);
};
