import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 75rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 4rem;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 1.5rem;
  color: #444;

  &:focus {
    outline: none;
    box-shadow: 0px 1px 2px 2px rgba(42, 9, 230, 0.45),
      0px 0 2px 2px rgba(42, 9, 230, 0.45), 0px 0 2px 2px rgba(42, 9, 230, 0.45),
      0px 0 2px 2px rgba(42, 9, 230, 0.45);
  }

  &:focus {
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;

  /* border-radius: var(--border-radius-sm); */
  transition: all 0.2s;
  outline: none;
  transform: translateX(-4rem);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  &:hover,
  &:active {
    outline: none;
    border: none;
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-brand-600);
    outline: none;
  }
`;

function Search({ onClick }) {
  return (
    <StyledSearch>
      <Button onClick={onClick}>
        <HiSearch />
      </Button>
      <Input />
    </StyledSearch>
  );
}

export default Search;
