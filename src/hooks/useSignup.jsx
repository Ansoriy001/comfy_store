import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = async (displayName, email, password) => {
    setIsPending(true);
    history("/");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: user });
        setIsPending(false);
        setUser(user);
        setError(null);
        toast.success("Вы зарегистрировались успешно");
        
      })
      .catch((error) => {
        setError(error);
        const errorMessage = error.message;
        setError(errorMessage);
        setIsPending(false);
        toast.error("Этот электронный адрес уже используется");
      });
  };
  return { error, isPending, signup };
}

export default useSignup;
