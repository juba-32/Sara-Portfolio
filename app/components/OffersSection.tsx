"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";

export default function OffersSection() {
  const t = useTranslations("offers");
  const locale = useLocale();

  const packages = [
    {
      key: "starter",
      price: "$250",
      featured: false,
      features: t.raw("packages.starter.features") as string[],
    },
    {
      key: "premium",
      price: "$500",
      featured: true,
      features: t.raw("packages.premium.features") as string[],
    },
    {
      key: "growth",
      price: "$800",
      featured: false,
      features: t.raw("packages.growth.features") as string[],
    },
    {
      key: "elite",
      price: "$1500",
      featured: false,
      features: t.raw("packages.elite.features") as string[],
    },
  ];

  return (
    <section id="offers" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] opacity-60">
            {t("badge")}
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">{t("title")}</h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const packageName = t(`packages.${pkg.key}.name`);

            const whatsappMessage =
              locale === "ar"
                ? `مرحباً سارة، أرغب في الاشتراك في ${packageName} وأود معرفة المزيد من التفاصيل.`
                : `Hello Sarah, I'm interested in the ${packageName} and would like more details.`;

            return (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`
                  relative
                  rounded-[2rem]
                  border
                  p-8
                  overflow-hidden
                  transition-all
                  backdrop-blur-sm
                  ${
                    pkg.featured
                      ? "border-yellow-500 shadow-xl shadow-yellow-500/10"
                      : "border-foreground/10"
                  }
                `}
              >
                {pkg.featured && (
                  <div
                    className="
                      absolute
                      top-2
                      right-5
                      px-3
                      py-1
                      rounded-full
                      bg-yellow-500
                      text-black
                      text-xs
                      font-bold
                    "
                  >
                    {t("mostPopular")}
                  </div>
                )}

                <h3 className="text-2xl font-black mb-6">{packageName}</h3>

                <div className="mb-8">
                  <span className="text-5xl font-black">{pkg.price}</span>

                  <span className="opacity-60 ml-2">{t("perMonth")}</span>
                </div>

                <div className="space-y-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <FiCheck className="text-green-500 mt-1 shrink-0" />

                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/201023329000?text=${encodeURIComponent(
                    whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    mt-10
                    py-3
                    rounded-full
                    bg-foreground
                    text-background
                    font-medium
                    flex
                    items-center
                    justify-center
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  {t("getStarted")}
                </a>
              </motion.div>
            );
          })}
        </div>
        {/* Terms Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-[2rem]
            border
            border-foreground/10
            p-8
            md:p-10
          "
        >
          <h3 className="text-3xl font-black mb-8">{t("termsTitle")}</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-foreground/10 p-5">
              <h4 className="font-bold mb-2">{t("workingDays")}</h4>

              <p className="text-muted-foreground">{t("workingDaysValue")}</p>
            </div>

            <div className="rounded-2xl border border-foreground/10 p-5">
              <h4 className="font-bold mb-2">{t("daysOff")}</h4>

              <p className="text-muted-foreground">{t("daysOffValue")}</p>
            </div>

            <div className="rounded-2xl border border-foreground/10 p-5">
              <h4 className="font-bold mb-2">{t("availability")}</h4>

              <p className="text-muted-foreground">{t("availabilityValue")}</p>
            </div>

            <div className="rounded-2xl border border-foreground/10 p-5">
              <h4 className="font-bold mb-2">{t("outOfScope")}</h4>

              <p className="text-muted-foreground">{t("outOfScopeValue")}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-foreground/10 p-5">
            <p className="text-muted-foreground leading-relaxed">
              {t("responsePolicy")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
