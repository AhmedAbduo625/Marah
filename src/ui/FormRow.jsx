import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
const StyledFormRow = styled.div`
  /* display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  margin-top: 1rem;

  padding: 1.2rem 0; */
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Error = styled.span`
  font-size: 1.8rem;

  color: red;
`;
function FormRow({ label, error, children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error isDarkMode={isDarkMode}>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
