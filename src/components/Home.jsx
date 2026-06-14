import { DownloadIcon } from "lucide-react";
import linkedin from "../assets/LinkedIn_icon.svg.png";
import github from "../assets/GitHub-Dark.svg"
import olá from "../assets/olá.png"
import whatsapp from "../assets/whatsapp_icon.webp"
import CV from "../assets/CV.pdf"
import foto from "../assets/foto.png"
import { FaWhatsapp } from "react-icons/fa";

function Home({ darkMode }) {

    const socialIcons = [
        { icon: linkedin, alt: 'Linkedin', href: "https://www.linkedin.com/in/jethro-sufra7/" },
        { icon: github, alt: 'GitHub', href: "https://github.com/Jjethro93" },
        { icon: whatsapp, alt: 'Whatsapp', href: "https://wa.me/5511975492704" }

    ]

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-orange-500
        hover:bg-orange-600`,
        decorativecircle: 'bg-orange-500 opacity-10'
    };


    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-orange-500
        hover:bg-orange-900 hover:text-white`,
        decorativecircle: 'bg-orange-400 opacity-20'
    };


    const theme = darkMode ? darkTheme : lightTheme;


    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>

            <section
                id="home"
                data-aos="fade-up"
                data-aos-delat="250"
                className="body-font z-10"

            >

                <div className="container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-14 flex-col lg:flex-row items-center justify-between
            lg:mt-14 mt-14"

                >
                    <div className="lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0">

                        <div className="flex justify-center lg:justify-start
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    data-aos-delay={`${400 + index * 100}`}
                                    className="transform hover:scale-100
                            transition-transform duration-300 "
                                >
                                    <img src={social.icon}
                                        alt={social.alt}
                                        className={`w-8 h-8 sm:w-10 sm:h-10
                                    object-contain ${darkMode
                                                ? '' :
                                                'filter brightness-75'
                                            }`}
                                    />

                                </a>
                            ))}

                        </div>

                        <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            Sou Jethro Sufra, <span className="text-orange-500">Desenvolverdor Front-End.</span>
                        </h1>

                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                        sm:max-w-lg ${theme.textSecondary}`}
                            data-aos="fade-up"
                            data-aos-delay="600" >
                            🚀 Apaixonado por criar interfaces modernas e responsivas minha missão é de transformar ☕ café em código e ideias em interfaces.
                            📈 Busco evoluir um pouco mais a cada commit.
                        </p>

                        {/*Button */}

                        <div className="w-full pt-4 sm:pt-6">

                            <div
                                className="flex flex-col sm:flex-row justify-center
                        lg:justify-start gap-3 sm:gap-4"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <a href={CV} download
                                    className="w-full sm:w-auto">

                                    <button
                                        className="w-full sm:w-auto
                                inline-flex items-center justify-center text-white
                                bg-linear-to-r from-orange-500 to-amber-500 border-0
                                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all
                                duration-300 transform whitespace-nowrap">

                                        <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                                        Baixar Meu CV
                                    </button>
                                </a>

                                <a href="https://wa.me/5511975492704" className="w-full sm:w-auto" >
                                    <button
                                        className={`w-full sm:w-auto
                                inline-flex items-center ${theme.buttonSecondary} 
                                justify-center  border-0
                                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all
                                duration-300 transform whitespace-nowrap`}
                                    >
                                        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Entre em contato

                                    </button>
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* Image */}

                    <div
                        className="lg:w-1/2 w-full max-w-md lg:max-wlg mt-8
                lg:mt-0 flex justify-center"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <div className="relative w-4/5 sm:w-3/4 lg:w-full mx-auto">

                            <div className="flex relative overflow-hidden justify-center">
                                <img src={foto}
                                    alt="foto Image"
                                    className="w-40 h-40 lg:w-60 lg:h-60 sm:w-50 sm:h-50 rounded-full object-cover transform
                            hover:scale-105 transition-transform durantio-500"
                                />
                            </div>
                            <img src={olá} alt="Hi icone"
                                className="absolute -top-4 sm:top-0 left-12
                        sm:left-2 w-14 h-14 sm:w-20 sm:h-20 object-contain
                        animate-bounce opacity-90 z-10"

                            />

                        </div>

                    </div>

                    <div className={`absolute -top-20 -left-20 w-40 h-40
                    sm:w-64 sm:h-64 ${theme.decorativecircle} rounded-full
                    mix-blend-multiply filter blur-3xl opacity-10
                    animate-pulse delay-1000 hidden sm:block`}>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home