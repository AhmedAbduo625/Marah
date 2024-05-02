import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">تحديث حسابك</Heading>

      <Row>
        <Heading as="h3">تحدبث بيانات المستخدم</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">تحديث الرقم السري</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
