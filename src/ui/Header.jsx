import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  const StyledHeader = styled.header`
    /* background-color: var(--color-grey-0); */
    /* background-color: var(--color-primary-light);
    background-color: var(--color-primary-dark); */
    background-color: transparent;
    /* background-color: var(--color-primary); */
    padding: 1.2rem 4.8rem;
    /* border: 1px solid var(--color-grey-100); */
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1/-1;
  `;

  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
