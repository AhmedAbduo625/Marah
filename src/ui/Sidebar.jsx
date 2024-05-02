import styled, { css } from "styled-components";
import Logo from "./Logo-v1";
import MainNav from "./MainNav";
import ButtonIcon from "./ButtonIcon";
// import { HiMenu } from "react-icons/hi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Dashboard from "../features/sideNav/Dashboard";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  /* position: relative; */
  /* grid-row: 1/-1; */
`;

// const ButtonContainer = styled.div`
//   position: absolute;
//   top: 90%;
//   ${(props) =>
//     props.collapsed
//       ? css`
//           left: 15%;
//         `
//       : css`
//           left: 5%;
//         `}
// `;

function Sidebar() {
  return (
    <StyledSidebar>
      <Dashboard />
    </StyledSidebar>
  );
}
// function Sidebar({ collapsed, setCollapsed }) {
//   return (
//     <StyledSidebar collapsed={collapsed}>
//       <Logo collapsed={collapsed} />
//       <MainNav collapsed={collapsed} />

//       <ButtonContainer collapsed={collapsed}>
//         <ButtonIcon onClick={() => setCollapsed((collapsed) => !collapsed)}>
//           {!collapsed ? <HiArrowRight /> : <HiArrowLeft />}
//         </ButtonIcon>
//       </ButtonContainer>
//     </StyledSidebar>
//   );
// }

export default Sidebar;
