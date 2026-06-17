import HTML from '../assets/HTML.svg';
import CSS from '../assets/CSS.svg';
import Javascript from '../assets/JavaScript.svg';
import Typescript from '../assets/TypeScript.svg';
import React from '../assets/React.svg';
import Tailwind from '../assets/TailwindCSS.svg';
import Git from '../assets/git.svg';
import Vite from '../assets/Vite.svg';



function Skills({darkMode}) {

    const skills = [
        {name: 'HTML', icon: HTML, level: 90, color: 'from-orange-500 to-amber-500' },
        {name: 'CSS', icon: CSS, level: 90, color: 'from-blue-500 to-cyan-500' },
        {name: 'JavaScript', icon: Javascript, level: 70, color: 'from-yellow-500 to-orange-500' },
        {name: 'TypeScript', icon: Typescript, level: 60, color: 'from-blue-500 to-gray-500' },
        {name: 'React', icon: React, level: 75, color: 'from-cyan-500 to-blue-500' },
        {name: 'Tailwind CSS', icon: Tailwind, level: 70, color: 'from-teal-500 to-cyan-500' },
        {name: 'Git', icon: Git, level: 75, color: 'from-gray-500 to-cyan-500' },
        {name: 'Vite', icon: Vite, level: 70, color: 'from-red-500 to-orange-500' },
    ];

  return (
    <section id="skills"
    style={{
        backgrounColor:darkMode ? "#111827" : "#f9fafb"}}
    className="py-14 relative overflow-hidden"
    >
        <div className= " py-14 relative overflow-hidden">
            <div className=" container px-5 py-14 mx-auto">
                <div className="text-center mb-20"
                data-aos="fade-up"
                
                >
                 <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4"
                 style={{
                    color:darkMode ? "white" : "#1f2937"
                 }}
                 >
                    Minhas <span style={{
                        background:"linear-gradient(to right, #f97316, #f59e0b)",
                        WebkitBackgroundClip:"text",
                        backgroundClip:"text",
                        color:"transparent"
                    }}>
                        Habilidades
                    </span>
                 </h1>
                 <p clasName="text-lg max-w-2xl mx-auto leading-relaxed"
                 style={{
                    color:darkMode ? "#d1d5db" : "#4b5563"
                 }}
                 >
                    Tenho experiência com React, JavaScript, TypeScript, Tailwind CSS e integração com APIs, sempre focando em desempenho, usabilidade e boas práticas de desenvolvimento.
                 </p>

                </div>
                <div
                className="flex flex-wrap -m-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                    {skills.map((skill, index)=>(
                        <div key={index}
                        className="p-4 lg:w-1/4 sm:w-1/2 w-full"
                        data-aos="fade-up"
                        data-aos-delay={`${300 + index * 100}`}>
                            <div
                            style={{
                                background: darkMode
                                ? "linear-gradient(to bottom right, #1f2937, #111827)"
                                : "linear-gradient(to bottom right, #ffff, #f3f4f6)",
                                borderColor: darkMode ? "#374151" : "#e5e7eb"
                            }}
                            className="h-full p-6 rounded-2xl border hover:border-orange-500/50
                            transition-all durantion-300 hover:translate-y-2 
                            group hover:shadow-[0_0_30px_rgb(255, 165, 0,0,0.15)]"
                            >

                                <div className="flex items-center mb-6">
                                    <div 
                                     style={{
                                background: darkMode
                                ? "linear-gradient(to bottom right, #374151, #1f2937)"
                                : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                                
                            }}

                            className="w-16 h-16 rounded-xl p-3 flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <img src={skill.icon} alt={skill.name}
                                        className="w-full h-full object-contain"
                                        />

                                    </div>
                                    <h3
                                    className="text-xl font-bold ml-4"
                                    style={{
                                        color:darkMode ? "white" : "#1f2937"
                                    }}
                                    >{skill.name}
                                    </h3>
                                </div>

                                <div className="mb-2 flex items-center justify-between">
                                    <span className="font-medium"
                                    style={{
                                        color:darkMode ? "#d1d5db" : "#6b7280"
                                    }}
                                    >
                                       Proeficiencia 
                                    </span>
                                    <span
                                    style={{
                                        background:"linear-gradient(to right, #f97316, #f59e0b)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip:"text",
                                        color: "transparent"
                                    }}
                                    className="font-bold"
                                    >

                                        {skill.level} %

                                    </span>
                                </div>
                                
                                <div
                                className="w-full rounded-full h-3 overflow-hidden"
                                style={{
                                    background: darkMode ? "#374151" : "#e5e7eb"
                                }}
                                >
                                    <div
                                    className={`h-full rounded-full bg-linear-to-r
                                        ${skill.color} transition-all durantion-1000 ease-out`}
                                        style={{width:`${skill.level}%`}}
                                    >

                                    </div>
                                </div>
                                <div 
                                className={`mt-6 pt-4 border-t
                                ${darkMode ? "border-gray-700" : "border-gray-300"}`}>

                                    <div
                                    className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                                    style={{
                                        background:"linear-gradient(to right, #f97316, #f59e0b)"
                                    }}
                                    >

                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>

    </section>
  );
};  

export default Skills