import { Github, Linkedin, Code2 } from 'lucide-react'
import myPicture from '../../assets/me.jpg'
import Header from '../../components/Header'
import { motion } from 'framer-motion'

export default function App() {
  const redessociais = [
    {
      id: 1,
      nome: 'Visite meu Github',
      icone: <Github strokeWidth={2} className="size-8" />,
      link: 'https://github.com/AlvesGus'
    },
    {
      id: 2,
      nome: ' Últimos projetos',
      icone: <Code2 strokeWidth={2} className="size-8" />,
      link: ''
    },
    {
      id: 3,
      nome: 'Confira meu LinkedIn',
      icone: <Linkedin strokeWidth={2} className="size-8" />,
      link: 'https://www.linkedin.com/in/gustavo-alves-dos-santos-1263b72a8/'
    }
  ]

  return (
    <div className="w-screen h-screen bg-slate-200  dark:bg-slate-900 select-none ">
      <div
        className="w-[100vw] flex flex-row justify-center h-full 
       transition-colors duration-700"
      >
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="py-10 flex flex-col items-center sm:w-[280px] cel:w-[350px] md:w-[700px] lg:w-[850px] xl:w-[1000px] "
        >
          <Header />
          <img
            className="rounded-full sm:size-60 md:size-72 mt-10"
            src={myPicture}
            alt="My Picture"
          />
          <h2 className="dark:text-slate-200 text-slate-800 text-center md:text-xl mt-4 font-bold sm:w-[280px] cel:w-[320px] md:w-[650px] lg:w-[850px] xl:w-[1000px] ">
            Descubra todo meu conteúdo em um só lugar 🤙
          </h2>
          <div className="sm:space-y-3 md:space-y-10 sm:mt-6 md:mt-10 md:flex md:flex-col transition-colors duration-700">
            {redessociais.map(redessociais => (
              <div
                className="dark:text-slate-200 font-semibold text-slate-800 p-3 rounded-xl"
                key={redessociais.id}
              >
                <a
                  className="flex sm:gap-5 "
                  target="_blank"
                  rel="noreferrer noopener"
                  href={redessociais.link}
                >
                  <section className="flex items-center justify-start gap-5 sm:w-[250px] md:w-[350px] md:gap-12 p-3 border rounded-lg dark:text-slate-200 text-slate-800  dark:border-white/35 border-black/20 sm:text-lg md:text-xl ">
                    <div className="pl-3">{redessociais.icone}</div>{' '}
                    <div className="whitespace-nowrap">
                      <p>{redessociais.nome}</p>
                    </div>
                  </section>
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
