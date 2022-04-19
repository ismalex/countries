import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import CountryListItem from '../components/countryListItem'

// queries
import { GET_COUNTRIES_BY_CURRENCY, GET_COUNTRIES_BY_CONTINENT } from '../graphql/queries'
// Interfaces
import { CountryItemComponent } from "../interfaces";

export default function Countries(props: any) {
    const [searchFilter, setSearchFilter] = useState('');
    const [filterSelection, setFilterSelection] = useState('Continent')
    const [getCountriesByCurrency, { loading, data, error }] = useLazyQuery(GET_COUNTRIES_BY_CURRENCY)
    const [getCountriesByContinent, { loading: loadingContinent, data: dataContinent, error: errorContinent }] = useLazyQuery(GET_COUNTRIES_BY_CONTINENT)


    function handleFindClick() {
        if (filterSelection === 'Currency') {
            getCountriesByCurrency({ variables: { currencyCode: searchFilter } })
        } else {
            getCountriesByContinent({
                variables: { continentCode: searchFilter }
            })
        }
    }

    function getSelectedItem(selectedCode: string) {
        props.onSelect(selectedCode)
    }

    function onChangeRadioValue(event: any) {
        setSearchFilter('');
        setFilterSelection(event.target.value)
    }

    function getResultList() {
        if (filterSelection === 'Currency') {
            return data && data.countries.map((countryItem: CountryItemComponent) => <CountryListItem key={`country-item-${countryItem.code}`} name={countryItem.name} code={countryItem.code} onSelect={getSelectedItem} />)
        } else {
            return dataContinent && dataContinent.continents[0]?.countries.map((countryItem: CountryItemComponent,) => <CountryListItem key={`country-item-${countryItem.code}`} name={countryItem.name} code={countryItem.code} onSelect={getSelectedItem} />)
        }
    }


    return (
        <>
            <h1>Countries</h1>
            Filter by:
            <div onChange={onChangeRadioValue}>
                <input type="radio" value="Continent" name="filterByContinent" checked={filterSelection === 'Continent'} /> Continent
                <input type="radio" value="Currency" name="filterByCurrency" checked={filterSelection === 'Currency'} /> Currency
            </div>
            <br />
            <input type='text' value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} placeholder='type' style={{ height: 32 }}></input>
            <button onClick={() => handleFindClick()} style={{ height: 38, marginLeft: 10 }}> Find </button>
            <br />
            {getResultList()}
        </>
    )
}
