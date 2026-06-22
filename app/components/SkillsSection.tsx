"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslations } from "next-intl";

import { skills } from "../data/skills";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function SkillsSection() {
  const t = useTranslations("skills");

  const { scrollToSection } = useScrollToSection();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-sm uppercase tracking-widest opacity-60">
              {t("badge")}
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              {t("description")}
            </p>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="
                mt-8
                px-6
                py-3
                rounded-full
                bg-foreground
                text-background
                font-medium
                shadow-lg
                relative
                overflow-hidden
              "
            >
              <span className="relative z-10">{t("cta")}</span>

              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  skew-x-12
                "
              />
            </motion.button>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {skills.map((skill, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={skill.title}
                  layout
                  className="
                    rounded-[2rem]
                    border
                    border-foreground/10
                    overflow-hidden
                    bg-card
                  "
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="
                      w-full
                      flex
                      justify-between
                      items-center
                      p-6
                      text-left
                    "
                  >
                    <h3 className="font-bold text-lg">
                      {t(`items.${skill.title}.title`)}
                    </h3>

                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <p
                          className="
                            px-6
                            pb-6
                            text-muted-foreground
                            leading-relaxed
                          "
                        >
                          {t(`items.${skill.title}.description`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}