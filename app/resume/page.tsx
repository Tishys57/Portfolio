"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { GraduationCap, Briefcase, FileCode } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-24 flex flex-col gap-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-[#361f30]/20">
        <div>
          <h1 className="font-pixel text-2xl md:text-4xl text-[#361f30] tracking-wide uppercase">CURRICULUM VITÆ</h1>
          <p className="text-xs md:text-sm font-mono-tech text-[#72636B] mt-1">MODULE_ARCHIVE // VERIFIED_NODE</p>
        </div>
        {/* Opens the PDF in a new tab, allowing natural reading/downloading via native PDF viewer controls */}
        <a 
          href="/Tishya_Dhakal_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full md:w-auto"
        >
          <Button variant="primary" className="w-full">
            [OPEN_RECORDS_PDF]
          </Button>
        </a>
      </div>

      {/* CV Box */}
      <div className="bg-[#F7EFE2] border-4 border-[#361f30] pixel-border-double p-8 md:p-12 flex flex-col gap-10 shadow-[6px_6px_0px_0px_rgba(67,51,71,0.25)] relative">
        <div className="absolute top-2 right-2 text-xs font-mono-tech text-[#a300e0]">[RECORD_DECK]</div>
        
        {/* CV Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="font-pixel text-3xl md:text-4xl text-[#361f30]">TISHYA DHAKAL</h2>
            <p className="text-sm font-mono-tech text-[#a300e0] mt-2">Kathmandu, Nepal • tishys57@gmail.com</p>
          </div>
          <div className="text-xs md:text-sm font-mono-tech md:text-right text-[#72636B] leading-relaxed">
            <p>[Final-year B.Tech AI Student]</p>
            <p>[Kathmandu University]</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono-tech font-bold text-sm tracking-wider text-[#ff5500] uppercase border-b border-[#361f30]/20 pb-2">
            // Core Objectives
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#72636B]">
            Dedicated Artificial Intelligence engineering student with a deep focus on custom model architectures, NLP pipelines, and clinical signal processing algorithms. Proven ability to architect modular datasets and optimize training dynamics.
          </p>
        </div>

        {/* Education Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono-tech font-bold text-sm tracking-wider text-[#ff5500] uppercase border-b border-[#361f30]/20 pb-2 flex items-center gap-2">
            <GraduationCap size={18} /> // Academic Nodes
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-heading font-black text-lg md:text-xl text-[#361f30]">B.Tech in Artificial Intelligence</h4>
              <span className="text-xs md:text-sm font-mono-tech text-[#a300e0] shrink-0">[Graduating Dec 2026]</span>
            </div>
            <p className="text-sm md:text-base text-[#72636B]">Kathmandu University, Dhulikhel, Nepal</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs md:text-sm font-mono-tech">
              <span className="text-[#ff5500] font-bold">CGPA: 3.75 / 4.0</span>
            </div>
          </div>
        </div>

        {/* Competencies */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono-tech font-bold text-sm tracking-wider text-[#ff5500] uppercase border-b border-[#361f30]/20 pb-2 flex items-center gap-2">
            <FileCode size={18} /> // Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm font-mono-tech leading-relaxed">
            <div className="flex flex-col gap-1 border-l-2 border-[#a300e0]/30 pl-4">
              <p className="font-bold text-[#a300e0]">// ML FRAMEWORKS & DEPLOYMENT</p>
              <p className="text-[#72636B] mt-1.5">PyTorch, TensorFlow, scikit-learn, Hugging Face, OpenCV, Docker, Git</p>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-[#ff5500]/30 pl-4">
              <p className="font-bold text-[#ff5500]">// DEVELOPER STACK</p>
              <p className="text-[#72636B] mt-1.5">Python (Proficient), Bash scripting, C++, SQL, Linux (Ubuntu/Debian)</p>
            </div>
          </div>
        </div>

        {/* Project achievements */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono-tech font-bold text-sm tracking-wider text-[#ff5500] uppercase border-b border-[#361f30]/20 pb-2 flex items-center gap-2">
            <Briefcase size={18} /> // Key Research Implementations
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-heading font-black text-base md:text-lg text-[#2E2430]">LEGIT: Nepali Legal GPT-2 SLM from Scratch</h4>
                
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs md:text-sm text-[#72636B] leading-relaxed">
                <li>Pre-trained a 30M parameter decoder model from scratch utilizing custom-built tokenizers.</li>
                <li>Designed standard memory-mapped array engineering to handle dense pipelines without exceeding RAM allocations.</li>
                <li>Achieved optimal validation perplexity of 1.8 with a raw training parameter set.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-heading font-black text-base md:text-lg text-[#2E2430]">PELIPE: Patient-Agnostic Seizure Classifier</h4>
                
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs md:text-sm text-[#72636B] leading-relaxed">
                <li>Evaluated stacked 1D-CNN baselines for personalized subject classifications.</li>
                <li>Engineered 2D spectrogram conversion pipelines utilizing on-the-fly STFT computations.</li>
                <li>Designed DANN (Domain-Adversarial Neural Networks) regularizers under complex cross-subject evaluations.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 