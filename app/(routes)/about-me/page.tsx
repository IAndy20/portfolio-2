"use client"

import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TimeLine_Ed from "@/components/time-line ed";
import TimeLine_More from "@/components/time-line more";
import TransitionPage from "@/components/transition-page";
import Banner from "@/components/banner";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-primary text-1xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="text-secondary text-lg md:text-2xl">
                        Explore my journey in supporting data-driven strategic decisions through<br />
                    </span>
                    <span className="text-primary text-2xl md:text-4xl">
                        Visualization Design to promote Sustainability
                    </span>
                </h1>


                <br />
                <br />

                <CounterServices />

                {/* Contenedor con dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Título Work Experience */}
                    <h1
                    className="text-primary text-3xl md:text-5xl col-span-1 text-left flex items-start"
                    style={{ marginTop: '65px' }}>
                    Work Experience
                    </h1>
                    {/* Línea de tiempo */}
                    <div className="md:col-span-2 flex items-start">
                        <div className="relative -mt-4"> {/* Ajusta el margen según sea necesario */}
                            <TimeLine />
                        </div>
                    </div>
                </div>
                <hr className="border-t-2 border-black mb-10" />
                
                {/* Contenedor con dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Título Education*/}
                    <h1
                    className="text-primary text-3xl md:text-5xl col-span-1 text-left flex items-start"
                    style={{ marginTop: '65px' }}>
                    Education
                    </h1>
                    {/* Línea de tiempo */}
                    <div className="md:col-span-2 flex items-start">
                        <div className="relative -mt-4"> {/* Ajusta el margen según sea necesario */}
                            <TimeLine_Ed />
                        </div>
                    </div>
                </div>
                <hr className="border-t-2 border-black mb-10" />
                                
                {/* Contenedor con dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Título More About Me*/}
                    <h1
                    className="text-primary text-3xl md:text-5xl col-span-1 text-left flex items-start"
                    style={{ marginTop: '65px' }}>
                    More About <br></br>Me
                    </h1>
                    {/* Línea de tiempo */}
                    <div className="md:col-span-2 flex items-start">
                        <div className="relative -mt-4"> {/* Ajusta el margen según sea necesario */}
                            <TimeLine_More />
                        </div>
                    </div>
                </div>

            </ContainerPage>
            <Banner />

        </>
    );
}

export default AboutMePage;
