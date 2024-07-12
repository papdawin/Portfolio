import {About} from "./About/about.tsx";

export default function Home() {
    return <>
        <div className="hero bg-base-200 h-96">
            <About />
        </div>
    </>
}