import {About} from "./About/about.tsx";
import { Experience } from "./About/experience.tsx";
import {Education} from "./About/education.tsx";
import {Certificates} from "./About/certificates.tsx";
import {Projects} from "./Projects/projects.tsx";
import {Contact} from "./Contact/contact.tsx";
import {Trans} from "react-i18next";

export default function Home() {
    return <>
        <div className="bg-base-200" id="about">
            <About/>
            <div className="divider divider-primary" id="experience">🏢 <Trans i18nKey={'main.home.about.experience'} /></div>
            <Experience/>
            <div className="divider divider-primary" id="education">🎓 <Trans i18nKey={'main.home.about.education'} /></div>
            <Education/>
            <div className="divider divider-primary" id="certificates">📜 <Trans i18nKey={'main.home.about.certificates'} /></div>
            <Certificates/>
            <div className="divider divider-primary" id="projects">🧑‍💻 <Trans i18nKey={'main.navbar.projects'} /></div>
            <Projects/>
            <div className="divider divider-primary" id="contact">✉️ <Trans i18nKey={'main.navbar.contact'} /></div>
            <Contact/>
            </div>
        </>
}