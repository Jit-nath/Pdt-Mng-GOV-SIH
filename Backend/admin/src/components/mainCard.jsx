import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 border m-auto"
      style={{ minHeight: "70%", width: "90%" }}
    >
      <IoIosArrowBack
        className="text-lg m-6 cursor-pointer"
        onClick={() => navigate(-1)}
      />

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
