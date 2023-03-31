import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f1ceceda", color: "#fff", padding: "20px", marginTop: "30px", position: "fixed" ,bottom: 0, width: "100%" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", }}>
        <p>Nos réseaux sociaux : </p>
        <a href='https://www.facebook.com/LaTableDeChantal/?locale=fr_FR' className='Facebook'>
            <img src='assets/facebook.png' alt = " " style={{width: "30px", height: "30px", marginLeft: "10px"}}/>
        </a>
        <a href='https://www.instagram.com' className='Instagram'>
            <img src='assets/instagram.png' alt = " " style={{width: "30px", height: "30px", marginRight: "30px" }}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;