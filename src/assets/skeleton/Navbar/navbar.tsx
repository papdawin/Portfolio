import LanguageSwitcher from "./languageSwitcher.tsx"
import {Trans} from "react-i18next";
import {FaTerminal} from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1 pl-5">
                    <FaTerminal className="flex-none mr-2"/>
                    <strong className="text-xl">pdwn</strong>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href={"#about"}><Trans i18nKey={'main.navbar.about'} /></a></li>
                    <li><a href={"#projects"}><Trans i18nKey={'main.navbar.projects'} /></a></li>
                    <li><a href={"#contact"}><Trans i18nKey={'main.navbar.contact'} /></a></li>
                    <LanguageSwitcher/>
                </ul>
            </div>
        </div>
    )
}