"use client";

import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/Portfolio/nav-logo.png" 
        alt="Workstation Logo"
        width="40"
        height="40"
        className="object-contain border-2 border-[#433347] bg-[#F2E6D6]"
      />
    </div>
  );
}