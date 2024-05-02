import styled from "styled-components";
import logo from "../../assets/header.jpg";
import LoginForm from "../authentication/LoginForm";
import Uploader from "../../data/Uploader";

const Header = styled.header`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      var(--color-primary-light-opacity),
      var(--color-primary-dark-opacity)
    ),
    url(${logo});
  background-position: bottom;
  background-size: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const PrimaryHeading = styled.h1`
  text-transform: uppercase;
  color: $color-white;
  margin-bottom: 6rem;
  backface-visibility: hidden;
  color: var(--color-white);
`;

const Main = styled.span`
  font-size: 8rem;
  display: block;
  animation: moveright 1s ease-out;
  font-weight: 400;

  @keyframes moveright {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Sub = styled.span`
  font-size: 3rem;
  display: block;
  animation: moveleft 1s ease-out;
  font-weight: 700;

  @keyframes moveleft {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      opacity: 1;
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Box = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeHeader() {
  return (
    <Header>
      <PrimaryHeading>
        <Main>المــــــــــراح</Main>
        <Sub>التطبيق الأفضل لإدارة مزرعتك</Sub>
      </PrimaryHeading>
      <Box>
        <LoginForm />
      </Box>
    </Header>
  );
}

export default HomeHeader;
