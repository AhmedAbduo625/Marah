import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! please verify the new account from the user's email addess"
      );
      navigate("/");
    },
    onError: (err) => {
      console.error("ERR", err);
    },
  });

  return { isLoading, signup };
}
