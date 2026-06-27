"use client";

import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/Portfolio/nav-logo.png"
        alt="Workstation Logo"
        width="200"
        height="200"
        className="translate-x-4"   
      />
    </div>
  );
}