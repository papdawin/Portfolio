import {IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";
import {Link} from "react-router-dom";

export function Contact() {
    return <>
        <div className="flex justify-center h-20">
            <div className="flex justify-between w-80 space">
                <Link to='https://www.linkedin.com/in/papdawin'><IoLogoLinkedin size={60} color='oklch'/></Link>
                <Link to='https://github.com/papdawin'><IoLogoGithub size={60} color='oklch'/></Link>
                <Link to='mailto:papdavid98@gmail.com'><IoMail size={60} color='oklch'/></Link>
            </div>
        </div>
    </>;
}