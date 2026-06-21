"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../types";
import GallerySlider from "./GallerySlider";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="no-scrollbar fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto  bg-background  rounded-[2rem] p-6"
          >
            {/* header */}
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase">
                  {project.client}
                </h2>
                <p className="opacity-60">{project.industry}</p>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border"
              >
                ✕
              </button>
            </div>

            {/* challenge */}
            <div className="mb-10">
              <h3 className="font-bold text-xl mb-3">Challenge</h3>
              <p className="opacity-80">{project.challenge}</p>
            </div>

            {/* images */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {project.galleries.map((gallery, index) => (
                <GallerySlider
                  key={index}
                  title={gallery.title}
                  images={gallery.images}
                />
              ))}
            </div>

            {/* metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="border rounded-2xl p-5 text-center"
                >
                  <p className="text-3xl font-black">{m.value}</p>
                  <p className="text-sm opacity-60">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
