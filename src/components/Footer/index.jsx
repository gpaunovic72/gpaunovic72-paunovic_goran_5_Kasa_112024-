import LogoDark from "../../assets/mobile-logo-dark.webp";
import "../Footer/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={LogoDark} alt="logo Kasa" className="FooterLogo" />
      <div className="copyright">
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
