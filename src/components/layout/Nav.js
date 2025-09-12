// src/components/Nav.js

"use client";

import { useState } from "react";
import "../../styles/nav.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
        {/* Logo image */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo TAHBOUB"
              width={120} // tu peux ajuster
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Burger button */}
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <nav className={`nav-menu ${open ? "show" : ""}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={() => setOpen(false)}>Accueil</Link></li>
            <li><Link href="/products" onClick={() => setOpen(false)}>Produits</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>À propos</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
