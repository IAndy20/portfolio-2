// Proyecto de arte 3
// Funga Morpho (Coming Soon)

import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";

const FungaMorphoPage = () => {
  const project = dataPortfolio_Artist[2]; // Funga Morpho

  return (
    <>
      <ContainerPage>
        <TransitionPage />
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

      <br />
      <br />
      <Banner />
    </>
  );
};

export default FungaMorphoPage;
