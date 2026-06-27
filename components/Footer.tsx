"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("tishys57@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:tishys57@gmail.com";
  };

  return (
    <footer className="w-full bg-[#F7EFE2] border-t-4 border-[#433347] py-12 px-6 z-10 shadow-[0px_-6px_0px_0px_rgba(54,31,48,0.15)] mt-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative">
        <div>
          <p className="font-mono-tech font-bold text-base tracking-wider text-[#361f30] cyber-chromatic">TISHYA DHAKAL</p>
          <p className="text-xs font-mono-tech text-[#72636B] mt-1">© {new Date().getFullYear()} WORKSTATION // ALL RECORDS VERIFIED.</p>
        </div>

        <div className="flex items-center gap-8 text-sm font-mono-tech font-bold text-[#72636B]">
          <Link href="/projects/" className="hover:text-[#BC6034] transition-colors">SYS_PROJECTS</Link>
          <Link href="/resume/" className="hover:text-[#BC6034] transition-colors">CV_RECORDS</Link>
          <a href="mailto:tishys57@gmail.com" className="hover:text-[#BC6034] transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-4 font-mono-tech relative">
          <a 
            href="https://github.com/tishya-dhakal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 bg-[#F7EFE2] border-2 border-[#361f30] text-[#361f30] hover:text-[#BC6034] hover:border-[#BC6034] hover:shadow-[4px_4px_0px_0px_#a300e0] transition-all" 
            aria-label="Github Profile"
          >
            <Github size={18} />
          </a>
          
          <div className="relative flex items-center">
            <button 
              onClick={handleEmailClick}
              className="p-2.5 bg-[#F7EFE2] border-2 border-[#361f30] text-[#361f30] hover:text-[#BC6034] hover:border-[#BC6034] hover:shadow-[4px_4px_0px_0px_#a300e0] transition-all flex items-center" 
              aria-label="Email Link"
            >
              <Mail size={18} />
            </button>
            {copied && (
              <span className="absolute top-[-36px] right-0 bg-[#433347] text-[#F7EFE2] text-[9px] font-mono-tech px-2.5 py-1 border border-[#BC6034] shadow-md z-50 whitespace-nowrap">
                [COPIED_TO_CLIPBOARD]
              </span>
            )}
          </div>

          <button 
            onClick={scrollToTop} 
            className="p-2.5 bg-[#F7EFE2] border-2 border-[#361f30] text-[#361f30] hover:text-[#BC6034] hover:border-[#BC6034] hover:shadow-[4px_4px_0px_0px_#a300e0] transition-all" 
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}