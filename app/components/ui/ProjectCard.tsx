"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Project } from "../../types";

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  const t = useTranslations("projects");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();

    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;

    x.set(xPos);
    y.set(yPos);
  }

  return (
    <motion.div
      onClick={onClick}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="
        relative
        h-[340px]
        rounded-[2rem]
        overflow-hidden
        cursor-pointer
        group
        [transform-style:preserve-3d]
      "
    >
      {/* Image */}
      {project.logo && (
        <Image
          src={project.logo}
          alt={t(`clients.${project.client}`)}
          fill
          className="
            object-cover
            scale-105
            group-hover:scale-110
            transition
            duration-700
          "
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top */}
        <div>
          <h3 className="text-black text-2xl font-black uppercase">
            {t(`clients.${project.client}`)}
          </h3>

          <p className="text-black/80 text-sm">
            {t(`industries.${project.industry}`)}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-end items-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="
              px-5
              py-2
              rounded-full
              bg-white
              text-black
              text-sm
              font-bold
              hover:scale-105
              transition
            "
          >
            {t("viewProject")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}