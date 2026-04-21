import { dataPortfolio_Engineer } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";

const ProjectsPage = () => {
  interface Project {
    id: number;
    title: string;
    subtitle: string;
    overviewImages: string[];
    challengeImages: string[];
    solutionImages: string[];
    resultImages: string[];
    overview: string;
    challenges: string;
    role: string[];
    methodologyTitle?: string[];

    methodologyDescription: string[];
    results: string[];
  }


  const project = dataPortfolio_Engineer[2] as Project;

  return (
    <>
      <ContainerPage>
        <TransitionPage />
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-4 md:py-4 flex-1">
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                <div className="text-left">
                    <h1 className="text-3xl text-primary mb-2">{project.title}</h1>
                </div>
                <p className="text-secondary text-lg opacity-80">
                    {project.subtitle}
</p>


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

                {/* Role */}
                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">My Role</h3>
                  <ul className="list-disc pl-5 space-y-2 text-primary">
                    {project.role.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Methodology */}
                <section>
                  <h3 className="text-lg font-semibold text-secondary mb-4">Methodology</h3>

                  {project.methodologyTitle?.map((title, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="text-primary font-semibold mb-2">
                        {title}
                      </h4>
                      <p className="text-primary opacity-90">
                        {project.methodologyDescription[index]}
                      </p>
                    </div>
                  ))}
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
                    ...(project.overviewImages || []),
                    ...(project.challengeImages || []),
                    ...(project.solutionImages || []),
                    ...(project.resultImages || []),
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
