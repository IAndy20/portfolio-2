"use client";

import Link from "next/link";
import { dataPortfolio_Engineer } from "../data";
import { dataPortfolio_Artist } from "../data";

export default function SidebarProjects() {
  return (
    <aside className="w-64 p-4 border-r border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      {/* Art Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Art</h3>
        <ul className="space-y-1">
          {dataPortfolio_Artist.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects-art-${project.id}`}
                className="text-secondary hover:text-black transition-colors"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Engineer Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Engineer</h3>
        <ul className="space-y-1">
          {dataPortfolio_Engineer.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects-${project.id}`}
                className="text-secondary hover:text-black transition-colors"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
