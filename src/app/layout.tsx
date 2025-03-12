import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Background } from "@/components/background";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio. Here you'll find a showcase of my projects, skills, and experiences. Dive in to learn more about my work and what I can offer.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={cn("relative text-primary-foreground", geistSans.variable, geistMono.variable)}>
        <Background />
				<Navbar />
				<main className="min-h-screen max-w-4xl w-full mx-auto">{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
