// src/components/Footer.js

import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} TAHBOUB. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
