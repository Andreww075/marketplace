import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Definitive Marketplace.",
  description: "Marketplace created with NextJs, Typescript, Tailwind.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
