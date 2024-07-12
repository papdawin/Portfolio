import {useTranslation} from "react-i18next";

export function About() {
    const { t, i18n } = useTranslation();
    return <>
        <div className="hero bg-base-200 h-96">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold">
                        {t('main.home.about.title')}
                    </h1>
                    <p className="py-6">
                        {t('main.home.about.body')}
                    </p>
                </div>
            </div>
        </div>
    </>
}