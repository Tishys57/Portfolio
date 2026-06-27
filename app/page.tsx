"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Layers, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

// SVG Monitor displaying your custom logo inside the CRT screen area
function PixelCPU() {
  return (
    <svg width="144" height="144" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto crt-effect">
      {/* Outer CRT Shell */}
      <rect x="2" y="2" width="28" height="22" fill="#433347" />
      <rect x="1" y="3" width="30" height="20" fill="#433347" />
      
      {/* Inner Screen Background */}
      <rect x="4" y="4" width="24" height="16" fill="#F2E6D6" />
      
      {/* Your Custom 512x512px Logo rendered inside the screen */}
      <image
        href="/logo.png"
        x="5"
        y="5"
        width="22"
        height="14"
        preserveAspectRatio="xMidYMid meet"
      />
      
      {/* Monitor base and stand */}
      <rect x="10" y="24" width="12" height="2" fill="#433347" />
      <rect x="8" y="26" width="16" height="3" fill="#BC6034" />
    </svg>
  );
}

// 8-Bit Pixel EEG Signal Wave
function PixelSignalWave() {
  return (
    <svg width="100%" height="45" viewBox="0 0 100 20" preserveAspectRatio="none" className="opacity-95">
      <motion.path
        d="M0,10 H15 L18,2 L22,18 L25,10 H45 L48,0 L52,20 L55,10 H75 L78,4 L82,16 L85,10 H100"
        stroke="#9146FF"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3 1.5"
        animate={{ strokeDashoffset: [0, -30] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="scanlines" />
      <div className="absolute inset-0 cyber-grid-overlay pointer-events-none" />

      {/* Main expanded panel container to fit wide screens */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col gap-16 relative z-10">
        
        {/* Workspace Upper Console Section - Swapped Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Micro telemetry panel with Custom Logo Monitor (Span 4) */}
          <div className="lg:col-span-4 bg-[#F7EFE2] border-4 border-[#433347] pixel-border-double p-8 flex flex-col items-center justify-center text-center relative shadow-[6px_6px_0px_0px_rgba(67,51,71,0.25)]">
            <div className="absolute top-2 left-2 text-xs font-mono-tech text-[#72636B]">[TELEMETRY]</div>
            <PixelCPU />
            <div className="w-full mt-6 border-t-2 border-[#433347]/10 pt-6 font-mono-tech text-sm flex flex-col gap-3 text-[#2E2430]">
              <div className="flex justify-between">
                <span>SYSTEM_STATUS:</span>
                <span className="text-[#3FA56A] font-bold animate-pulse">[ONLINE]</span>
              </div>
              <div className="flex justify-between">
                <span>GRADUATION:</span>
                <span className="text-[#9146FF] font-bold">[DEC_2026]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Main Statement Terminal (Span 8) */}
          <div className="lg:col-span-8 bg-[#F7EFE2] border-4 border-[#433347] pixel-border-double p-10 flex flex-col justify-between relative shadow-[6px_6px_0px_0px_rgba(67,51,71,0.25)]">
            <div className="absolute top-3 right-3 font-mono-tech text-xs text-[#3FA56A] tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#3FA56A] rounded-full animate-pulse" />
              [NODE_ACTIVE_KU]
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="font-pixel text-sm text-[#BC6034] tracking-wider">&gt; BOOTING WORKSTATION NODE...</span>
              <h1 className="font-pixel text-4xl md:text-6xl tracking-tight text-[#2E2430] leading-none">
                TISHYA DHAKAL
              </h1>
              <div className="font-console text-2xl text-[#9146FF]">
                [ B.Tech AI Student // Alternate Timeline Terminal ]
              </div>
              <p className="text-base md:text-lg text-[#72636B] leading-relaxed max-w-3xl">
                I train robust machine learning models, design end-to-end processing pipelines, and engineer customized algorithmic solutions to complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/projects/">
                <Button variant="primary">
                  [SYSTEM_ARCHIVES]
                </Button>
              </Link>
              <Link href="/resume/">
                <Button variant="secondary">
                  [ACADEMIC_CV]
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Directory Focus Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F7EFE2] border-2 border-[#433347] p-8 relative flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(67,51,71,0.15)]">
            <span className="absolute top-2 right-3 font-mono-tech text-xs text-[#9146FF] font-bold">[DIR_01]</span>
            <div className="p-3 bg-[#BC6034]/10 text-[#BC6034] border border-[#BC6034]/20 w-fit">
              <Terminal size={26} />
            </div>
            <h3 className="font-heading font-black text-lg md:text-xl text-[#2E2430]">// AI Model Development</h3>
            <p className="text-sm md:text-base text-[#72636B] leading-relaxed">
              Formulating model topologies, optimizing training cycles, and configuring domain-specific evaluations.
            </p>
          </div>

          <div className="bg-[#F7EFE2] border-2 border-[#433347] p-8 relative flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(67,51,71,0.15)]">
            <span className="absolute top-2 right-3 font-mono-tech text-xs text-[#9146FF] font-bold">[DIR_02]</span>
            <div className="p-3 bg-[#9146FF]/10 text-[#9146FF] border border-[#9146FF]/20 w-fit">
              <Cpu size={26} />
            </div>
            <h3 className="font-heading font-black text-lg md:text-xl text-[#2E2430]">// Pipeline Architecture</h3>
            <p className="text-sm md:text-base text-[#72636B] leading-relaxed">
              Designing modular end-to-end structures to manage preprocessing, validation runs, and inferences.
            </p>
          </div>

          <div className="bg-[#F7EFE2] border-2 border-[#433347] p-8 relative flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(67,51,71,0.15)]">
            <span className="absolute top-2 right-3 font-mono-tech text-xs text-[#9146FF] font-bold">[DIR_03]</span>
            <div className="p-3 bg-[#BC6034]/10 text-[#BC6034] border border-[#BC6034]/20 w-fit">
              <Layers size={26} />
            </div>
            <h3 className="font-heading font-black text-lg md:text-xl text-[#2E2430]">// Customized Solutions</h3>
            <p className="text-sm md:text-base text-[#72636B] leading-relaxed">
              Synthesizing domain research into reliable, deployable codebases tailored for specific problem statements.
            </p>
          </div>
        </section>

        {/* Model Core Index with Thematic Primary Button */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-black text-2xl md:text-4xl text-[#2E2430] uppercase">
              // ACTIVE CORE ARTIFACTS
            </h2>
            <p className="text-xs md:text-sm font-mono-tech text-[#72636B]">
              Custom system topologies. Let my active developments speak for what I have achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <div 
                key={project.id}
                className="clip-cyber-card bg-[#F7EFE2] border-2 border-[#433347] p-8 rounded-none flex flex-col justify-between h-[410px] shadow-[6px_6px_0px_0px_rgba(67,51,71,0.25)] hover:shadow-[6px_6px_0px_0px_#BC6034] hover:border-[#BC6034] transition-all group relative"
              >
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#BC6034] border-l-2 border-b-2 border-[#433347]" />
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center font-mono-tech text-xs md:text-sm text-[#9146FF] font-bold">
                    <span>[{project.details?.academicCode || "DEV_PIPELINE"}]</span>
                    <span>{project.category.toUpperCase()}</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2E2430]">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#72636B] leading-relaxed line-clamp-3">
                    {project.brief}
                  </p>
                </div>
                
                {/* Custom waveform mapping */}
                <div className="flex flex-col gap-3 border-t border-[#433347]/10 pt-4">
                  {project.id === "seizure-detection" && <PixelSignalWave />}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono-tech text-xs text-[#72636B]">
                    {project.techStack.map(tech => (
                      <span key={tech}>//{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Thematic primary button to lead to the rest of the projects */}
          <div className="flex justify-center mt-8">
            <Link href="/projects/">
              <Button variant="primary" className="font-mono-tech text-xs md:text-sm">
                [LOAD_COMPLETE_REGISTRY] <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}