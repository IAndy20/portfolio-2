import { dataPortfolio_Artist } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import SidebarProjects from "@/components/sidebar-projects";
import Image from "next/image";

const PerkungFuPage = () => {
  const project = dataPortfolio_Artist[4];

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

              {/* Image */}
              <div className="w-full relative overflow-hidden rounded-lg bg-gray-100" style={{ aspectRatio: "16/9" }}>
                <Image src="/perkung-fu-1.png" alt="Perkung-fu interface" fill className="object-cover" />
              </div>

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
      <br />
      <Banner />
    </>
  );
};

export default PerkungFuPage;
