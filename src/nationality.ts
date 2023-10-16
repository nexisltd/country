import { countryArray } from "./constants";

export const findNationality = (identifier: string) => {
    const foundCountry = countryArray.find(
        (country) => country.name === identifier || country.code === identifier
    );
    if (foundCountry) {
        return foundCountry.nationality;
    } else {
        return null;
    }
};
