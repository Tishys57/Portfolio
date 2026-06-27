"use client";

import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Renders your custom PNG branding asset instead of the text name */}
      <img
        src="/nav-logo.png" // Maps to public/nav-logo.png
        alt="Tishya Dhakal Workstation Logo"
        className="h-8 md:h-9 w-auto object-contain" // Height is locked to 32px-36px to align perfectly in the nav
      />
    </div>
  );
}