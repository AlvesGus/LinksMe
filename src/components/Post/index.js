import { useContext, useState, useEffect } from 'react'
import { PostsContext } from '../../contexts/post' // Import the context itself
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import { Loader2 } from 'lucide-react'

export default function Post({ toggleModal }) {
  const { post = [] } = useContext(PostsContext)

  // Removed useMemo hook

  return (
    <div>
      {post.length > 0 ? (
        post.map(post => (
          <Link key={post.id} to={`/${post.slug}`}>
            <button
              key={post.id}
              className="border w-[350px]  flex items-center flex-col dark:border-white/35 border-black/20 dark:text-slate-200 font-semibold text-slate-800 text-left p-4 mt-10 rounded-2xl"
            >
              <img
                className="rounded-lg mb-2"
                src={post.source_url}
                alt={post.title}
              />
              <h2>{post.title}</h2>
              <div className="flex flex-row items-center justify-between m-2 text-xs opacity-80">
                <p>Escrito por: {post.owner_username}</p>
                <p>{format(post?.created_at, 'dd/MM/yyyy')}</p>
              </div>
            </button>
          </Link>
        ))
      ) : (
        <div className="w-[500px] flex items-center justify-center h-[100vh] bg-slate-200 dark:bg-slate-900 ">
          <Loader2
            size={60}
            className="animate-spin dark:text-slate-200 text-slate-800"
          />
        </div>
      )}
    </div>
  )
}
