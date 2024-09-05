import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCard from "./components/mainCard";
import Background from "./components/background";
import Wrapper from "./components/wrapperForDetailsAndReport";
import Control from "./components/control";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Control />,
  },
  {
    path: "/Project",
    element: <MainCard />,
  },

  {
    path: "/project/:projectId",
    element: <Wrapper />,
  },
]);

function App() {
  return (
    <div className="flex justify-center flex-col h-full">
      <Background />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
