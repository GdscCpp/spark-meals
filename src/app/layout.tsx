"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FirebaseAppProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import firebaseConfig from "@/config/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>{children}</FirebaseAppProvider>
      </body>
    </html>
  );
}
