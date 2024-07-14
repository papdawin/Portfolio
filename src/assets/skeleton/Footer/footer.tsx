import {FaTerminal} from "react-icons/fa6";
import {Trans, useTranslation} from "react-i18next";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import {Link} from "react-router-dom";

export function Footer() {
    const { t, i18n } = useTranslation();
    return <>
        <footer className="footer bg-base-100 items-center p-4">
            <aside className="grid-flow-col items-center">
                <FaTerminal className="flex-none"/>
                <strong className="text-xl mr-5">pdwn</strong>
                <Trans i18nKey={'main.footer.copyright'}
                       components={{currentyear: <span>{new Date().getFullYear()}</span>}}
                           />
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to='https://www.linkedin.com/in/papdawin'><IoLogoLinkedin /></Link>
                <Link to='https://github.com/papdawin'><IoLogoGithub /></Link>
            </nav>
        </footer>
    </>
}