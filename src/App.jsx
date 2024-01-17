import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SinglePage from "./Pages/SinglePage";
import Cart from "./Pages/Cart";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { auth } from "./firebase/firebaseConfig";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      // path: "",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />,
        </ProtectedRoutes>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/single",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_CHANGE" });
    });
  }, []);

  return (
    <div className="dark:bg-[#272935]">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
