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

export const getStatments = async (token) => {
  const data = await axios.get("/statments", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
export const getStatmentByID = async (token, id) => {
  const data = await axios.get(`/statments/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

export const getAppState = async () => {
  const data = await axios.get("/state");
  return data.data;
};

export const updateStudentPyParams = async (token, id, params) => {
  const data = await axios.patch(
    "/student_subject",
    { id, subject: params },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
