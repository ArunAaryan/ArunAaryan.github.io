const ProjectCard = ({ project }) => {
  return (
    <div className="bg-primary dark:bg-white bg-opacity-30  shadow-xl dark:bg-opacity-10  rounded-lg p-3 font-JosefinSans mb-3 self-stretch  hover:bg-primary hover:bg-opacity-70 dark:hover:bg-primary hover:transition duration-700">
      <a href={project.href}>
        <div className="flex justify-between dark:text-white  text-gray-800">
          <span className="  font-semibold text-2xl self-center">
            {project.title}
          </span>
          <span className="block border-black dark:border-white bg-opacity-90 dark:text-white border-2 text-sm rounded-full p-2">
            {project.duration}
          </span>
        </div>
        <div className="dark:text-white font-light">
          <span className="block">{project.languages}</span>
          <span>{project.info}</span>
        </div>
      </a>
    </div>
  );
};
export default ProjectCard;
