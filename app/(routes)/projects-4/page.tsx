import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import Banner from "@/components/banner";

const ProjectsPage = () => {
    // Get the first project from the dataPortfolio
    const project = dataPortfolio[3];

    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col justify-center h-full px-4 py-10 md:px-8 md:py-16">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        My Relevant <span className="font-bold text-secondary">Projects</span>
                    </h1>

                    <div className="relative z-10 max-w-5xl mx-auto mt-6 space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl uppercase text-primary mb-2">{project.title}</h2>
                        </div>

                        <div className="space-y-8">
                            <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg font-semibold text-secondary mb-4">Overview</h3>
                                    <p className="text-primary">{project.overview}</p>
                                </div>
                                <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                                    {project.overviewImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Project Overview ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg font-semibold text-secondary mb-4">Challenges</h3>
                                    <p className="text-primary">{project.challenges}</p>
                                </div>
                                <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                                    {project.challengeImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Challenge Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg font-semibold text-secondary mb-4">Solutions</h3>
                                    <p className="text-primary whitespace-pre-line">{project.solutions}</p>
                                </div>
                                <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                                    {project.solutionImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Solution Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg font-semibold text-secondary mb-4">Results</h3>
                                    <p className="text-primary whitespace-pre-line">{project.results}</p>
                                </div>
                                <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                                    {project.resultImages.map((img, index) => (
                                        <img key={index} src={img} alt={`Result Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </ContainerPage>
            <SliderServices />
            <Banner/>

        </>
    );
}

export default ProjectsPage;
