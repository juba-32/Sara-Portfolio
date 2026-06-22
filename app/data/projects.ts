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
          "/assets/rimas-1.avif",
          "/assets/rimas-2.avif",
          "/assets/rimas-3.avif",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/insights-1.avif",
          "/assets/insights-2.avif",
          "/assets/insights-3.avif",
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
          "/assets/rimas-1.avif",
          "/assets/adidas/post2.jpg",
          "/assets/adidas/post3.jpg",
          "/assets/adidas/post4.jpg",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/adidas/story1.jpg",
          "/assets/adidas/story2.jpg",
          "/assets/adidas/story3.jpg",
          "/assets/adidas/story4.jpg",
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
          "/assets/adidas/post1.jpg",
          "/assets/adidas/post2.jpg",
          "/assets/adidas/post3.jpg",
          "/assets/adidas/post4.jpg",
        ],
      },
      {
        title: "insights",
        images: [
          "/assets/adidas/story1.jpg",
          "/assets/adidas/story2.jpg",
          "/assets/adidas/story3.jpg",
        ],
      },
    ],
  },
];