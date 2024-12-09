import Image from "next/image";
import SliderServices from "@/components/slider-services";
import PanelServices from "./panel-services";


const Introduction = () => {
    return (
        <div className=" z-20 w-full">
            {/* Introduction Section */}
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-start items-start max-w-md mx-auto text-left">
                        <h1 className="text-black mb-5 text-2xl leading-tight md:text-4xl md:mb-10 font-semibold">
                            Welcome, I'm Italo Rojas
                        </h1>
                        <h1 className="text-black text-2xl">
                            I collect complex data and visualize it to raise awareness and take action
                        </h1>
                    </div>
                    <div className="relative justify-center items-center w-full h-auto max-w-screen-lg mx-auto mt-1 md:mt-10 group">
                        {/* Imagen agrandada y subida */}
                        <Image
                            src="/araucarias1.png"
                            priority
                            width="900"  // Aumento el tamaño
                            height="900"  // Aumento el tamaño
                            alt="Avatar"
                            className="rounded-full transition-all duration-300 ease-in-out group-hover:opacity-0 absolute top-[-140px] left-0"  // Subo la imagen
                        />
                        {/* Imagen que aparece al hacer hover */}
                        <Image
                            src="/araucarias.png"
                            width="900"  // Aumento el tamaño
                            height="900"  // Aumento el tamaño
                            alt="New Avatar"
                            className="rounded-full absolute top-[-140px] left-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"  // Subo la imagen
                        />
                    </div>
                </div>
            </div>




            {/* Projects Section */}
            <div className="w-full py-20 text-center">
                <h2 className="text-black text-4xl font-bold">Projects</h2>
                <div className="w-20 h-1 mx-auto my-4 bg-secondary"></div>
                <PanelServices />
            </div>

            {/* About Me Section */}
            <div className="w-full py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-black">About Me</h2>
                    <div className="w-20 h-1 mx-auto my-4 bg-secondary"></div>
                </div>
                <div className="min-h-full flex flex-col justify-center items-center pt-0">
                    <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2">
                        <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center mr-8">
                            <h1 className="text-black text-xl text-justify">
                            I'm Italo Rojas, an engineer who simplifies complex data into clear, minimalist visualizations. With a background in sustainability projects, I blend technical expertise with creativity to raise awareness and deliver data-driven solutions.
                            </h1>
                        </div>
                        <div className="relative justify-center items-center w-full h-auto max-w-screen-lg mx-auto mt-2 md:mt-10 ml-8">
                            <Image src="/home-4-yo.png" priority width="300" height="300" alt="Avatar" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
