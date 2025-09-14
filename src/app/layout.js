// src/app/layout.js

import "../styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Nav />
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
