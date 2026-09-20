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

function Diligent() {
    const props = {
        transPath: "main.home.about.experience_body.diligent",
        duration: "2025 - ",
        badges: ['Python', 'Terraform', 'Jira', 'Confluence']
    }
    return WorkplaceTemplate(props);
}

function WorkplaceTemplate({transPath, duration, badges}:experienceTypes){
    return (
        <div className="surface min-w-full">
            <div className="p-5 sm:p-6">
                <h3 className="flex flex-wrap items-center gap-3 text-lg font-semibold">
                    <div className="badge badge-primary whitespace-nowrap">{duration}</div>
                    <Trans i18nKey={transPath+'.field'} />
                </h3>
                <div className="text-left">
                    <small className="text-xs font-medium text-primary">
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
                <div className="mt-5 flex flex-wrap justify-end gap-2">
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
            <div className="w-full">
                <ul className="space-y-4 border-l border-primary/40 pl-5">
                    <li className="relative before:absolute before:-left-[1.65rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                        <Diligent/>
                    </li>
                    <li className="relative before:absolute before:-left-[1.65rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                        <Sonrisa/>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
