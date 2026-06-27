import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "violet" | "default";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    violet: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    default: "bg-neutral-500/10 text-neutral-400 border border-neutral-500/20"
  };

  return (
    <span className={cn("px-2.5 py-0.5 text-xs font-semibold rounded-full tracking-wide inline-block", variants[variant])}>
      {children}
    </span>
  );
}