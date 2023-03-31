import React, { useState } from "react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Header/navbar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Navbar />
        <br></br>
        <br></br>

        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Adresse mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Raison du contact :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
      <div className="contact">
        <p>Notre adresse : </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.130857801912!2d3.147439815741771!3d50.736061779515836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1680273037018!5m2!1sfr!2sfr"></iframe>
      </div>
      <Footer />
    </form>
  );
}

export default Contact;
