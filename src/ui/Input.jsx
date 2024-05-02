import styled from "styled-components";
const Input = styled.input`
  /* border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm); */
  color: var(--color-grey-0);
  outline: transparent;
  border: transparent;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  &::placeholder {
    font-size: 1.6rem;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45);
  }
`;

export default Input;
