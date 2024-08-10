import Image from "next/image";

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            {/* Introduction Section */}
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2">
                    <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center">
                        <h1 className="text-black mb-5 text-2xl leading-tight md:text-4xl md:mb-10">
                            Welcome, I'm Italo Rojas
                        </h1>
                        <h1 className="text-black text-3xl font-bold">
                            Engineer working with art and data
                        </h1>
                        <div className="flex items-center justify-center gap-3 md:gap-10 mt-5">
                            <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Experiencia
                            </a>
                            <a href="/contact" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacto
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/fondo1.avif" priority width="400" height="400" alt="Avatar" />
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="w-full py-20 text-center">
                <h2 className="text-black text-4xl font-bold">Projects</h2>
                <div className="w-20 h-1 mx-auto my-4 bg-secondary"></div>
                <div className="flex justify-center gap-5 mt-10">
                    <div className="flex flex-col items-center">
                        <Image src="/image-1.jpg" width={350} height={600} alt="Project 1" />
                        <h3 className="mt-2 text-2xl">Project 1</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/image-2.jpg" width={350} height={600} alt="Project 2" />
                        <h3 className="mt-2 text-2xl">Project 2</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/image-3.jpg" width={350} height={600} alt="Project 3" />
                        <h3 className="mt-2 text-2xl">Project 3</h3>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="w-full py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-black">About Me</h2>
                    <div className="w-20 h-1 mx-auto my-4 bg-secondary"></div>
                </div>
                <div className="z-20 grid items-center h-full p-6 md:py-20 md:grid-cols-2">
                    <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center md:text-left">
                        <p className="text-black mb-5 text-xl leading-tight">
                            I am Italo Rojas, a passionate engineer working with art and data. With years of experience in various fields, I combine my technical skills with a creative touch to deliver unique solutions.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/home-4-yo.png" priority width="350" height="350" alt="About Me Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
