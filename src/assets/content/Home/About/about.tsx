import {Trans} from "react-i18next";

export function About() {
    return <>
        <div className="hero bg-base-200 h-96">
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold">
                        <Trans i18nKey='main.home.about.title' components={{
                            primaryUnderline: <span className="underline decoration-4 decoration-primary" />
                        }}/>
                    </h1>
                    <div className="py-6 text-left">
                        <Trans i18nKey='main.home.about.body' components={{
                            break: <br />,
                            skyUnderline: <span className="underline decoration-2 decoration-sky-500" />,
                            pinkUnderline: <span className="underline decoration-2 decoration-pink-500" />,
                            indigoUnderline: <span className="underline decoration-2 decoration-indigo-500" />
                        }} />
                    </div>
                </div>
            </div>
        </div>
    </>
}