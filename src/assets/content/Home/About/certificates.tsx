import {Trans} from "react-i18next";
import {certificatesTypes} from "./certificatesTypes.tsx";

function SysOpsAdmin() {
    const props = {
        transPath: "main.home.about.certificates_body.sysopsadmin",
        duration: "2025 - 2028",
        badges: ['AWS', 'Cloud Operations']
    }
    return CertificateTemplate(props);
}

function CertificateTemplate({transPath, duration, badges}:certificatesTypes){
    return (
        <div className="hero-content flex-col lg:flex-row min-w-lg">
            <img src="sysops_cert.png" className="max-w-sm rounded-lg shadow-sm" width={200}/>
            <div>
                <h2 className="text-2xl font-bold min-w-lg">
                    <Trans i18nKey={transPath+'.name'} />
                </h2>
                <p className="py-6">
                    <div className="badge badge-primary whitespace-nowrap">{duration}</div> <span />
                    <Trans i18nKey={transPath+'.issuedby'} />
                </p>
                <div className="card-actions justify-end mt-10">
                    {badges.map(badge =>
                        <div className="badge badge-outline" key={badge}>{badge}</div>
                    )}
                </div>
            </div>
        </div>);
}

export function Certificates() {
    return <>
        <div className="flex justify-center">
            <div className="hero bg-base-100 shadow-xl max-w-4xl m-8 rounded-xl">
                <SysOpsAdmin/>
            </div>
        </div>
    </>
}