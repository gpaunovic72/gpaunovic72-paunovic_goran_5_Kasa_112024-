import LogoDark from "../../assets/logo-dark.webp";
import "../Footer/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={LogoDark} alt="logo Kasa" className="footer__logo" />
      <div className="footer__copyright">
        <p className="footer__copyright--p">
          &copy; 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
