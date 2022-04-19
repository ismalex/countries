import { gql } from "@apollo/client";

export const GET_COUNTRIES_BY_CURRENCY = gql`
	query countries($currencyCode: String!) {
		countries(filter: { currency: { eq: $currencyCode } }) {
			code
			name
		}
	}
`;
export const GET_COUNTRIES_BY_CONTINENT = gql`
	query continents($continentCode: String!) {
		continents(filter: { code: { eq: $continentCode } }) {
			name
			countries {
				name
				code
			}
		}
	}
`;
export const GET_COUNTRY_BY_CODE = gql`
	query countries($countryCode: String!) {
		countries(filter: { code: { eq: $countryCode } }) {
			code
			name
			currency
			continent {
				name
			}
			languages {
				code
				name
			}
			capital
		}
	}
`;
