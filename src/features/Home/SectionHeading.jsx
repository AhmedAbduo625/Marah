import styled from "styled-components";

const StyledSectionHeading = styled.h2`
  display: inline-block;
  font-weight: 700;
  color: transparent;
  margin-bottom: 5rem;

  background-image: linear-gradient(
    to right bottom,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 3.5rem;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    text-shadow: 0 1rem 2rem rgba($color-black, 0.2);
    /* transform: skew(15deg, 2deg) scale(1.1); */
    background-image: linear-gradient(
      to right bottom,
      var(--color-grey-0),
      var(--color-grey-700)
    );
    transform: scale(1.1);
  }
`;

function SectionHeading({ children }) {
  return <StyledSectionHeading>{children}</StyledSectionHeading>;
}

export default SectionHeading;
