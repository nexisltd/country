import { countryArray } from "./constants";

export const timezones = () => {
    return countryArray.map((country) => {
        return {
            name: country.name,
            tz: country.tz,
        };
    });
};

export const timezone = (identifier: string) => {
    const country = countryArray.find(
        (country) => country.code === identifier || country.name === identifier
    );
    if (!country) {
        return null;
    }
    return { name: country?.name, tz: country?.tz };
};
