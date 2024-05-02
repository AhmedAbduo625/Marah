import styled from "styled-components";
import HomeNavigation from "../features/Home/HomeNavigation";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import HomeHeader from "../features/Home/HomeHeader";
import About from "../features/Home/About";
import Features from "../features/Home/Features";
import Pricing from "../features/Home/Pricing";
import Subscribe from "../features/Home/Subscribe";
import Reviews from "../features/Home/Reviews";

const StyledHome = styled.div`
  /* height: 100vh; */
  background-position: bottom;
  position: relative;
  padding: 2rem;
  overflow: hidden;

  & section {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  font-size: 2rem;
  color: inherit;
  position: absolute;
  top: 5rem;
  right: 5rem;
  display: flex;
  align-items: center;
  z-index: 2;
`;

function Home() {
  return (
    <StyledHome>
      <StyledNavLink to="home">
        <Logo style={{ marginRight: "auto" }} />
      </StyledNavLink>
      <HomeNavigation />
      <HomeHeader />
      <About id="about" />
      <Features id="features" />
      <Pricing id="pricing" />
      <Reviews id="reviews" />
      <Subscribe id="subscribe" />
    </StyledHome>
  );
}

export default Home;
