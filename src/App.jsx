import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/AppRoute";

function App() {
  return (
    <div className="font-josefin">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
