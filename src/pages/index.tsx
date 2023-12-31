import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import ParticlesContainer from '../components/ParticlesContainer'
// import ParticlesContainer from '../components/ParticlesContainer'
// import Avatar from '../components/Avatar'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black-30 to-black/10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
          h-full container mx-auto"
        >
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 mt-10">
            Transforming Ideas <br />
            Into
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-1 xl:mb-16"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            similique accusantium nemo autem. Veritatis obcaecati tenetur
          </motion.p>
          <div className="flex justify-center xl:hidden relative mt-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            className="hidden xl:flex"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
          w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        <ParticlesContainer />
        <motion.div
          transition={{ duration: 1, ease: 'easeInOut' }}
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-32
          lg:bottom-0 lg:right-[-5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
