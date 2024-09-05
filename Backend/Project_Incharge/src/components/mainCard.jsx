import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import SearchComponent from "./Search";
import ProjectCard from "./ProjectCard";

function MainCard() {
  // Mock project data
  const projects = [
    {
      id: "1",
      name: "Project 1",
      status: 1,
      deadline: "2024-12-31",
      creationDate: "2024-01-01",
    },
    {
      id: "2",
      name: "Project 2",
      status: 0,
      deadline: "2024-11-30",
      creationDate: "2024-02-01",
    },
    {
      id: "3",
      name: "Project 3",
      status: -1,
      deadline: "2024-10-31",
      creationDate: "2024-03-01",
    },
  ];

  return (
    <div
      className="bg-white shadow-xl rounded-lg p-8 border m-auto"
      style={{ minHeight: "80%", width: "95%" }}
    >
      <div className="flex justify-between items-center">
        <SearchComponent />
        <div className="flex gap-5 text-lg">
          <IoSettingsSharp className="cursor-pointer" />
          <LuLogOut className="cursor-pointer" />
        </div>
      </div>

      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectCard
            projectName={project.name}
            projectStatus={project.status}
            deadline={project.deadline}
            creationDate={project.creationDate}
          />
        </Link>
      ))}
    </div>
  );
}

export default MainCard;
