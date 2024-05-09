import type { Metadata } from "next";
import "./ui/globals.css";
import SideNav from "@/app/ui/sidenav";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { inter } from '@/app/ui/fonts';
import Providers from "@/app/ui/Providers";

export const metadata: Metadata = {
  title: {
    template: '%s | Gamor Site Web',
    default: 'Gamor Site Web',
  },
  description: "Streaming Plataform for Gamor",
  keywords: "Gamor, Streaming, Game",
  icons: "favicon.ico",
};


export default function RootLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
          <div className="flex min-h-screen flex-col items-center justify-between bg-gray-500 p-16">
            <div className="flex min-h-full flex-col items-center justify-between bg-gray-100 dark:bg-gray-800 p-8">
              <div className="flex min-h-full flex-col justify-between">
                <SideNav />
                <Providers>{children}</Providers>
                
                
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

