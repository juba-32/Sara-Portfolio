"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DecorativeFlowers() {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-10
        left-0
        md:left-8
        lg:left-20
        pointer-events-none
        opacity-50
        z-0
      "
    >
      <Image
        src="/assets/f1.png"
        alt=""
        width={200}
        height={200}
        className="
          w-24
          sm:w-32
          md:w-48
          lg:w-64
          xl:w-72
          h-auto
        "
      />
    </motion.div>
  );
}