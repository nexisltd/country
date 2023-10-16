import { countryArray } from "./constants";

export const flags = () => {
    return countryArray.map((country) => {
        return {
            name: country.name,
            flag: country.flag,
        };
    });
};
export const flag = (identifier: string) => {
    const country = countryArray.find(
        (country) => country.code === identifier || country.name === identifier
    );
    return { name: country?.name, flag: country?.flag };
};
