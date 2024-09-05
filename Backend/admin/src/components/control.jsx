import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import MainCard from "./mainCard.jsx";

function Control() {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 border m-auto flex flex-col justify-center align-middle"
      style={{ minHeight: "70%", width: "90%" }}
    >
      <div className="flex justify-evenly items-center mt-10 text-xl text-center">
        <Link
          to="/"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          View Email
        </Link>
        <Link
          to="/"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          Create New Project
        </Link>
      </div>
      <div className="flex justify-evenly items-center mt-10 text-xl text-center">
        <Link
          to="/Project"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          View Projects
        </Link>
        <Link
          to="/"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          Settings
        </Link>
      </div>
      <div className="flex justify-evenly items-center mt-10 text-xl text-center">
        <Link
          to="/"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          Investigator Page
        </Link>
        <Link
          to="/"
          className="bg-blue-200 p-4 rounded w-2/5 h-20 flex items-center justify-center hover:bg-blue-400 cursor-pointer"
        >
          Review Request
        </Link>
      </div>
    </div>
  );
}

export default Control;
