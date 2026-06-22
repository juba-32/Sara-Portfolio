"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTranslations, useLocale } from "next-intl";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("navbar");

  const navLinks = [
    { label: t("about"), id: "about" },
    { label: t("work"), id: "work" },
    { label: t("skills"), id: "skills" },
    { label: t("offers"), id: "offers" },
    { label: t("contact"), id: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          sticky top-0 z-50
          backdrop-blur-md
          bg-background/80
          border-b border-foreground/5
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="font-black text-xl tracking-tight cursor-pointer"
          >
            {t("sarah")}
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-sm font-medium transition"
                >
                  <span
                    className={`transition ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-foreground rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t("closeMenu") : t("openMenu")}
              className="md:hidden w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center"
            >
              {isOpen ? <IoClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ duration: 0.3 }}
              className={`
                fixed top-0
                ${isRTL ? "left-0 border-r" : "right-0 border-l"}
                h-screen w-[280px]
                bg-background
                border-foreground/10
                z-50 md:hidden
                p-6
              `}
            >
              {/* Close button */}
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label={
                    isRTL ? t("closeNavigationMenu") : t("closeNavigationMenu")
                  }
                  className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center"
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        scrollToSection(link.id);
                        setIsOpen(false);
                      }}
                      className={`text-lg font-semibold transition ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-12 pt-6 border-t border-foreground/10">
                <p className="text-sm opacity-50">{t("socialMediaManager")}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
