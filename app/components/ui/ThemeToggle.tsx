"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-foreground/10" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-all duration-300"
    >
      {resolvedTheme === "dark" ? (
        <CiSun size={18} />
      ) : (
        <IoMoon size={18} />
      )}
    </button>
  );
}