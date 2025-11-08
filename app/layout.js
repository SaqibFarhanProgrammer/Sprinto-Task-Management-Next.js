import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
