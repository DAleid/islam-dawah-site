import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نور الإسلام | Noor Al-Islam",
  description: "تعرّف على الإسلام - دين السلام والرحمة | Discover Islam - The Religion of Peace and Mercy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
