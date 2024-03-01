import { createContext, useState, useEffect } from 'react'

const PostsContext = createContext({ posts: [] })

export { PostsContext }

const baseURL = 'https://www.tabnews.com.br/api/v1'
const endpoint = '/contents/GustAlves'

export const PostsProvider = ({ children }) => {
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(true)
  const [modal, setModal] = useState(false)
  const [detail, setDetail] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      if (post.length === 0) {
        const response = await fetch(`${baseURL}${endpoint}`)
        const data = await response.json()

        setPost(data)
        setLoad(false)
      }
    }

    fetchPosts()
  }, [post])

  const value = { post, load, modal, detail }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

export default PostsProvider
