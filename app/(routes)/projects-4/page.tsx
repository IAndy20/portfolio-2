import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import Banner from "@/components/banner";

const ProjectsPage = () => {
    const project = dataPortfolio[3];

    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col justify-center h-full px-6 py-10 md:px-8 md:py-16">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        My Relevant <span className="font-bold text-secondary">Projects</span>
                    </h1>

                    <div className="relative z-10 mx-auto mt-6 space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl uppercase text-primary mb-2">{project.title}</h2>
                            <div className="w-full md:w-3/4 mx-auto mb-6">
                                <p className="text-primary text-lg">{project.overview}</p>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="space-y-8">
                            <section className="flex flex-col items-center space-y-6">
                                <div className="w-full md:w-3/4 mx-auto">
                                    <h3 className="text-lg font-semibold text-secondary mb-4 flex justify-between items-center">
                                        Mapu Küfull cooperative
                                        <a href="https://cooperativahongos.cl/" className="text-sm text-blue-600">See More</a>
                                    </h3>
                                    <p className="text-primary">{project.challenges}</p>
                                </div>
                                <div className="w-full md:w-3/4 mx-auto grid grid-cols-2 gap-4">
                                    {project.challengeImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Challenge Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>
                            <br />
                            <br />

                            <section className="flex flex-col items-center space-y-6">
                                <div className="w-full md:w-3/4 mx-auto">
                                    <h3 className="text-lg font-semibold text-secondary mb-4 flex justify-between items-center">
                                        Reino Fungi Festival
                                        <a href="https://festivalreinofungi.cl/" className="text-sm text-blue-600">See More</a>
                                    </h3>
                                    <p className="text-primary whitespace-pre-line">{project.solutions}</p>
                                </div>
                                <div className="w-full md:w-3/4 mx-auto grid grid-cols-2 gap-4">
                                    {project.solutionImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Solution Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>
                            <br />
                            <br />

                            <section className="flex flex-col items-center space-y-6">
                                <div className="w-full md:w-3/4 mx-auto">
                                    <h3 className="text-lg font-semibold text-secondary mb-4 flex justify-between items-center">
                                        WIP Digital Art
                                        <a href="https://wipartedigital.com/" className="text-sm text-blue-600">See More</a>
                                    </h3>
                                    <p className="text-primary whitespace-pre-line">{project.results}</p>
                                </div>
                                <div className="w-full md:w-3/4 mx-auto grid grid-cols-2 gap-4">
                                    {project.resultImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Result Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </ContainerPage>
            <br />
            <br />
            <br />

            <SliderServices />
            <Banner />
        </>
    );
}

export default ProjectsPage;
