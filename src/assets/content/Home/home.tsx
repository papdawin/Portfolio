import {About} from "./About/about.tsx";
import {Education} from "./About/education.tsx";
import {Projects} from "./Projects/projects.tsx";
import {Contact} from "./Contact/contact.tsx";
import {Trans} from "react-i18next";

export default function Home() {
    return <>
        <div className="bg-base-200">
            <About/>
            <div className="divider divider-primary">🎓 <Trans i18nKey={'main.home.about.education'} /></div>
            <Education/>
            <div className="divider divider-primary">🧑‍💻 <Trans i18nKey={'main.navbar.projects'} /></div>
            <Projects/>
            <div className="divider divider-primary">✉️ <Trans i18nKey={'main.navbar.contact'} /></div>
            <Contact/>
            </div>
        </>
}