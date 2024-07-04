import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "~/components/ui/sonner";
import SessionGuard from "./_components/session-guard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider refetchInterval={4 * 60}>
          <SessionGuard>
            <>
              {children}
              <Toaster />
            </>
          </SessionGuard>
        </SessionProvider>
      </body>
    </html>
  );
}
