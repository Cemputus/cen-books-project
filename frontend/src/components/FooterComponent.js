import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function FooterComponent(props) {
    return (
        <div
            className={
                props.position === "absolute"
                    ? props.page === "Home"
                        ? "footer footer-home footer-absolute"
                        : "footer footer-absolute"
                    : "footer"
            }
        >
            <p className="copyright">© 2024 CEN-BOOKS(Emmanuel Nsubuga 💫) | Follow me on</p>
            <ul className="footer-list">
                <li className="footer-item">
                    <a href="https://github.com/Cemputus" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://twitter.com/hezron_xerxes" target="_blank" rel="noreferrer">
                        <FaTwitterSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.linkedin.com/in/nsubuga-emmanuel-780366237/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.instagram.com/cemputus/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
                
            </ul>
        </div>
    );
}

export default FooterComponent;
