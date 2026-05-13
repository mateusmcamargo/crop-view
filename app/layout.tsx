import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans, DM_Mono, Syne } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CropView | Controle de Pragas Agrícolas",
  description: "Software de controle de pragas agrícolas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className={`h-full ${dmSans.variable} ${dmMono.variable} ${syne.variable}`}
    >
      <body className="flex h-full">
        <Sidebar />

        <main
          className="flex-1 overflow-auto"
          style={{ background: "var(--background)" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}