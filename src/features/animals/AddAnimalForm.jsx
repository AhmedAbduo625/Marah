import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import styled from "styled-components";
// import Select from "../../ui/Select";

const Select = styled.select`
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-primary-dark);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45),
      inset 0px 0 1.5px 1.5px rgba(102, 153, 248, 0.45);
  }
`;

const Checkbox = styled(Input).attrs({ type: "checkbox" })`
  height: 2.4rem;
  width: 2.4rem;
  outline-offset: 2px;
  transform-origin: 0;
  accent-color: var(--color-brand-600);
`;

const Box = styled.div`
  display: flex;
  gap: 3rem;
`;

const TYPE = [
  { value: "", label: "" },
  { value: "cow", label: "بقرة" },
  { value: "goat", label: "ماعز" },
];
const STATUS = [
  { value: "", label: "" },
  { value: "sick", label: "مريض" },
  { value: "lost", label: "مفقود" },
];

function AddAnimalForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  // const queryClient = useQueryClient();
  // const { isLoading: isCreating, mutate } = useMutation({
  //   mutationFn: createCabin,
  //   onSuccess: () => {
  //     toast.success("New cabin successfully created");
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Heading
        as="h3"
        style={{
          borderBottom: "1px solid var(--color-grey-600)",
        }}
      >
        المعلومات الاساسية
      </Heading>
      <FormRow label="الأسم" error={errors?.name?.message}>
        <Input
          id="name"
          //   disabled={isCreating}
          {...register("name", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="نوع الحيوان" error={errors?.type?.message}>
        <Select
          id="type"
          {...register("type", {
            required: "من فضلك حدد نوع الحيوان",
          })}
        >
          {TYPE.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow label="الجنس" error={errors?.gender?.message}>
        <Select
          id="gender"
          {...register("gender", {
            required: "من فضلك حدد الجنس",
          })}
        >
          <option value=""></option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </Select>
      </FormRow>
      <FormRow label="الرقم التعريفي" error={errors?.id?.message}>
        <Input
          id="id"
          {...register("id", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="الحاله" error={errors?.status?.message}>
        <Select
          id="status"
          {...register("status", {
            required: "هذمن فضلك حدد حالة الحيوان",
          })}
        >
          {STATUS.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormRow>
      <Heading
        as="h3"
        style={{ borderBottom: "1px solid var(--color-grey-600)" }}
      >
        الخصائص البدنية
      </Heading>
      <FormRow label="الخصي" error={errors?.neutered?.message}>
        <Checkbox
          id="neutered"
          {...register("neutered", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="اللون" error={errors?.color?.message}>
        <Input
          id="color"
          {...register("color", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="الوصف" error={errors?.description?.message}>
        <Textarea
          id="description"
          {...register("description", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <Heading
        as="h3"
        style={{ borderBottom: "1px solid var(--color-grey-600)" }}
      >
        معلومات الولادة
      </Heading>
      <FormRow label="ناريخ الولادة" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          {...register("date", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="الوزن عند الولاده" error={errors?.birthWeight?.message}>
        <Input
          id="birthWeight"
          {...register("birthWeight", {
            required: "هذا الحقل مطلوب",
          })}
          placeholder="KG"
        />
      </FormRow>
      <FormRow label="عمر الفطم" error={errors?.ageToWean?.message}>
        <Input
          id="ageToWean"
          {...register("ageToWean", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>
      <FormRow label="تاريخ الفطام " error={errors?.dateWean?.message}>
        <Input
          type="date"
          id="dateWean"
          {...register("dateWean", {
            required: "هذا الحقل مطلوب",
          })}
        />
      </FormRow>

      {/* <FormRow label="نوع الحيوان" error={errors?.type?.message}>
        <Select
          id="type"
          options={[
            { value: "", label: "" },
            { value: "cow", label: "بقرة" },
            { value: "goat", label: "ماعز" },
          ]}
          {...register("type,", {
            required: "this field is required",
            minLength: {
              value: 1,
              message: "Regular price should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="الجنس" error={errors?.gender?.message}>
        <Select
          id="gender"
          options={[
            { value: "male", label: "ذكر" },
            { value: "female", label: "انثى" },
          ]}
          {...register("type,", { required: "this field is required" })}
        />
      </FormRow> */}
      {/* <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          //   disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Regular price should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          //   disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "Discount should be less than the regular price",
          })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          //   disabled={isCreating}
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow> */}
      <Box>
        <Button variation="" type="reset">
          إلغاء
        </Button>
        <Button>إضافة</Button>
      </Box>
    </Form>
  );
}

export default AddAnimalForm;
