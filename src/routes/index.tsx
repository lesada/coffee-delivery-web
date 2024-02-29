import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Success from "@/pages/Success";

import { RoutesPaths } from "./paths";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<DefaultLayout />}>
          <Route path={RoutesPaths.HOME} element={<Home />} />
          <Route path={RoutesPaths.CHECKOUT} element={<Checkout />} />
          <Route path={RoutesPaths.SUCCESS} element={<Success />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
