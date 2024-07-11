import LanguageSwitcher from "./languageSwitcher.tsx"
import {useTranslation} from "react-i18next";
import {IoTerminal} from "react-icons/io5";

export default function Navbar() {
    const { t, i18n } = useTranslation();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 pl-5">
                <div className="flex-col">
                    <IoTerminal />
                    <strong className="text-xl">pdwn</strong>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>{t('main.navbar.about')}</a></li>
                    <li><a>{t('main.navbar.projects')}</a></li>
                    <li><a>{t('main.navbar.contact')}</a></li>
                    <LanguageSwitcher />
                </ul>
            </div>
        </div>
    )
}