import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SARAH",
  description:
    "Elevate your online presence with Sara's creative social media management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}