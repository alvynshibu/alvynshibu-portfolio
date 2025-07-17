import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languages = [
        "Python", 
        "Java",
        "Git",
    ];

    const frameworks = [
        "TensorFlow", 
        "Keras", 
        "Pytorch",  
        "Pandas",
        "scikit-learn",
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I am a postgraduate AI student developer with experience in building
                            ML models and creating innovative, user-focused solutions. My work combines 
                            a strong foundation in AI theory with practical problem-solving, aiming to 
                            create intelligent systems that are both effective and efficient.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages/Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span
                                            key = {key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span
                                            key = {key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">📝Experience/Achievements</h3>
                        <div className="space-y-4 text-gray-300">
                            
                            <div>
                                <h4 className="font-semibold">Part Time Service Assistant in NHS (2020-2025)</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Developed and maintained a clean and hygienic healthcare environment.</li>
                                    <li>Supported staff with administrative and basic clinical tasks.</li>
                                    <li>Demonstrated strong adherence to safety protocols.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold">Treasurer of Leicester Malayali Society (2020-2025)</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Managed society budget and financial records.</li>
                                    <li>Coordinated fundraising events and handled sponsorships.</li>
                                    <li>Ensured transparency and accountability in expenditures.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};