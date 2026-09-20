import {About} from "./About/about.tsx";
import { Experience } from "./About/experience.tsx";
import {Education} from "./About/education.tsx";
import {Certificates} from "./About/certificates.tsx";
import {Projects} from "./Projects/projects.tsx";
import {Contact} from "./Contact/contact.tsx";
import {Trans} from "react-i18next";

export default function Home() {
    return <>
        <main className="bg-base-200" id="about">
            <About/>
            <section className="section-shell" id="experience">
                <h2 className="section-title">🏢 <Trans i18nKey={'main.home.about.experience'} /></h2>
                <Experience/>
            </section>
            <section className="section-shell" id="education">
                <h2 className="section-title">🎓 <Trans i18nKey={'main.home.about.education'} /></h2>
                <Education/>
            </section>
            <section className="section-shell" id="certificates">
                <h2 className="section-title">📜 <Trans i18nKey={'main.home.about.certificates'} /></h2>
                <Certificates/>
            </section>
            <section className="section-shell" id="projects">
                <h2 className="section-title">🧑‍💻 <Trans i18nKey={'main.navbar.projects'} /></h2>
                <Projects/>
            </section>
            <section className="section-shell pb-24" id="contact">
                <h2 className="section-title">✉️ <Trans i18nKey={'main.navbar.contact'} /></h2>
                <Contact/>
            </section>
        </main>
        </>
}