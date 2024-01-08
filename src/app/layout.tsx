"use client";

import { Inter, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import firebaseConfig from "@/config/firebase";
import Navbar from "@/lib/navabr";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-serif",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} ${inter.variable}`}
    >
      <body>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Navbar />
          {children}
        </FirebaseAppProvider>
      </body>
    </html>
  );
}
