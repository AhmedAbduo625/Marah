import styled from "styled-components";
import AnimalsTableOperations from "../features/animals/AnimalsTableOperations";
import Heading from "../ui/Heading";
import { HiOutlineTag } from "react-icons/hi";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BookingTable from "../features/bookings/BookingTable";

const Empty = styled.div`
  width: 100%;
  height: 30rem;
  border: 3px dashed var(--color-grey-600);
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

function Livestock() {
  const animals = [
    {
      id: "45",
    },
  ];
  return (
    <>
      <Heading as="h1">الماشية</Heading>
      <AnimalsTableOperations />
      {animals.length === 0 ? (
        <Empty>
          <HiOutlineTag />
          <h1>No animals yet?</h1>
          <p>Add new animal and they will show up here</p>
          <p style={{ marginTop: "3rem" }}>
            <strong>Need help getting started?</strong> check out this livestock
            getting started guide.
          </p>
        </Empty>
      ) : (
        <>
          <Row type="horizontal">
            <Heading as="h1">جميع الحيوانات</Heading>
            <BookingTableOperations />
          </Row>
          <BookingTable />
        </>
      )}
    </>
  );
}

export default Livestock;
