import type { Metadata } from "next";
import { Phetsarath, Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/drill.css";

const phetsarath = Phetsarath({
  weight: ["400", "700"],
  subsets: ["lao"],
  variable: "--font-lao",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ສູໂຣໂບ ເຈເນເຣເຕີ | SUU-ROBO Generator",
  description:
    "ລະບົບສ້າງແບບຝຶກຫັດຄະນິດສາດອັດຕະໂນມັດ - 算数ドリル自動生成システム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className={`${phetsarath.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

