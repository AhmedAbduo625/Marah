import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 100%;
  color: var(--color-white);

  transition: all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  ${(props) =>
    props.show
      ? css`
          transform: translateX(0);
          opacity: 1;
        `
      : css`
          transform: translateX(-150rem);
          opacity: 0;
        `}
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const ListElement = styled.li``;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    color: $color-white;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      var(--color-white) 50%
    );
    transition: all 0.4s;
    background-size: 270%;

    &:hover {
      background-position: 100%;
      transform: translateX(1rem);
      color: var(--color-primary);
    }
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  color: $color-white;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 300;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--color-white) 50%
  );
  transition: all 0.4s;
  background-size: 270%;
  border: none;
  background-color: transparent;
  &:hover {
    background-position: 100%;
    transform: translateX(1rem);
    color: var(--color-primary);
  }

  &:focus {
    outline: none;
  }
`;
const Background = styled.div`
  position: fixed;
  top: 6.5rem;
  left: 6.5rem;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-image: radial-gradient(
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  z-index: 10;
  transition: all 0.8s cubic-bezier(0.83, 0, 0.17, 1);
  ${(props) =>
    props.show &&
    css`
      transform: scale(80);
    `}
`;

const MenuButton = styled.button`
  position: fixed;
  top: 6rem;
  left: 6rem;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  border: none;
  background-color: var(--color-white);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`;

const Shape = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    height: 2px;
    width: 3rem;
    /* background-color: var(--color-black); */
    display: inline-block;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transform-origin: ceter;
    left: 0;
    transition: all 0.1s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    position: absolute;
    top: 0.8rem;
  }

  ${(props) =>
    props.show
      ? css`
          background-color: transparent;

          &::before,
          &::after {
            top: 0;
            background-color: black;
          }
          &::before {
            transform: rotate(135deg);
          }
          &::after {
            transform: rotate(-135deg);
          }
        `
      : css`
          &,
          &::before,
          &&::after {
            background-color: black;
          }
        `}
`;

function HomeNavigation() {
  const [show, setShow] = useState(false);
  function handleClick1() {
    setShow(false);
    // setTimeout(() => refs.about.scrollIntoView({ behavior: "smooth" }), 900);
    setTimeout(
      () =>
        document.getElementById("about").scrollIntoView({ behavior: "smooth" }),
      900
    );
  }
  function handleClick2() {
    setShow(false);
    setTimeout(
      () =>
        document
          .getElementById("features")
          .scrollIntoView({ behavior: "smooth" }),
      900
    );
  }
  function handleClick3() {
    setShow(false);
    setTimeout(
      () =>
        document
          .getElementById("pricing")
          .scrollIntoView({ behavior: "smooth" }),
      900
    );
  }
  function handleClick4() {
    setShow(false);
    setTimeout(
      () =>
        document
          .getElementById("reviews")
          .scrollIntoView({ behavior: "smooth" }),
      900
    );
  }
  function handleClick5() {
    setShow(false);
    setTimeout(
      () =>
        document
          .getElementById("subscribe")
          .scrollIntoView({ behavior: "smooth" }),
      900
    );
  }

  return (
    <>
      <MenuButton onClick={() => setShow((show) => !show)}>
        <Shape show={show} />
      </MenuButton>

      <Background show={show} />

      <Navigation show={show}>
        <List>
          <ListElement>
            <Button onClick={handleClick1}>عن المراح</Button>
          </ListElement>
          <ListElement>
            <Button onClick={handleClick2}>مميزات التطبيق</Button>
          </ListElement>
          <ListElement>
            <Button onClick={handleClick3}>قائمة الأسعار</Button>
          </ListElement>
          <ListElement>
            <Button onClick={handleClick4}>المراجعات</Button>
          </ListElement>
          <ListElement>
            <Button onClick={handleClick5}>التسجيل</Button>
          </ListElement>
          {/* <ListElement>
            <StyledNavLink>تواصل معنا</StyledNavLink>
          </ListElement>
          <ListElement>
            <StyledNavLink to="/login">تسجيل الدخول</StyledNavLink>
          </ListElement>
          <ListElement>
            <StyledNavLink to="/signup">تجربة مجانية</StyledNavLink>
          </ListElement> */}
        </List>
      </Navigation>
    </>
  );
}

export default HomeNavigation;
