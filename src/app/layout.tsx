import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./contexts/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Website",
  description: "Movie WebSite des",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
       <body className={inter.className}>
       <AuthProvider>
        {children}  
        </AuthProvider>
        </body>
      
      
    </html>
  );
}
