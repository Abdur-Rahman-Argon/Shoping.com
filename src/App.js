import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
