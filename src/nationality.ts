import { countryArray } from "./constants";
import { Country } from "./types";

export const findNationality = (countryName: Country | string) => {
    const foundCountry = countryArray.find(
        (countryObj) => countryObj.name === countryName
    );
    if (foundCountry) {
        return foundCountry.nationality;
    } else {
        return null;
    }
};
