import { PROJECTS } from "../constants/index.js"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="pb-4">
        <motion.h2
            whileInView={{ opactity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition= {{ duration: 0.5 }}
            className="my-20 text-center text-4xl">Projects
        </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className=" mb-8 flex flex-wrap
            lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 1}}
                className="w-full lg:w-1/4">
                  <a href={project.url} target="_blank"> <img src={project.image}
                        width={250}
                        height={250}
                        alt={project.title}
                        className="mb-6 p-3 rounded" />
                  </a>
                </motion.div> 
                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100}}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                <a className="mb-2 font-semibold text-2xl text-stone-400"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer">{project.title}</a>
                <p className="mb-4 text-stone-400">{project.description}</p>
                
                {project.technologies.map((tech, index) => (
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                        {tech}
                    </span>
                ))}
                </motion.div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
