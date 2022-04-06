import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import NewsPage from "./components/News/NewsPage";
// import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route element={<ProtectedRoute/>}>
              <Route path={process.env.PUBLIC_URL + '/profile'} element={<Home/>} />
            </Route> */}
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
    </>
  );
}
