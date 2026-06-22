"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp } from "../lib/animations";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Hero() {
  const { scrollToSection } = useScrollToSection();
  const t = useTranslations("hero");

  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 md:pt-10 pb-24">
      <div className="text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="
            mb-6
            px-4
            py-2
            rounded-full
            border
            border-foreground/10
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
          "
        >
          {t("badge")}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            tracking-tight
            leading-[0.95]
          "
        >
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
          <span
            className="
              inline-block
              mx-3
              px-4
              py-1
              rounded-2xl
              bg-foreground
              text-background
            "
          >
            {t("headingHighlight")}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="
            mt-8
            max-w-2xl
            text-base
            md:text-lg
            leading-relaxed
          "
        >
          {t("description")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-5
          "
        >
          <motion.button
            onClick={() => scrollToSection("work")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
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
            <span className="relative z-10">
              {t("myWorkButton")}
            </span>

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
        </motion.div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-3
            gap-8
            mt-10
            w-full
            max-w-3xl
          "
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black">50+</h3>
            <p className="text-sm opacity-60 mt-2">
              {t("stats.accounts")}
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-black">10M+</h3>
            <p className="text-sm opacity-60 mt-2">
              {t("stats.views")}
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-black">500%</h3>
            <p className="text-sm opacity-60 mt-2">
              {t("stats.growth")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}