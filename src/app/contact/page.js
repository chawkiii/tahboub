// src/app/contact/page.js

"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "../../styles/contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email && !formData.whatsapp) {
      setStatus("Veuillez renseigner un email ou un WhatsApp.");
      return;
    }

    setStatus("Envoi en cours...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message envoyé avec succès !");
          setFormData({ name: "", email: "", whatsapp: "", message: "" });
        },
        () => {
          setStatus("❌ Erreur lors de l’envoi, réessayez.");
        }
      );
  };

  return (
    <main>
    <div className="contact-container">
      {/* Texte intro */}
        <h1>Donnez vie à vos idées avec TAHBOUB</h1>
        <p>
        Machines, véhicules, matières premières ou équipements agricoles :  
        nous proposons des <strong>solutions adaptées</strong> à vos besoins.  
        Contactez-nous dès aujourd’hui pour recevoir une réponse rapide et <strong>un devis personnalisé</strong>.
        </p>




      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nom ou Société (facultatif)"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email (obligatoire si pas de WhatsApp)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="whatsapp"
          placeholder="Numéro WhatsApp (obligatoire si pas d’email)"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Votre message *"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
        <button type="submit">Envoyer</button>
      </form>

      {status && <p className="contact-status">{status}</p>}

      {/* Réseaux sociaux */}
      <div className="contact-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/213XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Google Maps */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=TON_PB_COMPLET"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </main>
  );
}
