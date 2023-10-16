import { countryArray } from "../constants";

export type Country = (typeof countryArray)[number]["name"];
