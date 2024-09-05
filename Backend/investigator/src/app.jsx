import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCard from "./components/mainCard";
import Background from "./components/background";
import Wrapper from "./components/wrapperForDetailsAndReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainCard />,
  },
  {
    path: "/project/:projectId",
    element: <Wrapper />,
  },
]);

function App() {
  return (
    <div className="flex flex-col h-full">
      <Background />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
