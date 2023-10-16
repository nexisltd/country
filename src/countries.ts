import { countryArray } from "./constants";

export const countries = () => {
    return countryArray;
};

export const country = (identifier: string) => {
    return countryArray.find(
        (country) => country.name === identifier || country.code === identifier
    );
};
