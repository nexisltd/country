# Country

[![Build](https://github.com/nexisltd/country/actions/workflows/publish.yml/badge.svg)](https://github.com/nexisltd/country/actions/workflows/publish.yml)
[![Test](https://github.com/nexisltd/country/actions/workflows/test.yml/badge.svg)](https://github.com/nexisltd/country/actions/workflows/test.yml)
[![NPM Version](https://img.shields.io/npm/v/@nexisltd/country.svg)](https://www.npmjs.com/package/@nexisltd/country)
[![Github Repo Size](https://img.shields.io/github/repo-size/nexisltd/country.svg)](https://github.com/nexisltd/country)
[![LICENSE](https://img.shields.io/npm/l/npm-badger.svg)](https://github.com/nexisltd/country/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/nexisltd/country.svg)](https://github.com/nexisltd/country/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/nexisltd/country.svg)](https://github.com/nexisltd/country/commits/main)
[![jsDeliver](https://data.jsdelivr.com/v1/package/npm/@nexisltd/country/badge)](https://www.jsdelivr.com/package/npm/@nexisltd/country)

A versatile npm package for accessing country-related data, including country details, currencies, flags, and more.

## Installation

To install the `country` library, you can use npm, yarn, or pnpm:

```bash
npm install @nexisltd/country
# or
yarn add @nexisltd/country
# or
pnpm install @nexisltd/country
```

## Usage

### Country Details

You can retrieve details about a specific country using the `country` function. This function takes an identifier, which can be either the country name or country code.

```javascript
import { country } from '@nexisltd/country';

const countryDetails = country("Bangladesh");

console.log(countryDetails);
```

### List of Countries

To get a list of all countries with essential information, you can use the `countries` function.

```javascript
import { countries } from '@nexisltd/country';

const allCountries = countries();

console.log(allCountries);
```

### Currencies

To access information about a specific country's currency, use the `currency` function with the country name or code.

```javascript
import { currency } from '@nexisltd/country';

const currencyDetails = currency("Bangladesh");

console.log(currencyDetails);
```

### List of Currencies

To retrieve a list of all available currencies, you can use the `currencies` function.

```javascript
import { currencies } from '@nexisltd/country';

const allCurrencies = currencies();

console.log(allCurrencies);
```

### Flags

You can obtain the flag of a specific country using the `flag` function with the country name or code.

```javascript
import { flag } from '@nexisltd/country';

const countryFlag = flag("Bangladesh");

console.log(countryFlag);
```

### List of Flags

To get a list of flags for all countries, use the `flags` function.

```javascript
import { flags } from '@nexisltd/country';

const allFlags = flags();

console.log(allFlags);
```

### Nationality

Find the nationality associated with a specific country using the `findNationality` function.

```javascript
import { findNationality } from '@nexisltd/country';

const nationality = findNationality("Bangladesh");

console.log(nationality);
```

### Timezones

Retrieve information about the time zones associated with a specific country using the `timezone` function with the country name or code.

```javascript
import { timezone } from '@nexisltd/country';

const countryTimezone = timezone("Bangladesh");

console.log(countryTimezone);
```

### List of Timezones

To get a list of time zones for all countries, use the `timezones` function.

```javascript
import { timezones } from '@nexisltd/country';

const allTimezones = timezones();

console.log(allTimezones);
```

## License

This library is open-source and available under the [MIT License](LICENSE).

---

Feel free to use this library to enhance the data related to countries in your projects. If you have any questions, suggestions, or issues, please don't hesitate to [open an issue](https://github.com/nexisltd/country/issues) or [contribute](https://github.com/nexisltd/country/pulls) to its development.

Happy coding! 🌎🚀
