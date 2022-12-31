import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
