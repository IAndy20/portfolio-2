import { dataPortfolio_Engineer } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";

const ProjectsPage = () => {
  interface Project {
    id: number;
    title: string;
    overviewImages: string[];
    challengeImages: string[];
    solutionImages: string[];
    resultImages: string[];
    overview: string;
    challenges: string;
    solutions: string[];
    results: string[];
  }

  const project: Project = dataPortfolio_Engineer[1];

  return (
    <>
      <ContainerPage>
        <TransitionPage />
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-4 md:py-4">
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
              <div className="text-left">
                <h1 className="text-3xl text-primary mb-2">{project.title}</h1>
              </div>

              {/* Text sections */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">Overview</h3>
                  <p className="text-primary">{project.overview}</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">Challenges</h3>
                  <p className="text-primary">{project.challenges}</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">Solutions</h3>
                  <div className="text-primary whitespace-pre-line">
                    {project.solutions.map((solution, index) => (
                      <div key={index}>
                        <strong>{index + 1}.</strong> {solution}
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">Results</h3>
                  <div className="text-primary whitespace-pre-line">
                    {project.results.map((result, index) => (
                      <div key={index}>
                        <strong>{index + 1}.</strong> {result}
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Images grouped at the bottom (max 4 images, 2x2) */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {(() => {
                  const allImages = [
                    ...project.overviewImages,
                    ...project.challengeImages,
                    ...project.solutionImages,
                    ...project.resultImages,
                  ].slice(0, 4);

                  return allImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Project Image ${index + 1}`}
                      className="w-full h-auto shadow-lg rounded-lg"
                    />
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </ContainerPage>

      <br />
      <br />
      <Banner />
    </>
  );
};

export default ProjectsPage;
