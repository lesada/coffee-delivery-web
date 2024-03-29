import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

import { Container } from "./styles";

function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default DefaultLayout;
