import localProjectList from "./projectLoader.ts";
import {useState} from "react";
import i18next from "i18next";
import {IoGitBranch, IoLink} from "react-icons/io5";
import {Link} from "react-router-dom";
import {projectTranslationType, localProjectType, propsType} from "./projectTypes.ts";

function Project({id, name, description, tech_used, image, github, link}: propsType) {
    return <div className="card bg-base-100 w-96 shadow-xl" key={id}>
        <figure className="max-h-40">
            {image ?
                <img src={image} alt={name+'photo'}/> : <></>
            }
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                <div className="badge badge-secondary">
                    <Link to={github}>
                        <IoGitBranch/>
                    </Link>
                </div>
                <div className="badge badge-secondary">
                    <Link to={link}>
                        <IoLink/>
                    </Link>
                </div>
                {name}
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                {tech_used.map((tech : string) => {
                    return <div className="badge badge-outline" key={tech}>{tech}</div>;
                })}
            </div>
        </div>
    </div>
}

export function Projects() {
    const [translatedProjectList] = useState<Array<projectTranslationType>>(i18next.t('main.home.projects', { returnObjects: true }))

    function renderProject(project : localProjectType) {
        let props : propsType = {
            id: 0,
            name: "",
            description: "",
            tech_used: [],
            image: "",
            github: "",
            link: ""
        }
        translatedProjectList.map((projectTranslation : projectTranslationType)=>{
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
        return Project(props);
    }

    return (
        <div className="flex justify-center">
            <div className="grid gap-4 grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3">
                    {localProjectList.map((project : localProjectType)  => renderProject(project))}
            </div>
        </div>);
}