import localProjectList from "./projectLoader.ts";
import {useState} from "react";
import i18next from "i18next";
import {IoGitBranch, IoLink} from "react-icons/io5";
import {Link} from "react-router-dom";

function Project({props}) {
    return <div className="card bg-base-100 w-96 shadow-xl" key={props.id}>
        <figure className="max-h-40">
            {props.image ?
                <img src={props.image} alt={props.name+'photo'}/> : <></>
            }
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                <div className="badge badge-secondary">
                    <Link to={props.github}>
                        <IoGitBranch/>
                    </Link>
                </div>
                <div className="badge badge-secondary">
                    <Link to={props.link}>
                        <IoLink/>
                    </Link>
                </div>
                {props.name}
            </h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
                {props.tech_used.map(tech => <div className="badge badge-outline">{tech}</div>)}
            </div>
        </div>
    </div>
}

export function Projects() {
    const [translatedProjectList, setTranslatedProjectList] = useState(i18next.t('main.home.projects', { returnObjects: true }))

    function renderProject(project) {
        let props = {}
        translatedProjectList.map((projectTranslation)=>{
            if (projectTranslation.id === project.id){
                props = {
                    id: project.id,
                    name: projectTranslation.name,
                    description: projectTranslation.description,
                    tech_used: projectTranslation.tech_used,
                    image: project.image,
                    github: project.github,
                    link: project.link
                }
            }
        })
        return <Project props={props}/>
    }

    return (
        <div className="flex justify-center">
            <div className="grid gap-4 grid-cols-3">
                    {localProjectList.map(project=> renderProject(project))}
            </div>
        </div>);
}