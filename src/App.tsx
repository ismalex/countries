import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Countries from './containers/countries'
import CountryDetails from './containers/countryDetails'
import './App.css';
import Cinema from "./containers/cinema";

const client = new ApolloClient({ cache: new InMemoryCache(), uri: 'https://countries.trevorblades.com/' })

function App() {
	const [selectedCountryCode, setSelecetedCountryCode] = React.useState("")

	function selectCountry(selectedCode: string) {
		setSelecetedCountryCode(selectedCode)
	}

	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path={'/'} element={<Countries onSelect={selectCountry} />} />
					<Route path={'/country-details'} element={<CountryDetails code={selectedCountryCode} />} />
					<Route path={'/cinema'} element={<Cinema />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
