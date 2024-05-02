import { GiBarn } from "react-icons/gi";
import styled, { css } from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";
// import logo from "../assets/Marah.png";
// import logoDark from "../assets/Dark.png";
// import newLogo from "../assets/newLogo.png";
const StyledLogo = styled.div`
  text-align: center;
  height: 9.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  ${(props) =>
    !props.showSidebar &&
    css`
      transform: translateX(20rem);
    `}

  & svg {
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--color-grey-light-1);
    border-radius: 50%;
    fill: var(--color-primary-light);
  }
`;

const Container = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--color-white);
  border: 3px solid var(--color-grey-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const P = styled.p`
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  color: #fff;
  letter-spacing: 2px;
  /* transform: rotateZ(25deg); */
`;

function Logo({ showSidebar }) {
  return (
    <StyledLogo showSidebar={showSidebar}>
      <Container>
        <GiBarn />
      </Container>
      <P>المراح</P>
    </StyledLogo>
  );
}

export default Logo;
