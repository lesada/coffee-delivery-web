import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import Home from "@/pages/Home";

import { RoutesPaths } from "./paths";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<DefaultLayout />}>
          <Route path={RoutesPaths.HOME} element={<Home />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
