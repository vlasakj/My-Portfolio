import { FaSquareXTwitter, } from "react-icons/fa6";
import logo from "../assets/logojv.webp"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-betwwen py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src = {logo} className="mx-2" width={50} height={33} alt="Logo" />
            </a>
        </div>
        <div className="m-9 flex items-end justify-center gap-4 text-2xl hover: ">
            <a href="https://www.linkedin.com/in/janvlasak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600">
                   <FaLinkedin />
                </a>
            <a href="https://github.com/vlasakj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-500">
                   <FaGithub />
            </a>
            <a href="https://www.instagram.com/jvlasak_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500">
                   <FaInstagram/>
            </a>
            <a href="https://x.com/honza_vlasak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-stone-800">
                   <FaSquareXTwitter />
            </a>
        </div>
    </nav> 
  )
}

export default Navbar
