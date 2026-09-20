import {Trans} from "react-i18next";

export function About() {
    return <>
        <section className="section-shell flex min-h-[70vh] items-end">
            <div className="w-full">
                    <h1 className="w-full text-left text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                        <Trans i18nKey='main.home.about.title' components={{
                            primaryUnderline: <span className="underline decoration-4 decoration-primary" />
                        }}/>
                    </h1>
                    <div className="w-full py-8 text-left text-lg leading-8 text-base-content/75 sm:text-xl">
                        <Trans i18nKey='main.home.about.body' components={{
                            break: <br />,
                            skyUnderline: <span className="underline decoration-2 decoration-sky-500" />,
                            pinkUnderline: <span className="underline decoration-2 decoration-pink-500" />,
                            indigoUnderline: <span className="underline decoration-2 decoration-indigo-500" />
                        }} />
                    </div>
            </div>
        </section>
    </>
}