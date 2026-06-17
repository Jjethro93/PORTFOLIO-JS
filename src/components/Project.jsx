import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import conversor from "../assets/ConversorMoeda.jpg";
import Landingpage from "../assets/Landing-page.jpg";
import Burguer from "../assets/DevBurguer.jpg";
import Bills from "../assets/Devbills.jpg";
import MarioP from "../assets/MarioPlumber.jpg";
import pratico from "../assets/Test-pratico.jpg";




function Project({ darkMode }) {

    const projects = [
        {
            id: 1,
            title: 'Conversor de Moeda',
            description: 'Aplicação web que realiza conversão de moedas em tempo real.',
            image: conversor,
            code: "https://github.com/Jjethro93/Conversor-de-moeda",
            demo: "https://jjethro93.github.io/Conversor-de-moeda/",
            tags: ['HTML', 'CSS', 'JS']
        },

        {
            id: 2,
            title: 'Mario Plumber',
            description: 'Landing page temática inspirada no universo Mario, com foco em design interatividade.',
            image: MarioP,
            code: "https://github.com/Jjethro93/JS_Mario_Encanador",
            demo: "https://jjethro93.github.io/JS_Mario_Encanador/",
            tags: ['HTML', 'CSS', 'JavaScript']
        },

        {
            id: 3,
            title: 'Landing Page',
            description: 'Página moderna e responsiva desenvolvida para apresentar serviços de um restaurante e melhorar a experiência do usuário.',
            image: Landingpage,
            code: "https://github.com/Jjethro93/Landingpage-restaurante",
            demo: "https://jjethro93.github.io/Landingpage-restaurante/",
            tags: ['HTML', 'CSS', 'JavaScript']
        },

        {
            id: 4,
            title: 'DevBurguer',
            description: 'Sistema de pedidos para hamburgueria com interface intuitiva, gerenciamento de produtos e carrinho de compras.',
            image: Burguer,
            code: "https://github.com/Jjethro93/dev-burger-interface",
            demo: "",
            tags: ['React', 'JavaScript', 'styled-components', 'Docker', 'Node.js']
        },

        {
            id: 5,
            title: 'DevBills',
            description: 'Aplicação de controle financeiro para gerenciamento de receitas, despesas e acompanhamento de transações.',
            image: Bills,
            code: "https://github.com/Jjethro93/DevBills",
            demo: "",
            tags: ['TypeScript', 'Tailwind', 'yarn', 'Node.js', 'mongoDB']
        },

        {
            id: 6,
            title: 'Test-Pratico',
            description: 'Aplicação desenvolvida como teste técnico para a eContact, com gerenciamento de conversas, filtros de pesquisa, arquivamento de mensagens, suporte multilíngue e interface responsiva.',
            image: pratico,
            code: "https://github.com/Jjethro93/Teste_Pratico-enContact",
            demo: "https://jjethro93.github.io/Teste_Pratico-enContact/",
            tags: ['TypeScript', 'Tailwind', 'React', 'i18n', 'API']
        },


    ]

    return (
        <section
            id="projects"
            style={{
                backgroundColor: darkMode ? "#111827" : "#f9fafb"
            }}
            className="relative py-24"
        >
            <div className=" container mx-auto px-4">
                <div className="text-center mb-10"
                    data-aos="fade-up"
                >
                    <h2
                        className="text-center sm:text-4xl font-bold mb-3"
                        style={{
                            color: darkMode ? "white" : "#1f2937"
                        }}
                    >


                        Meus  
                          <span
                            style={{
                                background: "linear-gradient(to right, #f97316, #f59e0b)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >  Projetos</span>
                    </h2>

                    <p className="max-w-xl mx-auto"
                        style={{
                            color: darkMode ? "#d1d5db" : "6b7280"
                        }}
                    >
                        Destaque de alguns dos meus projetos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {projects.map((project, index) => (
                        <div key={project.id}
                            style={{
                                background: darkMode
                                    ? "linear-gradient(to right, #1F2937, #111827)"
                                    : "linear-gradient(to right, #ffff, #fea2047b)",
                                borderColor: darkMode ? "#374151" : "#e5e7eb"
                            }}
                            className="group rounded-xl border hover:border-orange-500/50
                        transition-all"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="h-36 overflow-hidden rounded-t-xl">
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover
                                group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="p-4">
                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{
                                        color: darkMode ? "white" : "#1f2937"
                                    }}>
                                    {project.title}
                                </h3>
                                <p
                                    className="text-sm mb-3"
                                    style={{
                                        color: darkMode ? "#d1d5db" : "#6b7280"
                                    }}>
                                    {project.description}

                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                                                color: darkMode ? "#d1d5db" : "#4b5563"
                                            }}
                                            className="px-2 py-1 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div
                                    className="flex gap-2"
                                >
                                    <a href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                                            color: darkMode ? "white" : "#374151"
                                        }}
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                                    text-sm rounded-lg hover:opacity-90 transition-colors"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <FaGithubAlt className="text-sm" />
                                        <span>Code</span>

                                    </a>

                                    {/* DEMO */}
                                    <a href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            background: "linear-gradient(to right, #f97316, #f59e0b)",

                                        }}
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                                    text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        <span>Demo</span>

                                    </a>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">

                    <a href="https://github.com/Jjethro93"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "linear-gradient(to right, #f97316, #f59e0b)",

                        }}
                        className="inline-flex items-center font-semibold
                      gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <FaGithubAlt />
                        <span>Vers todos os projetos</span>
                        <FaExternalLinkAlt className="text-sm" />


                    </a>

                </div>
            </div>

        </section>
    )
}

export default Project