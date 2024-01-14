import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          /*exact*/ path={process.env.PUBLIC_URL + "/"}
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
