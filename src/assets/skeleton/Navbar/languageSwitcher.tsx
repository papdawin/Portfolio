import {useTranslation} from "react-i18next";
import Flag from 'react-world-flags'
import locales from '../../../../public/locales/locales'
import { IoLanguage } from "react-icons/io5"



export default function languageSwitcher() {
    const { t, i18n } = useTranslation();
    return <>
        <li>
            <details>
                <summary>
                    <IoLanguage />
                    {t('main.navbar.language')}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    {locales.map((country) => (
                        <li key={country.country_code}>
                            <div onClick={() => {
                                i18n.changeLanguage(country.short_code)
                            }}>
                                <Flag code={country.short_code} fallback={<small>{country.short_code}</small>}
                                      height={13} width={13}/>
                                <p>{country.country_code}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </details>
        </li>
    </>
}