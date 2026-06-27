"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Mail } from "lucide-react";
import Logo from "./ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const links = [
    { name: "INIT_HOME", href: "/" },
    { name: "SYS_PROJECTS", href: "/projects/" },
    { name: "CV_RECORDS", href: "/resume/" }
  ];

  const activeLink = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  // Robust email handler to support systems without mail client configurations
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("tishys57@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:tishys57@gmail.com";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F7EFE2] border-b-2 border-[#433347] py-6 px-6 shadow-[0px_4px_0px_0px_rgba(67,51,71,0.15)]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        
        {/* Core system logo anchor */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation Core */}
        <div className="hidden md:flex items-center gap-10 font-mono-tech text-sm md:text-base font-bold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-1 transition-colors ${
                activeLink(link.href) ? "text-[#BC6034]" : "text-[#72636B] hover:text-[#2E2430]"
              }`}
            >
              {activeLink(link.href) ? `[ ${link.name} ]` : link.name}
            </Link>
          ))}
        </div>

        {/* Connection node markers with copy confirmation indicator */}
        <div className="flex items-center gap-6 text-[#72636B] font-mono-tech text-xs md:text-sm relative">
          <span className="hidden lg:inline text-[#9146FF]/70">[ LOC_SEC: KU_DECK ]</span>
          
          <a href="https://github.com/Tishys57" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC6034] transition-colors" aria-label="GitHub Profile">
            <Github size={18} />
          </a>
          
          <div className="relative flex items-center">
            <button onClick={handleEmailClick} className="hover:text-[#BC6034] transition-colors flex items-center" aria-label="Email node">
              <Mail size={18} />
            </button>
            {copied && (
              <span className="absolute bottom-[-32px] right-0 bg-[#433347] text-[#F7EFE2] text-[9px] font-mono-tech px-2.5 py-1 border border-[#BC6034] shadow-md z-50 whitespace-nowrap">
                [COPIED_TO_CLIPBOARD]
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}