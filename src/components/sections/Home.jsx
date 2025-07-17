import { RevealOnScroll } from "../RevealOnScroll";
import profilePhoto from "../../assets/portfolio-photo.png"; // Adjust path as needed

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center px-4 pt-18 md:pt-0"
        >
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-12">
                    
                    {/* Left: Photo - 1/3 width */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img 
                            src={profilePhoto} 
                            alt="Alvyn Shibu" 
                            className="rounded-2xl w-45 h-45 object-cover shadow-lg"
                        />
                    </div>

                    {/* Right: Text Content - 2/3 width */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left">

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                            Hi, I'm Alvyn Shibu
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                            I'm an MSc student in Artificial Intelligence at Queen's University, Belfast.
                            My goal is to build models that deliver a trifecta of exceptional performance, 
                            delightful user experience and rapid speed.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                            <a 
                                href="#projects" 
                                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                View Projects
                            </a>

                            <a 
                                href="#contact" 
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};
