import localProjectList from "./projectLoader.ts";
import {useEffect, useState} from "react";
import i18next from "i18next";
import {IoGitBranch, IoLink} from "react-icons/io5";
import {Link} from "react-router-dom";
import {projectTranslationType, localProjectType, propsType} from "./projectTypes.ts";
import {useTranslation} from "react-i18next";

function Project({id, name, description, tech_used, image, github, link}: propsType) {
    return <article className="surface flex h-full flex-col transition-colors hover:border-primary/50" key={id}>
        <figure className="max-h-40 overflow-hidden">
            {image ? <img src={image} alt={name+' photo'}/> : <></>}
        </figure>
        <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
                <div className="flex gap-2 text-primary">
                    <Link to={github} aria-label={`${name} GitHub`}><IoGitBranch/></Link>
                    {link && <Link to={link} aria-label={`${name} link`}><IoLink/></Link>}
                </div>
            </div>
            <p className="text-sm leading-6 text-base-content/70">{description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {tech_used.map((tech : string) => <div className="badge badge-outline" key={tech}>{tech}</div>)}
            </div>
        </div>
    </article>
}

export function Projects() {
    const [translatedProjectList, setTranslatedProjectList] = useState<projectTranslationType[]>(
        () => i18next.t('main.home.projects', { returnObjects: true }) as projectTranslationType[]
      );

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

    // reloads projects when language changes
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const projects = i18n.t('main.home.projects', { returnObjects: true });

        if (Array.isArray(projects)) {
            setTranslatedProjectList(projects as projectTranslationType[]);
        } else {
            setTranslatedProjectList([]);
            console.warn("Expected an array for 'main.home.projects', but got:", projects);
        }
    }, [i18n, t]);

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localProjectList.map((project : localProjectType)  => renderProject(project))}
        </div>);
}