import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRENOVATE – Integrated Communications Agency | Creating & Innovating Ideas at Work",
  description:
    "Crenovate is a premium integrated communications agency helping brands grow through strategic communication, branding, advertising, digital experiences, PR, and creative solutions. Founded 2010.",
  keywords:
    "integrated communications agency, branding, advertising, digital marketing, PR, Mumbai, Indore, Raipur, Australia",
  openGraph: {
    title: "CRENOVATE – Creating and Innovating Ideas at Work",
    description:
      "Premium integrated communications agency for strategic branding, advertising, digital, and PR solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased bg-white text-gray-900">
        <CustomCursor />
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
