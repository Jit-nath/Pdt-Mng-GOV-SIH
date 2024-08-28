function ProjectCard({ name, description, status }) {
    return (
        <div className="mb-4 p-4 border rounded-lg shadow-sm bg-purple-950 text-white">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{description}</p>
            <p className={`pt-1 pb-1 pr-2 pl-2 text-white rounded-full inline-block
                ${status === 'finished' ? 'bg-green-500' :
                    status === 'on going' ? 'bg-yellow-500' :
                        status === 'failed' ? 'bg-red-500' : 'bg-gray-500'
                }`}>
                {status}
            </p>
        </div>
    );
}

export default ProjectCard;
