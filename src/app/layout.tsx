"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import firebaseConfig from "@/config/firebase";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-serif"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          {children}
        </FirebaseAppProvider>
      </body>
    </html>
  );
}
