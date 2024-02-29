import Header from '../../components/Header'
import Post from '../../components/Post'
import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <div className=" bg-slate-200 w-[100vw] h-full dark:bg-slate-900 flex flex-row justify-center select-none transition-colors duration-700 scroll-smooth">
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-10 flex flex-col items-center w-[500px]"
      >
        <Header />
        <Post />
      </motion.section>
    </div>
  )
}
