import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import styled from "styled-components";

// Email regex: /\S+@\S+\.\S+/

const ActionBox = styled.div`
  display: flex;
  gap: 3rem;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="إسم المستخدم" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "هذا الحقل مطلوب" })}
        />
      </FormRow>

      <FormRow label="البريد الإلكتروني" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "هذا الحقل مطلوب",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "من فضلك ادخل حساب الكتروني صحيح",
            },
          })}
        />
      </FormRow>

      <FormRow label="كلمة السر" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "هذا الحقل مطلوب",
            minLength: {
              value: 8,
              message: "ادخل كلمة مرور صحيحه",
            },
          })}
        />
      </FormRow>

      <FormRow label="تأكيد كلمة السر" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "هذا الحقل مطلوب",
            validate: (value) =>
              value === getValues().password || "الكلمة المرور غير مطابقة",
          })}
        />
      </FormRow>

      <ActionBox>
        {/* type is an HTML attribute! */}
        <Button
          type="reset"
          disabled={isLoading}
          onClick={reset}
          variation="secondary"
        >
          إلغاء
        </Button>
        <Button disabled={isLoading} variation="tertiary">
          إنشاء حساب جديد
        </Button>
      </ActionBox>
    </Form>
  );
}

export default SignupForm;
