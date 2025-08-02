import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Nanum_Myeongjo,
  Playfair_Display,
  Gothic_A1,
} from "next/font/google";
import "./globals.css";

// const pacifico = Pacifico({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-pacifico",
// });

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const gothicA1 = Gothic_A1({
  variable: "--font-gothic-a1",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hausline Interior",
  description: "Hausline by Rg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${gothicA1.variable} ${poppins.variable} ${playfairDisplay.variable} ${nanumMyeongjo.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
