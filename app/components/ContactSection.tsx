"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  const navT = useTranslations("navbar");

  const locale = useLocale();
  const isRTL = locale === "ar";

  const whatsappNumber = "201023329000";
  const email = "sarahabdullatiefmoustafa@gmail.com";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems = ["about", "work", "skills", "offers", "contact"];

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
              relative
              z-10
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-8
            "
          >
            <div className={isRTL ? "text-right" : "text-left"}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.2em] opacity-80">
                  {t("available")}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase">
                {t("titleLine1")}
                <br />
                {t("titleLine2")}
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
                "
              >
                <FiMail className="text-lg" />
                {t("emailMe")}
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
                "
              >
                <FaWhatsapp className="text-lg" />
                {t("whatsapp")}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div
          className={`
            mt-24
            grid
            grid-cols-1
            md:grid-cols-3
            gap-14
            ${isRTL ? "text-right" : "text-left"}
          `}
        >
          {/* About */}
          <div
            className={`flex flex-col ${
              isRTL ? "items-start " : "items-start"
            }`}
          >
            <h3 className="text-2xl font-black mb-5">
              {t("brand")}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {t("about")}
            </p>
          </div>

          {/* Sitemap */}
          <div
            className={`flex flex-col ${
              isRTL ? "items-start" : "items-start"
            }`}
          >
            <h3 className="text-xl font-black mb-5">
              {t("sitemap")}
            </h3>

            <div
              className={`flex flex-col gap-3 ${
                isRTL ? "items-start" : "items-start"
              }`}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{
                    x: isRTL ? -6 : 6,
                  }}
                  onClick={() => scrollToSection(item)}
                  className={`
                    w-fit
                    text-muted-foreground
                    hover:text-foreground
                    transition
                    ${isRTL ? "text-right" : "text-left"}
                  `}
                >
                  {navT(item)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            className={`flex flex-col ${
              isRTL ? "items-start" : "items-start"
            }`}
          >
            <h3 className="text-xl font-black mb-5">
              {t("contact")}
            </h3>

            <div className="flex flex-col gap-4">
              <motion.a
                whileHover={{ x: isRTL ? -6 : 6 }}
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
                whileHover={{ x: isRTL ? -6 : 6 }}
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
                {t("linkedin")}
              </motion.a>

              <motion.a
                whileHover={{ x: isRTL ? -6 : 6 }}
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
                {t("instagram")}
              </motion.a>

              <motion.a
                whileHover={{ x: isRTL ? -6 : 6 }}
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
                {t("whatsapp")}
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
          <span>
            © {new Date().getFullYear()} {t("brand")}
          </span>

          <span>{t("footerRole")}</span>

          <span>
            {t("createdBy")}{" "}
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