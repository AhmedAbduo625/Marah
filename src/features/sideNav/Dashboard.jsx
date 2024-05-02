import * as Icons from "@ant-design/icons";
import { useState } from "react";
import { FaCow } from "react-icons/fa6";
import Logo from "../../ui/Logo";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import Menus from "./Menus";
import { HiLocationMarker } from "react-icons/hi";
import { GiHighGrass } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { BiSolidInjection } from "react-icons/bi";
import { PiHandSoap } from "react-icons/pi";
import { AiOutlineRise } from "react-icons/ai";

const Nav = styled.nav`
  height: 100vh;
  width: 4rem;
  transition: width 0.5s ease-out;
  position: relative;
  color: var(--color-white);
  background-color: var(--color-primary-dark);
  padding-top: 2rem;
  ${(props) =>
    props.showSidebar &&
    css`
      width: 26rem;
    `}
`;

const MenuButton = styled.button`
  top: 0.2rem;
  left: 0.2rem;
  position: absolute;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  & svg {
    fill: #fff;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  /* text-align: center; */
`;

const P = styled.p`
  margin-right: 1rem;
  font-weight: bold;
  transition: all 0.5s ease-out;
  text-wrap: nowrap;
  ${(props) =>
    !props.showSidebar &&
    css`
      transform: translateX(20rem);
    `};
`;

const LogoLink = styled(NavLink)`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }

  /* ${(props) =>
    !props.showSidebar
      ? css`
          transform: translateX(20rem);
        `
      : css`
          transform: translateX(0);
        `}; */
`;

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const showSidebarHandler = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <Nav showSidebar={showSidebar}>
      <MenuButton onClick={showSidebarHandler}>
        <Icons.MenuOutlined />
      </MenuButton>
      <LogoLink to="/" showSidebar={showSidebar}>
        <Logo showSidebar={showSidebar} />
      </LogoLink>
      <Menus>
        <Menus.Menu>
          <ListElement>
            <StyledNavLink to="dashboard">
              <HiHome />
              <P showSidebar={showSidebar}>الرئيسية</P>
            </StyledNavLink>
          </ListElement>
          <ListElement>
            <StyledNavLink to="farms">
              <HiLocationMarker />
              <P showSidebar={showSidebar}>المزارع</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="farms" />
          </ListElement>
          <ListElement>
            <StyledNavLink to="livestock">
              <FaCow />
              <P showSidebar={showSidebar}>الماشية</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="livestock" />
          </ListElement>
          {showSidebar && (
            <Menus.List id="livestock">
              <StyledNavLink to="animals">الماشيه</StyledNavLink>
              <StyledNavLink>مجموعات الماشيه</StyledNavLink>
              <StyledNavLink>المراعي</StyledNavLink>
            </Menus.List>
          )}

          <ListElement>
            <StyledNavLink>
              <GiHighGrass />
              <P showSidebar={showSidebar}>العلف</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="fodder" />
          </ListElement>
          <ListElement>
            <StyledNavLink>
              <IoIosAddCircle />
              <P showSidebar={showSidebar}>المكملات الغذائية</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="supplements" />
          </ListElement>
          <ListElement>
            <StyledNavLink>
              <BiSolidInjection />
              <P showSidebar={showSidebar}>التطعيمات</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="Vaccinations" />
          </ListElement>
          <ListElement>
            <StyledNavLink>
              <PiHandSoap />
              <P showSidebar={showSidebar}>العلاجات</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="medecin" />
          </ListElement>
          <ListElement>
            <StyledNavLink>
              <AiOutlineRise />
              <P showSidebar={showSidebar}>الإنتاج</P>
            </StyledNavLink>
            <Menus.Toggle showSidebar={showSidebar} id="production" />
          </ListElement>
        </Menus.Menu>
      </Menus>
      {/* <DashboardItem
        show={showSidebar}
        items={["home"]}
        type="Home"
        key={Math.random()}
      />
      <DashboardItem
        show={showSidebar}
        items={["products"]}
        type="Products"
        key={Math.random()}
      />

      <DashboardItem
        show={showSidebar}
        type="Patient"
        items={["patient1", "patient2", "patient3"]}
        key={Math.random()}
      />
      <DashboardItem
        show={showSidebar}
        type="Patient"
        items={["patient1", "patient2", "patient3"]}
        key={Math.random()}
      /> */}
    </Nav>
  );
}

export default Dashboard;
