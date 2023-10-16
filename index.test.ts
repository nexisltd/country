import { describe, expect, it } from "vitest";
import { country, currency, findNationality, flag, timezone } from "./src";

describe("Country Package", () => {
    it("should retrieve details for a country by name", () => {
        const countryDetails = country("Afghanistan");
        expect(countryDetails).toEqual({
            name: "Afghanistan",
            code: "AF",
            flag: "https://flagcdn.com/af.svg",
            nationality: "Afghan",
            currency: "AFN",
            tz: ["Asia/Kabul"],
        });
    });

    it("should retrieve details for a country by code", () => {
        const countryDetails = country("US");
        expect(countryDetails).toEqual({
            name: "United States",
            code: "US",
            flag: "https://flagcdn.com/us.svg",
            nationality: "American",
            currency: "USD",
            tz: [
                "America/Adak",
                "America/Anchorage",
                "America/Boise",
                "America/Chicago",
                "America/Denver",
                "America/Detroit",
                "America/Indiana/Indianapolis",
                "America/Indiana/Knox",
                "America/Indiana/Marengo",
                "America/Indiana/Petersburg",
                "America/Indiana/Tell_City",
                "America/Indiana/Vevay",
                "America/Indiana/Vincennes",
                "America/Indiana/Winamac",
                "America/Juneau",
                "America/Kentucky/Louisville",
                "America/Kentucky/Monticello",
                "America/Los_Angeles",
                "America/Menominee",
                "America/Metlakatla",
                "America/New_York",
                "America/Nome",
                "America/North_Dakota/Beulah",
                "America/North_Dakota/Center",
                "America/North_Dakota/New_Salem",
                "America/Phoenix",
                "America/Sitka",
                "America/Yakutat",
                "Pacific/Honolulu",
            ],
        });
    });

    it("should return undefined when a country is not found", () => {
        const countryDetails = country("Nonexistent Country");
        expect(countryDetails).toBeUndefined();
    });

    it("should retrieve currency details by name", () => {
        const currencyDetails = currency("United States");
        expect(currencyDetails).toEqual({
            name: "United States",
            currency: "USD",
        });
    });

    it("should retrieve currency details by code", () => {
        const currencyDetails = currency("US");
        expect(currencyDetails).toEqual({
            name: "United States",
            currency: "USD",
        });
    });

    it("should return undefined when a currency is not found", () => {
        const currencyDetails = currency("Nonexistent Currency");
        expect(currencyDetails).toBeNull();
    });
    it("should retrieve a flag by name", () => {
        const countryFlag = flag("United States");
        expect(countryFlag).toEqual({
            name: "United States",
            flag: "https://flagcdn.com/us.svg",
        });
    });

    it("should retrieve a flag by code", () => {
        const countryFlag = flag("US");
        expect(countryFlag).toEqual({
            name: "United States",
            flag: "https://flagcdn.com/us.svg",
        });
    });

    it("should return null when a flag is not found", () => {
        const countryFlag = flag("Nonexistent Country");
        expect(countryFlag).toBeNull();
    });

    it("should find the nationality of a country", () => {
        const nationality = findNationality("United States");
        expect(nationality).toBe("American");
    });

    it("should return null when nationality is not found", () => {
        const nationality = findNationality("Nonexistent Country");
        expect(nationality).toBeNull();
    });

    it("should retrieve timezones by name", () => {
        const countryTimezone = timezone("Bangladesh");
        expect(countryTimezone).toEqual({
            name: "Bangladesh",
            tz: ["Asia/Dhaka"],
        });
    });

    it("should retrieve timezones by code", () => {
        const countryTimezone = timezone("BD");
        expect(countryTimezone).toEqual({
            name: "Bangladesh",
            tz: ["Asia/Dhaka"],
        });
    });

    it("should return undefined when timezones are not found", () => {
        const countryTimezone = timezone("Nonexistent Country");
        expect(countryTimezone).toBeNull();
    });
});
