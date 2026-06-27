"use client";

import React from "react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative cursor-pointer clip-cyber-card bg-[#F7EFE2] border-2 border-[#433347] p-8 shadow-[6px_6px_0px_0px_rgba(67,51,71,0.25)] hover:shadow-[6px_6px_0px_0px_#BC6034] hover:border-[#BC6034] transition-all duration-300 flex flex-col justify-between h-[360px]"
    >
      {/* Corner hardware detailing */}
      <div className="hud-corner-tl" />
      <div className="hud-corner-br" />

      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono-tech text-xs md:text-sm text-[#9146FF] font-bold">
            [{project.category.toUpperCase()}]
          </span>
          <div className="text-[#433347]/40 group-hover:text-[#BC6034] transition-colors">
            <ArrowUpRight size={22} />
          </div>
        </div>

        <h3 className="font-heading font-black text-xl md:text-2xl text-[#2E2430] mb-3">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#72636B] line-clamp-3 leading-relaxed">
          {project.brief}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono-tech text-xs text-[#72636B] border-t border-[#433347]/10 pt-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="uppercase font-semibold">
            [{tech}]
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-[#9146FF] font-bold">
            +{project.techStack.length - 3}_SYS
          </span>
        )}
      </div>
    </motion.div>
  );
}