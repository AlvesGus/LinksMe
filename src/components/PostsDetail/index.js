import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import { format } from 'date-fns'
import Header from '../Header'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const baseURL = 'https://www.tabnews.com.br/api/v1/contents/GustAlves/'

export default function Posts() {
  const { slug } = useParams() // Access slug from URL
  const [detailedPost, setDetailedPost] = useState(null)
  const [contentVisible, setContentVisible] = useState(false)

  // Fetch detailed post data on component mount
  useEffect(() => {
    const fetchDetailedPost = async () => {
      const url = `${baseURL}${slug}` // Construct URL with slug
      const response = await fetch(url)
      const data = await response.json()

      setDetailedPost(data)
      setContentVisible(true) // Set content visible after data is fetched
    }

    fetchDetailedPost()
  }, [slug])

  return (
    <div className="w-full h-full bg-slate-200 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full pb-10 flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-900 pt-10 dark:text-slate-200 text-slate-800 select-none transition-colors duration-700 scroll-smooth leading-loose"
      >
        <Header />
        {contentVisible && detailedPost && (
          <div className="sm:w-[280px] cel:w-[350px] md:w-[650px] lg:w-[850px] xl:w-[1000px] space-y-10 mt-10">
            <Markdown className="text-3xl">{detailedPost.title}</Markdown>
            <div className="flex flex-row items-center justify-between text-xs opacity-80">
              <p>Escrito por: {detailedPost.owner_username}</p>
              <p>{format(detailedPost?.created_at, 'dd/MM/yyy')}</p>
            </div>
            <img
              className=""
              src={detailedPost.source_url}
              alt={detailedPost.title}
            />
            <Markdown>{detailedPost.body}</Markdown>
          </div>
        )}
        {!contentVisible && (
          <div className="w-full h-[100vh] bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <Loader2
              size={60}
              className="animate-spin dark:text-slate-200 text-slate-800"
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}
