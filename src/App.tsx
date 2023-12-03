import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";

import { ProtectedRoute } from "./utils/protected-routes/ProtectedRoute";
import AuthListenerComponent from "./components/auth/AuthListenerComponent";

const LogIn = lazy(() => import("./components/auth/LogIn"));
const Browse = lazy(() => import("./components/layout/Browse"));

export default function App(): JSX.Element {
  return (
    <Router>
      <RecoilRoot>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              backgroundColor: "#e50914",
              color: "white",
              fontWeight: "bold",
            },
          }}
        />
        <AuthListenerComponent />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route
              path="/browse"
              element={
                <ProtectedRoute>
                  <Browse />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </Router>
  );
}
