import axios from "axios";

axios.defaults.baseURL = "/api";

export const signIn = async ({ ticketCode, password }) => {
  const data = await axios.post("/users/auth", { login: ticketCode, password });
  return data.data;
};

export const getUser = async (token) => {
  const data = await axios.get("/users/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

export const logout = async (token) => {
  const data = await axios.patch(
    "/users/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};

export const getSubjectsByPlan = async (token) => {
  const data = await axios.get("/subjects/department", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

export const getEducationPlan = async (id) => {
  const data = await axios.get("/education-plan", {
    params: {
      id,
    },
  });
  return data.data;
};

export const saveSubjects = async (token = "", subjects = []) => {
  const data = await axios.patch(
    "/students/subjects",
    { subjects },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};

export const getAppState = async () => {
  const data = await axios.get("/state");
  return data.data;
};
