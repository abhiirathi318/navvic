"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--border)] bg-surface px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 text-white shadow-lg"
        style={{ marginLeft: isDark ? 0 : "auto" }}
      >
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </motion.span>
    </button>
  );
}
