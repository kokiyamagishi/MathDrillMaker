import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/drill.css";

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
    <html lang="lo">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Phetsarath:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
