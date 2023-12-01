import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./components/auth/LogIn";
import Feed from "./components/layout/Feed";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/browse" element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}
