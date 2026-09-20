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
        <div className="flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-center">
            <img src="sysops_cert.png" alt="AWS SysOps Administrator certificate" className="max-w-sm rounded-lg" width={200}/>
            <div>
                <h3 className="text-2xl font-bold tracking-tight">
                    <Trans i18nKey={transPath+'.name'} />
                </h3>
                <div className="py-6">
                    <div className="badge badge-primary whitespace-nowrap">{duration}</div> <span />
                    <Trans i18nKey={transPath+'.issuedby'} />
                </div>
                <div className="mt-6 flex flex-wrap justify-end gap-2">
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
            <div className="surface max-w-4xl">
                <SysOpsAdmin/>
            </div>
        </div>
    </>
}