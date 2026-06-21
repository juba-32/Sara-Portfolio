"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import OfferCard from "../components/ui/OfferCard";
import { offers } from "../data/offers";

export default function OffersSection() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="offers"
      className="py-24 px-6"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[3rem]
          bg-card
          p-8
          md:p-14
        "
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            MY OFFERS
          </h2>

          <p className="text-muted-foreground">
            Services designed to help brands grow.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <OfferCard {...offer} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <motion.button
            onClick={scrollToContact}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-foreground
              text-background
              font-medium
            "
          >
            Let's Work Together
            <FiArrowUpRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}