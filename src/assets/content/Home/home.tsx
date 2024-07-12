import {About} from "./About/about.tsx";
import {Education} from "./About/education.tsx";

export default function Home() {
    return <>
        <div className="bg-base-200">
            <About />
            <Education />
        </div>
    </>
}