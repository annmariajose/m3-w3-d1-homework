//INSTRUCTIONS:
//Combine North America and South America into one big continent with list of countries sorted

//Step 1: combine all countries using spread syntax
const allCountries = [
    ...countries1, 
    ...countries2, 
    ...countries3, 
    ...countries4, 
    ...countries5, 
    ...countries6, 
    ...countries7,
    ...countries8, 
    ...countries9 
];

//Step 2: get countries from the continents in question and then combine them using spread syntax
const newContinent = [
                        ...allCountries.filter(country => country.continent === 'North America'),
                        ...allCountries.filter(country => country.continent === 'South America')
                    ];

//Step 3: get and sort the countries using array methods (map and sort)
const sortedCountriesInNewContinent = newContinent.map(country => country.country).sort();

//Output to html
document.write(sortedCountriesInNewContinent);
