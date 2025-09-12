// src/components/Topbar.js
import Link from "next/link";
import "../../styles/topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="https://wa.me/213555555555" target="_blank">📱 WhatsApp</a>
        <a href="mailto:contact@tahboub.com">✉️ Email</a>
      </div>
      <div className="topbar-right">
        <select>
          <option>FR</option>
          <option>EN</option>
          <option>AR</option>
          <option>中文</option>
          <option>TR</option>
        </select>
      </div>
    </div>
  );
}
