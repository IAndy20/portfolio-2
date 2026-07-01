import Image from "next/image";
import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";
import ProjectMobileDisplay from "@/components/project-mobile-display";

const NeoChucaoPage = () => {
  const project = dataPortfolio_Artist[4]; // id: 6 project: "Neo Chucao"

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

              {/* Audio example */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Sound Examples</h2>
                <h4 className="text-sm font-semibold text-primary">Claude Collider MCP + Rave example</h4>
                <audio controls className="w-full">
                  <source src="/claude-collider-rave-mcp.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/uRod_opk1PA"
                    title="Claude Collider MCP + Rave"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h4 className="text-sm font-semibold text-primary">Rave Midi example</h4>
                <audio controls className="w-full">
                  <source src="/rave-midi-example.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                 {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((img, i) => (
                    <div key={i} className="w-full h-64 relative overflow-hidden rounded-lg bg-gray-100">
                      <Image src={img} alt={`${project.title} ${i + 1}`} fill quality={95} className="object-cover" />
                    </div>
                  ))}
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

              {/* Iteration process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Iteration process</h2>
                <ul className="space-y-3">
                  {(project.iterations ?? []).map((item, i) => (
                    <li key={i} className="flex gap-3 text-primary leading-relaxed text-justify">
                      <span className="text-secondary mt-1">—</span>
                      <span>{item.title}: {item.description}</span>
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

export default NeoChucaoPage;
