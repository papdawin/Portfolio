export interface projectTranslationType {
    "id": number,
    "name": string,
    "description": string,
    "tech_used": Array<string>
}

export interface localProjectType {
    "id": number,
    "image": string,
    "github": string,
    "link": string
}

export interface propsType {
    "id": number,
    "name": string,
    "description": string,
    "tech_used": Array<string>,
    "image": string,
    "github": string,
    "link": string,
}
