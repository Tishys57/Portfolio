"use client";

import React from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-24">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-pixel text-2xl md:text-4xl text-[#2E2430] tracking-wide">SYSTEM_ARCHIVES</h1>
        <p className="text-sm md:text-base font-mono-tech text-[#72636B] max-w-xl leading-relaxed">
          Explore research prototypes and end-to-end deep learning pipelines built under optimal training workflows.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#EEE2CC]/85 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#F7EFE2] border-4 border-[#433347] p-8 md:p-10 z-10 pixel-shadow-hard"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#BC6034] border-l-2 border-b-2 border-[#433347]" />

              {/* Header */}
              <div className="flex justify-between items-start gap-4 pb-6 border-b-2 border-[#433347]/10">
                <div>
                  <span className="font-mono-tech text-xs md:text-sm text-[#9146FF] font-bold uppercase tracking-wider">
                    // {selectedProject.category.toUpperCase()} //
                  </span>
                  <h2 className="font-heading font-black text-2xl md:text-3xl mt-2 text-[#2E2430]">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 border-2 border-[#433347] hover:bg-[#BC6034]/15 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-[#433347]" />
                </button>
              </div>

              {/* Content Body */}
              <div className="py-6 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-[#72636B]">
                {selectedProject.details?.academicCode && (
                  <div className="bg-[#F2E6D6] border-2 border-[#433347] p-4 flex flex-col gap-1 text-xs md:text-sm font-mono-tech">
                    <p className="font-bold text-[#9146FF] flex items-center gap-2">
                      <GraduationCap size={16} /> [ KATHMANDU UNIVERSITY COURSE Project: {selectedProject.details.academicCode} ]
                    </p>
                    <p className="text-[#2E2430] mt-2">
                      <strong>SUPERVISOR:</strong> {selectedProject.details.supervisor}
                    </p>
                    <p className="text-[#2E2430]">
                      <strong>RESEARCH LAB:</strong> {selectedProject.details.lab}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-mono-tech font-bold text-xs md:text-sm text-[#BC6034] uppercase mb-1">
                    // The Problem //
                  </h4>
                  <p className="text-[#2E2430]">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono-tech font-bold text-xs md:text-sm text-[#ff5500] uppercase mb-1">
                    // The Solution //
                  </h4>
                  <p className="text-[#2E2430]">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono-tech font-bold text-xs md:text-sm text-[#BC6034] uppercase mb-1">
                    // Key Features //
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-[#2E2430]">
                    {selectedProject.keyFeatures.map((feat, index) => (
                      <li key={index}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono-tech font-bold text-xs md:text-sm text-[#BC6034] uppercase mb-1">
                    // Performance Metrics & Results //
                  </h4>
                  <p className="bg-[#F2E6D6] border-2 border-[#433347] px-4 py-3 font-mono-tech text-xs md:text-sm text-[#9146FF] font-semibold">
                    {selectedProject.results}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono-tech font-bold text-xs md:text-sm text-[#BC6034] uppercase mb-2">
                    // Technology Stack //
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm font-mono-tech">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="bg-[#F2E6D6] border border-[#433347]/40 px-3 py-1 text-[#2E2430]">
                        [{tech}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t-2 border-[#433347]/10 flex justify-end gap-4">
                <Button variant="secondary" onClick={() => setSelectedProject(null)} className="text-xs">
                  [CLOSE_PANEL]
                </Button>
                <a href="https://github.com/tishya-dhakal" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="text-xs">
                    <Github size={14} /> [REPOSITORY_NODE]
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}