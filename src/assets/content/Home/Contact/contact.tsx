import {IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";
import {Link} from "react-router-dom";

export function Contact() {
    return <>
        <div className="flex gap-3">
            <Link className="grid h-12 w-12 place-items-center border border-base-content/10 text-primary transition-colors hover:border-primary" to='https://www.linkedin.com/in/papdawin' aria-label="LinkedIn"><IoLogoLinkedin size={24}/></Link>
            <Link className="grid h-12 w-12 place-items-center border border-base-content/10 text-primary transition-colors hover:border-primary" to='https://github.com/papdawin' aria-label="GitHub"><IoLogoGithub size={24}/></Link>
            <Link className="grid h-12 w-12 place-items-center border border-base-content/10 text-primary transition-colors hover:border-primary" to='mailto:papdavid98@gmail.com' aria-label="Email"><IoMail size={24}/></Link>
        </div>
    </>;
}