"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const whatsappNumber = "201023329000";
  const email = "sarahabdullatiefmoustafa@gmail.com";
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-foreground/90
            to-foreground
            text-background
            p-6
            md:p-10
          "
        >
          {/* Light Reflection */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]
              pointer-events-none
            "
          />

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-8
              relative
              z-10
            "
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.2em] opacity-80">
                  Available For Freelance Work
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase">
                Ready To Grow
                <br />
                Your Brand?
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center">
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
      h-11
      px-5
      rounded-full
      bg-background
      text-foreground
      font-medium
      flex
      items-center
      gap-2
      transition-all
    "
              >
                <FiMail className="text-lg" />
                Email Me
              </motion.a>

              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
      h-11
      px-5
      rounded-full
      bg-green-500
      hover:bg-green-600
      text-white
      font-medium
      flex
      items-center
      gap-2
      transition-all
    "
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div
          className="
            mt-24
            grid
            grid-cols-1
            md:grid-cols-3
            gap-14
          "
        >
          {/* About */}
          <div>
            <h3 className="text-2xl font-black mb-5">SARA</h3>

            <p className="text-muted-foreground leading-relaxed">
              Social Media Manager helping brands grow through strategic
              content, audience engagement and performance-driven campaigns.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-black mb-5">Sitemap</h3>

            <div className="flex flex-col gap-3">
              {["about", "work", "skills", "offers", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 6 }}
                  onClick={() => scrollToSection(item)}
                  className="
                    text-left
                    text-muted-foreground
                    hover:text-foreground
                    transition
                  "
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black mb-5">Contact</h3>

            <div className="flex flex-col gap-4">
              <motion.a
                whileHover={{ x: 6 }}
                href={`mailto:${email}`}
                className="
                  flex
                  items-center
                  gap-3
                  text-muted-foreground
                  hover:text-red-500
                  transition-colors
                "
              >
                <FiMail className="text-lg" />
                {email}
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                href="https://www.linkedin.com/in/sarah-kamal-7905a5412/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-muted-foreground
                  hover:text-[#0A66C2]
                  transition-colors
                "
              >
                <FiLinkedin className="text-lg" />
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                href="https://www.instagram.com/sarah.kamal.193"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-muted-foreground
                  hover:text-pink-500
                  transition-colors
                "
              >
                <FiInstagram className="text-lg" />
                Instagram
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-muted-foreground
                  hover:text-green-500
                  transition-colors
                "
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            mt-20
            pt-8
            border-t
            border-foreground/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-sm
            text-muted-foreground
          "
        >
          <span>© {new Date().getFullYear()} SARA</span>

          <span>Social Media Manager • Content Strategist</span>

          <span>
            Created & Designed by{" "}
            <a
              href="https://wa.me/201023329000"
              target="_blank"
              rel="noopener noreferrer"
              className="
      font-bold
      bg-gradient-to-r
      from-yellow-500
      to-orange-500
      bg-clip-text
      text-transparent
      hover:opacity-80
      transition
    "
            >
              Ahmed Bendary
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
