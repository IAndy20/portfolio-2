import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";
import ProjectMobileDisplay from "@/components/project-mobile-display";

const DanceOfLaplacePage = () => {
  const project = dataPortfolio_Artist[6]; // id: 8 project: "Dance of Laplace"

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
              {project.images && project.images.length > 0 && (
                <section className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((src, i) => (
                      <img key={i} src={src} alt={`${project.title} ${i + 1}`} className="w-full object-cover rounded-md" />
                    ))}
                  </div>
                </section>
              )}

              {/* Video */}
              {"video_url" in project && project.video_url && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Video</h2>
                  <div className="aspect-video w-full">
                    <iframe
                      src={project.video_url as string}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </section>
              )}

              {/* Extra Video */}
              <section className="space-y-4">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/3L7j6RN6aeg"
                    title="Dance of Laplace"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md"
                  />
                </div>
              </section>

              {/* Narrative */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Concept</h2>
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

            </div>
          </div>
        </div>
      </ContainerPage>
      <ProjectMobileDisplay />
      <Banner />
    </>
  );
};

export default DanceOfLaplacePage;
