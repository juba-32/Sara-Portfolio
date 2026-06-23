"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects } from "../data/projects";
import { Project } from "../types";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";

export default function WorkSection() {
  const t = useTranslations("work");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filters = useMemo(() => {
    return ["all", ...new Set(projects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-6xl font-black">
            {t("title")}
          </h2>

          <p className="text-muted-foreground mt-3">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "border-white/10 hover:bg-white hover:text-black"
              }`}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}