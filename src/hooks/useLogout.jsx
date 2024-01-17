import { signOut } from "firebase/auth";
import { useState } from "react";
import {auth} from '../firebase/firebaseConfig'
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useLogout() {
  const { dispatch } = useGlobalContext();
  const [error, setError] = useState();
  const [isPending, setIsPending]= useState(false)

  const logout  = async () => {
    setIsPending(true)
     await signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        setIsPending(false)
        toast.error("You logout")
      })
      .catch(() => {
        setError("Something went wrong :(");
        setIsPending(false)
      });
  };

  return { isPending, logout };
}

export default useLogout;