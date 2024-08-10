import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import Banner from "@/components/banner";


const ProjectsPage = () => {
    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col justify-center h-full px-4 py-10 md:px-8 md:py-16">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        Welcome to My <span className="font-bold text-secondary">Projects</span>
                    </h1>
                    <div className="relative z-10 max-w-5xl mx-auto mt-6 space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl uppercase text-primary mb-2">Explore the work and efforts put into sustainability and innovative solutions</h2>
                            <p className="text-primary">
                                Below, you will find a selection of projects that highlight the strategic initiatives and innovative solutions implemented across various domains.
                                Each project aims to drive sustainability, improve operational efficiency, and contribute positively to the community and environment.
                                Click on any project to learn more about the challenges we faced, the solutions we devised, and the impactful results we achieved.
                            </p>
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
