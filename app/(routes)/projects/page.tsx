import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import HexagonalGrid from "@/components/hexagon";


const ProjectsPage = () => {
    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="text-center mt-10 mb-12 px-4">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        <span className="font-bold text-black">Projects</span>
                    </h1>
                </div>
                <br/>
                <div className="flex flex-col justify-center h-full px-4 py-10 md:px-8 md:py-16">
                    <div className="relative z-10 max-w-5xl mx-auto mt-6 space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl text-secondary mb-2">Art and science for a thriving future between humans, machines and nature</h2>
                            <p className="text-primary text-1xl">
                            Projects at the intersection of environmental science, interactive media, and generative technology — connecting ecological, social, and human dimensions through work that is both technically rigorous and meaningfully felt.
                            </p>
                        </div>
                    </div>
                </div>
            </ContainerPage>
            <div className="w-full relative flex items-center justify-center">
                {/* Centered PROJECTS */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                    <h2 className="text-black text-4xl font-bold">PROJECTS</h2>
                    <h4 className="text-secondary text-2xl font-bold text-center">Sound & Interaction · Data & Science</h4>

                </div>

                {/* Background grid */}
                <div className="relative z-0">
                    <HexagonalGrid />
                </div>
            </div>
            <Banner/>
        </>
    );
}

export default ProjectsPage;
