import { RouterProvider } from "react-router-dom";
import { mainRouth } from "./routes/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouth} />
    </div>
  );
};

export default App;
