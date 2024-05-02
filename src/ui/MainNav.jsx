import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import Dropdown from "./Dropdown";
import { FaCow } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineUserAdd } from "react-icons/hi";

const Nav = styled.nav`
  width: 100%;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  ${(props) =>
    props.collapsed &&
    css`
      & span {
        transform: translateX(8rem);
        opacity: 0;
      }
    `}
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    width: 26rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.6rem 1rem;
    transition: all 1s ease;
    /* border-left: 1px solid var(--color-grey-100); */
  }

  & span {
    transition: all 1s ease-out;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    /* border-radius: var(--border-radius-sm); */
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 1s ease;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav({ collapsed }) {
  return (
    <Nav>
      <Dropdown>
        <Dropdown.Menu>
          <NavList collapsed={collapsed}>
            <li>
              <StyledNavLink to="/dashboard" collapsed={collapsed}>
                <HiOutlineHome />
                <span>الصفحة الرئيسية</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="animals">
                <FaCow />
                <span>الماشية</span>
                <Dropdown.Toggle id="animals" />
              </StyledNavLink>
              <Dropdown.List id="animals">
                <Dropdown.Button to="animals">الماشية</Dropdown.Button>
                <Dropdown.Button to="livestock-groups" end>
                  مجموعات الماشية
                </Dropdown.Button>
                <Dropdown.Button to="grazings">المراعي</Dropdown.Button>
              </Dropdown.List>
            </li>
            <li>
              <StyledNavLink to="/users" collapsed={collapsed}>
                <HiOutlineUserAdd />
                <span> مستخدم جديد</span>
              </StyledNavLink>
            </li>
          </NavList>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}

export default MainNav;
