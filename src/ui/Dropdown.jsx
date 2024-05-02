import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledToggle = styled.button`
  margin-right: auto;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

const StyledList = styled.ul`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-50);
    `}/* background-color: var(--color-grey-50); */
  /* background-color: red; */
`;

const StyledButton = styled(NavLink)`
  &:link,
  &:visited {
    width: 25rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.6rem 1rem;
    transition: all 1s ease;
    justify-content: center;
    border-radius: var(--border-radius-lg);

    /* border-left: 1px solid var(--color-grey-100); */
  }

  & span {
    transition: all 1s ease-out;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &.active {
    background-color: var(--color-grey-0);
  }

  /* &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
  } */
  /* border-radius: var(--border-radius-sm); */

  /* & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 1s ease;
  } */

  /* &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  } */
`;

const DropdownContext = createContext();
function Dropdown({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <DropdownContext.Provider value={{ openId, close, open }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open } = useContext(DropdownContext);
  function handleClick(e) {
    openId === "" || openId !== id ? open(id) : close();
  }
  const isOpen = openId === id;

  return (
    <StyledToggle onClick={handleClick}>
      {isOpen ? <HiArrowUp /> : <HiArrowDown />}
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId } = useContext(DropdownContext);
  const isOpen = openId === id;
  if (openId !== id) return null;
  return <StyledList active={isOpen}>{children}</StyledList>;
}

function Button({ children, to, end }) {
  return (
    <StyledButton to={to} end={end}>
      {children}
    </StyledButton>
  );
}

Dropdown.Menu = Menu;
Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Button = Button;

export default Dropdown;
