// Proyecto de arte 1
// The First Singing

import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";

const ProjectsPage = () => {
  const project = dataPortfolio_Artist[0]; // The First Singing
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-6 md:py-10">
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
              {/* Project Title */}
              <div className="text-left">
                <h1 className="text-3xl text-primary mb-2">
                  {project.title} (Coming Soon)
                </h1>
                <p className="text-primary text-lg md:text-xl mt-2">{project.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerPage>

      {/** Exhibition Section     
      <ContainerPage>
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-6 md:py-10">
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">

              <div className="text-left">
                <h1 className="text-3xl text-primary mb-2">{project.title}</h1>
                <p className="text-primary text-lg md:text-xl mt-2">{project.overview}</p>
              </div>


              <section className="flex flex-col  space-y-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Concept</h3>
                <p className="text-primary whitespace-pre-line">{project.concept}</p>
              </section>


              <section className="flex flex-col space-y-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Experimentation</h3>
                <div className="text-primary whitespace-pre-line">
                  {project.experiments.map((exp, index) => (
                    <p key={index} className="mb-4">{exp}</p>
                  ))}
                </div>
              </section>

              
              <section className="flex flex-col items-center space-y-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Exhibition</h3>
                <div className="text-primary text-center whitespace-pre-line">
                  {project.exhibition.map((result, index) => (
                    <p key={index} className="mb-4">{result}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </ContainerPage>
                    */}


      <br />
      <br />
      <Banner />
    </>
  );
};

export default ProjectsPage;
