import { dataPortfolio_Engineer } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";
import ProjectMobileDisplay from "@/components/project-mobile-display";
import Image from "next/image";

const AFishStoryPage = () => {
  const project = dataPortfolio_Engineer[0];

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-6 md:py-10">
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">

              {/* Header */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-secondary text-sm uppercase tracking-widest">{project.category} — {project.tags.join(" · ")}</p>
                  {project.repository && (
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 ml-4 text-xs border border-secondary/50 text-secondary px-3 py-1.5 rounded-full hover:bg-secondary/10 transition-colors">
                      ↗ Repository
                    </a>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-primary mb-3">{project.title}</h1>
                <p className="text-primary text-xl">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs border border-secondary text-secondary px-3 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images.map((img, i) => (
                  <div key={i} className="w-full h-64 relative overflow-hidden rounded-lg bg-gray-100">
                    <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Narrative */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Context</h2>
                {project.narrative.split("\n\n").map((para, i) => (
                  <p key={i} className="text-primary leading-relaxed text-justify">{para}</p>
                ))}
              </section>

              {/* Technical Detail */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Technical Detail</h2>
                <ul className="space-y-3">
                  {project.technicalDetail.map((item, i) => (
                    <li key={i} className="flex gap-3 text-primary leading-relaxed text-justify">
                      <span className="text-secondary mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Learnings */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Learnings</h2>
                <ul className="space-y-3">
                  {project.learnings.map((item, i) => (
                    <li key={i} className="flex gap-3 text-primary leading-relaxed text-justify">
                      <span className="text-secondary mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Visit Site */}
              <div className="pt-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
                >
                  Visit Site
                </a>
              </div>

            </div>
          </div>
        </div>
      </ContainerPage>
      <ProjectMobileDisplay />
      <Banner />
    </>
  );
};

export default AFishStoryPage;
