/* export { Country }; */

type Continent = {
	code: string;
	name: string;
	countries: Country[];
};
export type Language = {
	code: string;
	name: string;
	native: string;
	rtl: Boolean;
};
type State = {};

export type Country = {
	code: string;
	name: string;
	native: string;
	phone: string;
	continent: Continent;
	capital: string;
	currency: string;
	languages: Language[];
	emoji: string;
	emojiU: string;
	states: State[];
	onSelect?: (selectedCode: string) => void;
};

export type CountryItemComponent = {
	code: string;
	name: string;
	onSelect: (selectedCode: string) => void;
};
