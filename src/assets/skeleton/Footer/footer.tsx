import {FaTerminal} from "react-icons/fa6";
import {Trans} from "react-i18next";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import {Link} from "react-router-dom";

export function Footer() {
    return <>
        <footer className="footer items-center border-t border-base-content/10 bg-base-100 px-4 py-6 sm:px-6">
            <aside className="grid-flow-col items-center">
                <FaTerminal className="flex-none"/>
                <strong className="text-xl mr-5">pdwn</strong>
                <Trans i18nKey={'main.footer.copyright'}
                       components={{currentyear: <span>{new Date().getFullYear()}</span>}}
                           />
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to='https://www.linkedin.com/in/papdawin' aria-label="LinkedIn"><IoLogoLinkedin /></Link>
                <Link to='https://github.com/papdawin' aria-label="GitHub"><IoLogoGithub /></Link>
            </nav>
        </footer>
    </>
}