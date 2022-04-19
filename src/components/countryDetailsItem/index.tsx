
// Interface
import { Country, Language } from "../../interfaces";


export default function CountryDetailsItem(props: Country) {
    return (
        <div>
            <h1>{props.name}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div >
                    CAPITAL
                    <br />
                    {props.capital}
                    <br />
                    CURRENCY
                    <br />
                    {props.currency}
                    <br />
                    CONTINENT
                    <br />
                    {props.continent.name}
                    <br />
                </div>
                <div>
                    LANGUAGES
                    {props.languages.map((language: Language) =>
                        <div key={`language-code-${language.code}`}>{language.name}</div>)}
                </div>
            </div>
        </div>
    )
}
