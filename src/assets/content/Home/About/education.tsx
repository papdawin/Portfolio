import {Trans} from "react-i18next";

function Msc() {
    const props = {
        transPath: "main.home.about.education_body.msc",
        duration: "2023 - 2025",
        badges: ['Python', 'BI', 'ML']
    }
    return <InstituteTemplate props={props} />;
}

function Bsc() {
    const props = {
        transPath: "main.home.about.education_body.bsc",
        duration: "2020 - 2023",
        badges: ['Programming', 'Git', 'DBMS']
    }
    return <InstituteTemplate props={props} />;
}

function Okj() {
    const props = {
        transPath: "main.home.about.education_body.okj",
        duration: "2018 - 2020",
        badges: ['Cisco', 'Active Directory']
    }
    return <InstituteTemplate props={props} />;
}

function InstituteTemplate({props}){
    return (
        <div className="card bg-base-100 shadow-xl min-w-full">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-primary whitespace-nowrap">{props.duration}</div>
                    <Trans i18nKey={props.transPath+'.field'} />
                </h2>
                <div className="text-left">
                    <small className="text-xs text-primary">
                        <Trans i18nKey={props.transPath+'.location'} />
                        <span> - </span>
                        <Trans i18nKey={props.transPath+'.institution'} />
                    </small>
                    <p>
                        <Trans i18nKey={props.transPath+'.bio'} components={{
                            break: <br />,
                        }}/>
                    </p>
                </div>
                <div className="card-actions justify-end">
                    {props.badges.map(badge =>
                        <div className="badge badge-outline">{badge}</div>
                    )}
                </div>
            </div>
        </div>);
}

export function Education() {
    return <>
        <div className="flex justify-center">
            <div className="w-">
                <ul className="steps steps-vertical">
                    <li data-content="" className="step">
                        <Msc/>
                    </li>
                    <li data-content="🎓" className="step step-primary">
                        <Bsc/>
                    </li>
                    <li data-content="🎓" className="step step-primary">
                        <Okj/>
                    </li>
                </ul>
            </div>
        </div>
    </>
}