import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "page d'acceuil",
  description: "faire la présentation du site et gérer aussi la connexion ",
};
// il ne faut pas chercher ton problème ici ce n'est pas ici
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
