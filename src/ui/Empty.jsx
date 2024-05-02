import styled from "styled-components";

const StyledEmpty = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  padding: 3px 5px;
  outline: none;
  text-align: center;
`;

function Empty({ resourceName }) {
  return (
    <StyledEmpty>
      <p>No {resourceName} could be found.</p>
    </StyledEmpty>
  );
}

export default Empty;
