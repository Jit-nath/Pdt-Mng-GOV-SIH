import React from "react";

function ProjectCard({ projectName, projectStatus, creationDate, deadline }) {
  const statusColor =
    projectStatus === 1
      ? "bg-green-600"
      : projectStatus === 0
      ? "bg-yellow-400"
      : "bg-red-600";

  return (
    <div className="h-20 w-auto mt-5 p-3 pr-4 pl-4 border flex justify-between items-center bg-blue-300 rounded-lg cursor-pointer hover:bg-blue-500 transition-colors duration-300">
      <div className="flex justify-center align-middle gap-2">
        <h1 className="text-2xl font-medium">{projectName}</h1>
        <div className={`rounded-lg p-0.5 h-4 w-4 ${statusColor} m-auto`}></div>
      </div>

      <div className="flex flex-col gap-1 text-right">
        <div className="text-sm text-black ">Created on: {creationDate}</div>
        <div className="text-sm text-black ">Deadline: {deadline}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
