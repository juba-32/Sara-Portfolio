"use client";

import { useTheme } from "next-themes";
import { CiSun } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="
        w-10
        h-10
        rounded-full
        border
        border-foreground/10
        flex
        items-center
        justify-center
        hover:bg-foreground/5
        transition-all
        duration-300
      "
    >
      {resolvedTheme === "dark" ? (
        <CiSun size={18} />
      ) : (
        <IoMoon size={18} />
      )}
    </button>
  );
}