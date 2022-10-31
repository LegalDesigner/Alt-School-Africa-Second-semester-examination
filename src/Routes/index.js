import { Routes, Route } from "react-router-dom";
import RepoDetails from "../component/RepoDetails";
import PageNotFound from "../component/NotFound";
import Initial from "../component/initial";




function index() {
  return (
    <Routes>
      <Route path="/" element={<Initial />} ></Route>
      <Route path="repo/:id" element={<RepoDetails />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}


export default index;
