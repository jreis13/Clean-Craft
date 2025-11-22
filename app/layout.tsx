import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clean Craft - Power Wash",
  description:
    "Limpeza profissional de alta pressão para fachadas, calçadas, piscinas e muito mais.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${poppins.className} bg-background text-deep`}>
        {props.children}
      </body>
    </html>
  );
}
