import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.main`
  background-color: var(--color-grey-700);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  grid-column: 2/3;
`;
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  flex-direction: column;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  position: relative;
  background-color: var(--color-grey-700);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
