import styled from "styled-components";
import bgImage from "../../assets/home.jpg";
import SignupForm from "../authentication/SignupForm";

const StyledSubscribe = styled.section`
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
`;

const SubscripeBox = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background-image: linear-gradient(
      105deg,
      transparent 0%,
      transparent 50%,
      var(--color-white-opacity) 50%
    ),
    url(${bgImage});
  background-size: cover;
`;

const SubscribeForm = styled.div`
  width: 50%;
  padding: 2rem;
`;

function Subscribe({ id }) {
  return (
    <StyledSubscribe id={id}>
      <SubscripeBox>
        <SubscribeForm>
          <SignupForm />
        </SubscribeForm>
      </SubscripeBox>
    </StyledSubscribe>
  );
}

export default Subscribe;
