import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./i18n";
import { router } from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const logedIn = localStorage.getItem("logedIn");
    if (!logedIn) {
      router.navigate("/login");
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
