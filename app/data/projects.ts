import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    client: "RIMA's TRAVEL",
    industry: "Travel & tourism",
    category: "Instagram",
    challenge:
      "The account suffered from low engagement and inconsistent branding.",
    metrics: [
      {
        label: "Followers",
        value: "+11K",
      },
      {
        label: "Engagement",
        value: "+42%",
      },
      {
        label: "Sales",
        value: "+28%",
      },
    ],

    layout: "standard",
    logo: "/assets/rimas.jpeg",
    galleries: [
      {
        title: "Posts",
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
    client: "Nasij Al jamal",
    industry: "Fashion",
    category: "Platform Name",
    challenge:
      "The account suffered from low engagement and inconsistent branding.",

    metrics: [
      {
        label: "Followers",
        value: "+15K",
      },
      {
        label: "Engagement",
        value: "+42%",
      },
      {
        label: "Sales",
        value: "+48%",
      },
    ],
    logo: "/assets/Nasij-aljamal.png",
    layout: "standard",
    galleries: [
      {
        title: "Posts",
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
    client: "Chicket",
    industry: "Food & Beverage",
    category: "Platform Name",
    logo: "/assets/chicket-logo.png",
    challenge:
      "The account suffered from low engagement and inconsistent branding.",
    metrics: [
      {
        label: "Followers",
        value: "+9K",
      },
      {
        label: "Engagement",
        value: "+42%",
      },
      {
        label: "Sales",
        value: "+34%",
      },
    ],
    layout: "standard",
    galleries: [
      {
        title: "Posts",
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