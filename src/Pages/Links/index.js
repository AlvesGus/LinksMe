import { Github, Linkedin, Code2 } from 'lucide-react'
import myPicture from '../../assets/me.jpg'
import Header from '../../components/Header'
import { motion } from 'framer-motion'

export default function App() {
  const redessociais = [
    {
      id: 1,
      nome: 'Visite meu Github',
      icone: <Github strokeWidth={2} size={28} />,
      link: 'https://github.com/AlvesGus/'
    },
    {
      id: 2,
      nome: ' Últimos projetos',
      icone: <Code2 strokeWidth={2} size={28} />,
      link: ''
    },
    {
      id: 3,
      nome: 'Confira meu LinkedIn',
      icone: <Linkedin strokeWidth={2} size={28} />,
      link: 'https://www.linkedin.com/in/gustavo-alves-dos-santos-1263b72a8/'
    }
  ]

  return (
    <div className="bg-slate-200 dark:bg-slate-900 flex flex-row justify-center w-full h-[100vh]  select-none transition-colors duration-700">
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-10 flex flex-col items-center w-[500px]"
      >
        <Header />
        <img
          className="rounded-full size-60 mt-10"
          src={myPicture}
          alt="My Picture"
        />
        <h2 className="dark:text-slate-200 text-slate-800 text-center mt-4 w-[250px] font-bold ">
          Descubra todo meu conteúdo em um só lugar 🤙
        </h2>
        <div className="space-y-5 mt-9 transition-colors duration-700">
          {redessociais.map(redessociais => (
            <div
              className="border dark:border-white/35 border-black/20 dark:text-slate-200 font-semibold text-slate-800  w-[250px] p-3 rounded-2xl "
              key={redessociais.id}
            >
              <a
                className="flex gap-5"
                target="_blank"
                rel="noreferrer noopener"
                href={redessociais.link}
              >
                {redessociais.icone} <p>{redessociais.nome}</p>
              </a>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
