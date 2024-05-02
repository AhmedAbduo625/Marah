import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

const BOOKINGS = [
  {
    cabins: { name: "007" },
    created_at: "2024-04-25T14:01:07.71+00:00",
    endDate: "2024-06-21T00:00:00",
    guests: { email: "حيوان 1", fullName: "Nina Williams" },
    id: 598,
    numGuests: 7,
    numNights: 10,
    startDate: "2024-06-11T00:00:00",
    status: "تم بيعه",
    totalPrice: 6050,
  },
  {
    cabins: { name: "007" },
    created_at: "2024-04-25T14:01:07.71+00:00",
    endDate: "2024-06-21T00:00:00",
    guests: { email: "حيوان 2", fullName: "Nina Williams" },
    id: 598,
    numGuests: 7,
    numNights: 10,
    startDate: "2024-06-11T00:00:00",
    status: "تم بيعه",
    totalPrice: 6050,
  },
];
function BookingTable() {
  const { isLoading, bookings, count } = useBookings();
  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>الرقم التعريفي</div>
          <div>الاسم</div>
          <div>العمر</div>
          <div>الحالة</div>
          {/* <div></div>
          <div></div> */}
        </Table.Header>
        <Table.Body
          data={BOOKINGS}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        {/* <Table.Footer>
          <Pagination count={count} />
        </Table.Footer> */}
      </Table>
    </Menus>
  );
}

export default BookingTable;
