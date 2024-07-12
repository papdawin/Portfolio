import {FaTerminal} from "react-icons/fa6";
import {useTranslation} from "react-i18next";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";

export function Footer() {
    const { t, i18n } = useTranslation();
    return <>
        <footer className="footer bg-base-100 items-center p-4">
            <aside className="grid-flow-col items-center">
                <FaTerminal className="flex-none"/>
                <strong className="text-xl">pdwn</strong>
                <p>{t("main.footer.copyright")}</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                    <IoLogoLinkedin />
                </a>
                <a>
                    <IoLogoGithub />
                </a>
            </nav>
        </footer>
    </>
}