import {About} from "./About/about.tsx";

export default function Home() {
    return <>
        <div className="hero bg-base-200 min-h-screen">
            <About />
        </div>
    </>
}