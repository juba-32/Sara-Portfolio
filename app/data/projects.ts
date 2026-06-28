import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    client: "rimasTravel",
    industry: "travelTourism",
    category: "instagram",
    challenge: "lowEngagement",

    metrics: [
      {
        label: "followers",
        value: "+11K",
      },
      {
        label: "engagement",
        value: "+42%",
      },
      {
        label: "sales",
        value: "+28%",
      },
    ],

    layout: "standard",
    logo: "/assets/rimas.jpeg",

    galleries: [
      {
        title: "posts",
        images: [
          "/assets/rimas-a.webp",
          "/assets/rimas-b.webp",
          "/assets/rimas-c.webp",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/rimas-ins-1.webp",
          "/assets/rimas-ins-2.webp",
          "/assets/rimas-ins-3.webp",
        ],
      },
    ],
  },

  {
    id: 2,
    client: "nasijAlJamal",
    industry: "fashion",
    category: "instagram",
    challenge: "lowEngagement",

    metrics: [
      {
        label: "followers",
        value: "+15K",
      },
      {
        label: "engagement",
        value: "+42%",
      },
      {
        label: "sales",
        value: "+48%",
      },
    ],

    logo: "/assets/Nasij-aljamal.png",
    layout: "standard",

    galleries: [
      {
        title: "posts",
        images: [
          "/assets/nasij-1.webp",
          "/assets/nasij-2.webp",
          "/assets/nasij-3.webp",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/nasij-ins-2.webp",
          "/assets/nasij-ins-1.webp",
          "/assets/nasij-ins-3.webp",
          "/assets/nasij-ins-4.webp",
        ],
      },
    ],
  },

  {
    id: 3,
    client: "chicket",
    industry: "foodBeverage",
    category: "tiktok",
    challenge: "lowEngagement",

    metrics: [
      {
        label: "followers",
        value: "+9K",
      },
      {
        label: "engagement",
        value: "+42%",
      },
      {
        label: "sales",
        value: "+34%",
      },
    ],

    logo: "/assets/chicket-logo.png",
    layout: "standard",

    galleries: [
      {
        title: "posts",
        images: [
          "/assets/cheket-1.webp",
          "/assets/cheket-2.webp",
          "/assets/cheket-3.webp",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/cheket-ins-1.webp",
          "/assets/cheket-ins-2.webp",
        ],
      },
    ],
  },
];