import {Trans} from "react-i18next";
import {experienceTypes} from "./experienceTypes.tsx";

function Sonrisa() {
    const props = {
        transPath: "main.home.about.experience_body.sonrisa",
        duration: "2024 - ",
        badges: ['CI/CD', 'Cloud', 'Containerization']
    }
    return WorkplaceTemplate(props);
}

function WorkplaceTemplate({transPath, duration, badges}:experienceTypes){
    return (
        <div className="card bg-base-100 shadow-xl min-w-full">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-primary whitespace-nowrap">{duration}</div>
                    <Trans i18nKey={transPath+'.field'} />
                </h2>
                <div className="text-left">
                    <small className="text-xs text-primary">
                        <Trans i18nKey={transPath+'.location'} />
                        <span> - </span>
                        <Trans i18nKey={transPath+'.institution'} />
                    </small>
                    <p>
                        <Trans i18nKey={transPath+'.bio'} components={{
                            break: <br />,
                        }}/>
                    </p>
                </div>
                <div className="card-actions justify-end">
                    {badges.map(badge =>
                        <div className="badge badge-outline" key={badge}>{badge}</div>
                    )}
                </div>
            </div>
        </div>);
}

export function Experience() {
    return <>
        <div className="flex justify-center">
            <div className="m-8">
                <ul className="steps steps-vertical">
                    <li data-content="🏢" className="step step-primary">
                        <Sonrisa/>
                    </li>
                </ul>
            </div>
        </div>
    </>
}