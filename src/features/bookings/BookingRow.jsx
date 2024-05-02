import styled from "styled-components";

import Table from "../../ui/Table";

import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Modal from "../../ui/Modal";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow() {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Modal>
        <Cabin>001</Cabin>

        <Stacked>
          <span>حيوان 1</span>
          <span>حيوان 1</span>
        </Stacked>

        <Stacked>
          <span>5 شهور</span>
        </Stacked>
        <Stacked>
          <span>تم بيعه</span>
        </Stacked>

        <Amount></Amount>
        {/* <Menus.Menu>
          <Menus.Toggle id={""} />
          <Menus.List id={""}>
            <Menus.Button icon={<HiEye />} onClick={() => navigate(`/`)}>
              See details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(``)}
              >
                Check in
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button icon={<HiArrowUpOnSquare />}>
                Check out
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete"></Modal.Window> */}
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
