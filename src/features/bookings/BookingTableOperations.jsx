import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      {/* <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      /> */}

      <SortBy
        options={[
          {
            value: "startDate-desc",
            label: "الفرز بواسطة العمر(من الاكبر الى الاصغر)",
          },
          {
            value: "startDate-desc",
            label: "الفرز بواسطة العمر(من الاصغر الى الاكبر)",
          },
          // { value: "startDate-asc", label: "الفرز بواسطة التطعيمات" },
          // {
          //   value: "totalPrice-desc",
          //   label: "",
          // },
          // { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
