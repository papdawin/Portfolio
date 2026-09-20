import LanguageSwitcher from "./languageSwitcher.tsx"
import {Trans} from "react-i18next";
import {FaTerminal} from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="navbar sticky top-0 z-50 border-b border-base-content/10 bg-base-100/95 px-4 backdrop-blur sm:px-6">
            <div className="mx-auto flex w-full max-w-6xl">
                <div className="flex flex-1 items-center gap-2 whitespace-nowrap">
                    <FaTerminal className="text-primary"/>
                    <strong className="whitespace-nowrap text-xl tracking-tight">pdwn</strong>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal gap-1 px-0 text-sm">
                    <li className="hidden md:block"><a href={"#about"}><Trans i18nKey={'main.navbar.about'} /></a></li>
                    <li className="hidden md:block"><a href={"#projects"}><Trans i18nKey={'main.navbar.projects'} /></a></li>
                    <li className="hidden md:block"><a href={"#contact"}><Trans i18nKey={'main.navbar.contact'} /></a></li>
                    <LanguageSwitcher/>
                </ul>
                </div>
            </div>
        </div>
    )
}