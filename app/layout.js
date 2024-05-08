import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "NoteSavvy",
  description: "Save Your Notes in One Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
