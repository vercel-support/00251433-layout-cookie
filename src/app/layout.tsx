import { cookies } from "next/headers";
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
  const allCookies = cookies().getAll();
  return (
    <html lang="en">
      <body className="p-4 dark:bg-zinc-900 dark:text-white dark:selection:bg-white/30 dark:selection:text-white">
        {children}
        {allCookies.map((cookie) => (
          <div key={cookie.name}>
            <p>Cookie name: {cookie.name}</p>
            <p>Cookie value: {cookie.value}</p>
          </div>
        ))}
      </body>
    </html>
  );
}
