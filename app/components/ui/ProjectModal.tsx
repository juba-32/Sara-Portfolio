"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Project } from "../../types";
import GallerySlider from "./GallerySlider";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  const t = useTranslations("projects");

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="
              no-scrollbar
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[60]
              w-[95%]
              max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              bg-background
              rounded-[2rem]
              p-6
            "
          >
            {/* Header */}
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase">
                  {t(`clients.${project.client}`)}
                </h2>

                <p className="opacity-60">
                  {t(`industries.${project.industry}`)}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label={t("close")}
                className="w-10 h-10 rounded-full border"
              >
                ✕
              </button>
            </div>

            {/* Challenge */}
            <div className="mb-10">
              <h3 className="font-bold text-xl mb-3">
                {t("challengeTitle")}
              </h3>

              <p className="opacity-80">
                {t(`challenges.${project.challenge}`)}
              </p>
            </div>

            {/* Galleries */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {project.galleries.map((gallery, index) => (
                <GallerySlider
                  key={index}
                  title={t(`gallery.${gallery.title}`)}
                  images={gallery.images}
                />
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border rounded-2xl p-5 text-center"
                >
                  <p className="text-3xl font-black">
                    {metric.value}
                  </p>

                  <p className="text-sm opacity-60">
                    {t(`metrics.${metric.label}`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}