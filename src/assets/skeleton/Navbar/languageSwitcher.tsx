import {Trans} from "react-i18next";
import Flag from 'react-world-flags'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import locales from '../../../../public/locales/locales'
import {IoLanguage} from "react-icons/io5"
import {navbarTypes} from "./navbarTypes.tsx";
import i18n from "i18next";


export default function languageSwitcher() {
    return <>
        <li>
            <details>
                <summary>
                    <IoLanguage />
                    <Trans i18nKey='main.navbar.language' />
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    {locales.map((country:navbarTypes) => (
                        <li key={country.country_code}>
                            <div onClick={() => {
                                i18n.changeLanguage(country.short_code).then(() => console.log("langChanged"))
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