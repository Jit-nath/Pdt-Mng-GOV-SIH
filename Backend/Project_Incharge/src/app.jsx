import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCard from "./components/mainCard";
import Background from "./components/background";
import ReportSection from "./components/ReportSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainCard />,
  },
  {
    path: "/project/:projectId",
    element: <ReportSection />,
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
