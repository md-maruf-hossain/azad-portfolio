import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Router/Routers";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <RouterProvider router={route} />
      <ScrollToTop/>
    </>
  );
}

export default App;
