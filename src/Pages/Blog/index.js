import Header from '../../components/Header'
import { motion } from 'framer-motion'
import Post from '../../components/Post'
import PostsProvider from '../../contexts/post'

export default function Blog() {
  return (
    <PostsProvider>
      <div className="w-full h-full bg-slate-200 dark:bg-slate-900 flex flex-row justify-center select-none transition-colors duration-700 scroll-smooth">
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
    </PostsProvider>
  )
}
