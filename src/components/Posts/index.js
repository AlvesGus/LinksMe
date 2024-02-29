import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Header from '../Header'

const baseURL = 'https://www.tabnews.com.br/api/v1/contents/GustAlves'

export default function Posts({ conteudo, close }) {
  const [slug, setSlug] = useState()

  useEffect(() => {
    ;(async () => {
      const response = await fetch(`${baseURL}/${conteudo.slug}`)
      const data = await response.json()

      setSlug(data)
      console.log(data)
    })()
  }, [])

  return (
    <div>
      <div className="z-10 fixed top-0 pl-2 pt-24 bg-slate-900 w-[400px] h-full flex border dark:border-white/35 border-black/20 dark:text-slate-200 font-semibold text-slate-800">
        <button onClick={close} className="flex gap-16 cursor-pointer">
          <X className="border size-7 rounded-md dark:border-white/35 border-black/20 dark:text-slate-200 font-semibold text-slate-800" />
          <h2>{conteudo.title}</h2>
        </button>
      </div>
    </div>
  )
}
