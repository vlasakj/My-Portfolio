import { BiLogoPostgresql } from "react-icons/bi"
import { FaBootstrap, FaNodeJs } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  })

const Technologies = () => {
  return (
    <motion.div className="pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y:0 }}
        initial = {{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial = {{ opacity: 0, x: -100 }}
             transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            {/* <div className="p-4">
                <TbBrandTypescript className="text-7xl text-sky-700" />
            </div> */}
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-4">
                <SiMongodb className="text-7xl text-cyan-500"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <FaBootstrap className="text-7xl text-pink-500"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Technologies
