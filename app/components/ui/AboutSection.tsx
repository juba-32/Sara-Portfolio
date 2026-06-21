"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-end mb-16"
        >
          <div className="flex items-center gap-5">
            <h2 className="text-4xl md:text-6xl font-black">About Sarah </h2>

            <div className="w-2 h-20 bg-yellow-500 rounded-full" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6">SARAH</h3>

            <p className="text-lg leading-loose text-muted max-w-xl mx-auto">
              With a passion for digital marketing and brand storytelling, I
              help businesses elevate their online presence through tailored
              strategies, compelling content, and data-backed decisions. My
              mission? To create content that truly connects, drives high
              engagement, and delivers measurable growth.
            </p>

            <div className="flex justify-center gap-8 mt-8">
              <a
                href="https://wa.me/201023329000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/sarah-kamal-7905a5412/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="https://www.instagram.com/sarah.kamal.193"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="
                relative
                w-[280px]
                h-[420px]
                md:w-[380px]
                md:h-[560px]
                overflow-hidden
                rounded-[50%]
              "
            >
              <Image
                src="/assets/sara.avif"
                alt="Sara"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
