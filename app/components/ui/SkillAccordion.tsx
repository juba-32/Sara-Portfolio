"use client";

import { AnimatePresence, motion } from "framer-motion";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Skill } from "../../types/index";

interface Props {
  skill: Skill;
  isOpen: boolean;
  onToggle: () => void;
}

export default function SkillAccordion({
  skill,
  isOpen,
  onToggle,
}: Props) {
  return (
    <motion.div
      layout
      className="
        border
        border-foreground/5
        rounded-2xl
        overflow-hidden
      "
    >
      <button
        onClick={onToggle}
        className="
          w-full
          p-5
          flex
          justify-between
          items-center
          text-left
        "
      >
        <span className="font-bold uppercase text-sm">
          {skill.title}
        </span>

        <span className="p-1 rounded-full bg-foreground/5">
          {isOpen ? (
            <LuMinus size={16} />
          ) : (
            <GoPlus size={16} />
          )}
        </span>
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
            className="
              px-5
              pb-5
              text-sm
              opacity-70
              leading-relaxed
            "
          >
            {skill.desc}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}