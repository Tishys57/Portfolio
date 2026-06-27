"use client";

import React from "react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading font-bold text-2xl tracking-wider text-[#ff7300] uppercase">// Technical Directory</h2>
        <p className="text-xs font-mono-tech text-foreground/50">Core system parameters and framework support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-[#121324] border-2 border-[#1f223f] p-6 relative flex flex-col gap-4">
            <div className="absolute top-1 right-2 text-[8px] font-mono-tech text-foreground/30">// COMPILER_OK</div>
            <h3 className="font-heading font-bold text-base text-[#00f3ff] uppercase">{category.title}</h3>
            <div className="flex flex-col gap-1.5 font-mono-tech text-xs text-foreground/80">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-start gap-2">
                  <span className="text-[#ff007f]">&gt;</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}