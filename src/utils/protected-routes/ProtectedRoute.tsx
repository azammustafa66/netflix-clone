import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil-atoms/authState";

export const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { isLoggedIn } = useRecoilValue(authState);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
