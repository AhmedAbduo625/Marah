import AddAnimalForm from "../features/animals/AddAnimalForm";
import Heading from "../ui/Heading";

function AddAnimal() {
  return (
    <>
      <Heading as="h1">حيوان جديد</Heading>
      <AddAnimalForm />
    </>
  );
}

export default AddAnimal;
