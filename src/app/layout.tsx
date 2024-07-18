import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layout Cookie test",
  description: "Set and get cookies from the layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900 dark:text-white dark:selection:bg-white/30 dark:selection:text-white">
        {children}
      </body>
    </html>
  );
}
