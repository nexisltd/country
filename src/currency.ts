import { countryArray } from "./constants";

export const currencies = () => {
    return countryArray.map((country) => {
        return {
            name: country.name,
            currencies: country.currency,
        };
    });
};

export const currency = (identifier: string) => {
    const country = countryArray.find(
        (country) => country.code === identifier || country.name === identifier
    );
    return { name: country?.name, currency: country?.currency };
};
