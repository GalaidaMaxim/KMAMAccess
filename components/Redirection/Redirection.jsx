import { useToken, useStudent } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Redirection = ({ auth = false, children }) => {
  const token = useToken();
  const navigate = useNavigate();
  const student = useStudent();
  useEffect(() => {
    if (token && !student && auth) {
      navigate("/plan");
      return;
    }
    if (token && !student) {
      return;
    }
    if (!auth && !token) {
      navigate("/signin");
    }
    if (auth && token) {
      navigate("/plan");
    }
  }, [token, student, auth, navigate]);
  return <>{children}</>;
};
