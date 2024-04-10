import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "./components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReWeb Beta",
  description: "by Daksh & Daanish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Menu />
          {children}
        </main>
        
      </body>
    </html>
  );
}
