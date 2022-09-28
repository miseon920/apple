import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Sub01 from "../pages/Sub01";
import Sub02 from "../pages/Sub02";
import Sub03 from "../pages/Sub03";
import Sub04 from "../pages/Sub04";
import Sub05 from "../pages/Sub05";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sub01" element={<Sub01 />} />
      <Route path="/sub02" element={<Sub02 />} />
      <Route path="/sub03" element={<Sub03 />} />
      <Route path="/sub04" element={<Sub04 />} />
      <Route path="/sub05" element={<Sub05 />} />
      {/* 페이지오류 : 404  */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
