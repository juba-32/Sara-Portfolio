"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export default function OfferCard({ title, desc, icon: Icon }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        bg-background
        rounded-[2rem]
        p-8
        border
        border-foreground/5
        h-full
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-foreground/5
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <Icon size={22} />
      </div>

      <h3 className="text-3xl font-black uppercase mb-4">{title}</h3>

      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}
