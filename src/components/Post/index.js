import { useEffect, useState } from 'react'

import Posts from '../Posts'
import { format } from 'date-fns'
import { Loader2 } from 'lucide-react'

import { useNavigate, Link } from 'react-router-dom'

const baseURL = 'https://www.tabnews.com.br/api/v1'
const endpoint = '/contents/GustAlves'

export default function Post() {
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(true)

  const [modal, setModal] = useState(false)
  const [detail, setDetail] = useState()

  useEffect(() => {
    ;(async () => {
      if (post.length == 0) {
        const response = await fetch(`${baseURL}${endpoint}`)
        const data = await response.json()

        setPost(data)
        setLoad(false)
      }
    })()
  }, [post])

  if (load) {
    return (
      <div className="w-[500px] h-full flex items-center justify-center">
        <Loader2 color="#fff" size={60} className="animate-spin" />
      </div>
    )
  }

  function toggleModal(post) {
    setModal(!modal)
    setDetail(post)
  }

  return (
    <>
      <div className="mt-5 mb-3 dark:text-slate-200 font-semibold text-slate-800  w-[350px] p-3 rounded-2xl text-center">
        <h2>Confira abaixo ✍️ </h2>
        {post.map(post => (
          <Link to={`/${post.slug}`} key={post.id}>
            <button
              onClick={() => toggleModal(post)}
              className="border dark:border-white/35 border-black/20 dark:text-slate-200 font-semibold text-slate-800 text-left p-4 mt-3 rounded-2xl"
              key={post.id}
            >
              <img className="rounded-lg mb-2" src={post.source_url} />
              <h2>{post.title}</h2>
              <div className="flex flex-row items-center justify-between m-2 text-xs opacity-80">
                <p>Escrito por: {post.owner_username}</p>
                <p>{format(post?.created_at, 'dd.MM.yyy')}</p>
              </div>
            </button>
          </Link>
        ))}
        {modal && (
          <Posts conteudo={detail} close={() => setModal(!modal)}></Posts>
        )}
      </div>
    </>
  )
}
