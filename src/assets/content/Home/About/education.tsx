import {useTranslation} from "react-i18next";

function Msc({translation}) {
    return (
        <div>

        </div>);
}

function Bsc({translation}) {
    return (
        <div>

        </div>);
}

function Okj({translation}) {
    return (
        <div>

        </div>);
}

export function Education() {
    const { t, i18n } = useTranslation();
    return <>
        <div className="text-center max-w-screen-md">
            <ul className="steps steps-vertical">
            <li data-content="" className="step">
                    <Msc translation={t}/>
                </li>
                <li data-content="🎓" className="step step-primary">
                    <Bsc translation={t} />
                </li>
                <li data-content="🎓" className="step step-primary">
                    <Okj translation={t} />
                </li>
            </ul>
        </div>
    </>
}