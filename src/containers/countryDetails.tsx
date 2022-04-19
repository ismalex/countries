import { useQuery } from '@apollo/client'
import CountryDetailsItem from '../components/countryDetailsItem'
import { GET_COUNTRY_BY_CODE } from '../graphql/queries'

export default function CountryDetails(props: any) {

    const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, { variables: { countryCode: props.code }, });
    if (loading) return null;
    if (error) return <></>;
    const [firstElement] = data.countries

    return (
        <CountryDetailsItem {...firstElement} />
    )
}
