import { GiGoat } from "react-icons/gi";
import styled, { css } from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";
// import logo from "../assets/Marah.png";
// import logoDark from "../assets/Dark.png";
// import newLogo from "../assets/newLogo.png";
const StyledLogo = styled.div`
  text-align: center;
  height: 9.6rem;
  transition: all 1s ease;
  z-index: 5;

  ${(props) =>
    props.collapsed &&
    css`
      transform: translateX(8rem);
    `}
`;

const P = styled.p`
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
`;

// const Img = styled.img`
//   height: 100%;
//   width: auto;
//   transition: all 1s ease;
//   border-radius: 50%;
//   fill: red;
// `;
function Logo({ collapsed }) {
  // const { isDarkMode } = useDarkMode();
  // const src = isDarkMode ? "logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo collapsed={collapsed}>
      {/* <Img src={newLogo} alt="Logo" collapsed={collapsed} /> */}
      <Container>
        <GiGoat />
        <P>المراح</P>
      </Container>
    </StyledLogo>
  );
}

export default Logo;
