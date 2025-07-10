import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="pb-24">
      <h2 className="py-20 text-center text-4xl lg:text-5xl uppercase tracking-wide">
        Projects
      </h2>

      <div className="lg:w-4/5 w-full flex flex-col justify-center mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row p-4 m-5 gap-20"
          >
            <div className="lg:w-1/4">
              <a 
              target="blank" 
              href={project.link}
              >
                <img
                  width={250}
                  height={250}
                  src={project.image}
                  alt="project_image"
                  className="border-2 border-stone-800 rounded-3xl"
                />
              </a>
              
            </div>

            <div className="lg:flex lg:flex-col lg:justify-evenly lg:w-3/4">
              <h1 className="font-bold  text-3xl mb-4">{project.title}</h1>
              <p className="text-stone-500  font-bold mb-4 w-full">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-stone-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
