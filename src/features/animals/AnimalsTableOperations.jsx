import styled from "styled-components";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Search from "../../ui/Search";
import Row from "../../ui/Row";

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

function AnimalsTableOperations() {
  return (
    <Row type="horizontal">
      <ButtonGroup>
        <Button as={Link} to="/animals/new">
          أضافة حيوان
        </Button>
        <Button variation="secondary">أضافة مجموعة</Button>
      </ButtonGroup>
      <Search />
    </Row>
  );
}

export default AnimalsTableOperations;
