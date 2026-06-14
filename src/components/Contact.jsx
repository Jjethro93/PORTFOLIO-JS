import { useState } from "react";
import contactImage from "../assets/contact.png"

const Contact = ({ darkMode }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `
Nome: ${formData.name}
Email: ${formData.email}
Mensagem:${formData.message}
`;

        const phone = "5511975492704";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    };


    return (
        <section
            id="contact"
            style={{
                backgrounColor: darkMode ? "#111827" : "#f9fafb"
            }}
            className="py-12 sm:py-15 md:py-20 lg:py-24 overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold
                mb-2 sm:mb-3"
                        style={{
                            color: darkMode ? "white" : "#1f2937"
                        }}>
                        Entre  <span
                            style={{
                                background: "linear-gradient(to right, #f97316, #f59e0b)",
                                WebkitBackgroundClip: "text",
                                BackgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            em contato

                        </span>

                    </h2>
                    <p
                        className="text-base sm::text-lg md:text-xl"
                        style={{
                            color: darkMode ? "#d1d5db" : "#6b7280"
                        }}>

                    </p>
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <div
                            className="flex justify-center order-2 lg:order-1"
                            data-aos="fade-right">
                            <img src={contactImage} alt="contact"
                                className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-full
                        h-auto object-contain"/>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                background: darkMode ?
                                    "linear-gradient(to right, #1f2937, #111827)" :
                                    "linear-gradient(to right, #ffffff, #f9fafb)",
                                borderColor: darkMode ? "#374151" : "#e5e7eb",
                            }}
                            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                    shadow-lg order-1 lg:order-2"
                            data-aos="fade-left"
                        >

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nome"
                                style={{
                                    backgroundColor: darkMode ?
                                        "#374151" : "#faede3",
                                    borderColor: darkMode ?
                                        "#4b5563" : "#d1d5db",
                                    color: darkMode ?
                                        "white" : "#1f2937"
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
                                required />

                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                style={{
                                    backgroundColor: darkMode ?
                                        "#374151" : "#faede3",
                                    borderColor: darkMode ?
                                        "#4b5563" : "#d1d5db",
                                    color: darkMode ?
                                        "white" : "#1f2937"
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
                                required />

                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mensagem"
                                style={{
                                    backgroundColor: darkMode ?
                                        "#374151" : "#faede3",
                                    borderColor: darkMode ?
                                        "#4b5563" : "#d1d5db",
                                    color: darkMode ?
                                        "white" : "#1f2937"
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500 focus:ring-2
                            focus:ring-orange-500/20 transition-all mb-3 sm:mb-6 resize-none"
                                required />

                            <button
                                type="submit"

                                style={{
                                    background: "linear-gradient(to right, #f97316, #f59e0b)",
                                }}
                                className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base
                            hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all"
                            >
                                Enviar mensagem
                            </button>

                        </form>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact