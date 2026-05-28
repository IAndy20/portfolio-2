import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";
import ProjectMobileDisplay from "@/components/project-mobile-display";

const NeoChucaoPage = () => {
  const project = dataPortfolio_Artist[5];

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
                <p className="text-secondary text-sm uppercase tracking-widest mb-2">{project.category} — {project.tags.join(" · ")}</p>
                <h1 className="text-4xl font-bold text-primary mb-3">{project.title}</h1>
                <p className="text-primary text-xl">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs border border-secondary text-secondary px-3 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 border border-secondary bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block" />
                  Work in progress
                </div>
              </div>

              {/* First Iteration */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">First Iteration</h2>
                <p className="text-primary leading-relaxed">
                  Current work-in-progress using RAVE + Claude + SuperCollider:{" "}
                  <a
                    href="https://github.com/IAndy-10/liveCoding-rave/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    github.com/IAndy-10/liveCoding-rave
                  </a>
                </p>
              </section>

              {/* Audio example */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Sound Example</h2>
                <audio controls className="w-full">
                  <source src="/NeoChucao-example.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
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

            </div>
          </div>
        </div>
      </ContainerPage>
      <ProjectMobileDisplay />
      <Banner />
    </>
  );
};

export default NeoChucaoPage;
