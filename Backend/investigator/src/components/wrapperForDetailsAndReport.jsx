import { useParams } from "react-router-dom";
import ReportSection from "./ReportSection";
import Details from "./Details";

function Wrapper() {
  const { projectId } = useParams();

  // Fetch or use projectId to get project details (mock data used here)
  const projectDetails = {
    1: { name: "Project 1", description: "Details for Project 1" },
    2: { name: "Project 2", description: "Details for Project 2" },
    3: { name: "Project 3", description: "Details for Project 3" },
  }[projectId] || {
    name: "Unknown Project",
    description: "No details available",
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg border m-auto flex"
      style={{ minHeight: "70%", width: "90%" }}
    >
      <div className="w-1/2">
        <Details projectName={projectDetails.name} />
      </div>
      <div className="w-1/2 border-l-2 border-solid border-gray-400">
        <ReportSection />
      </div>
    </div>
  );
}

export default Wrapper;
