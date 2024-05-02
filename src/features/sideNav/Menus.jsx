import { createContext, useContext, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import styled, { css } from "styled-components";

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledToggle = styled.button`
  margin-right: auto;

  background: none;
  border: none;
  transition: transform 0.5s ease-out;
  position: absolute;
  left: 0.5rem;
  ${(props) =>
    !props.showSidebar &&
    css`
      transform: translateX(4rem);
    `}

  &:focus {
    outline: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-light-1);
  color: var(--color-primary);
  padding: 2rem 0;

  ${(props) =>
    props.isOpen
      ? css`
          /* background-color: red; */
          &,
          & * {
            height: 0;
            width: 0;
            opacity: 0;
          }
        `
      : css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--color-grey-light-1);
          color: var(--color-primary);
          padding: 2rem 0;
        `}
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [clicked, setClicked] = useState(false);

  const open = setOpenId;
  const close = () => setOpenId("");
  const toggle = () => setClicked((clicked) => !clicked);

  return (
    <MenusContext.Provider value={{ openId, open, close, toggle, clicked }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, showSidebar }) {
  const { openId, open, close } = useContext(MenusContext);
  const isOpen = openId === id;
  function handleClick() {
    // openId === id && toggle();
    openId === id && close();
    openId !== id || openId === "" ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick} showSidebar={showSidebar}>
      {isOpen ? <HiChevronUp /> : <HiChevronDown />}
    </StyledToggle>
  );
}
function List({ children, id }) {
  const { openId } = useContext(MenusContext);
  const isOpen = openId === id;
  console.log(openId, isOpen, id);

  return <StyledList isOpen={isOpen}>{children}</StyledList>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
