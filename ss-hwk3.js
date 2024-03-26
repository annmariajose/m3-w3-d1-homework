//INSTRUCTIONS:
//Find countries in the world that starts with alphabet (?)

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

//Step 2: search for countries beggining with pre-defined alphabet using array methods (filter and map) and arrow functions
const alphabetToSearch = 'I';
const resultCountries = allCountries
                        .filter(country => country.country.startsWith(alphabetToSearch))
                        .map(country => country.country);

//output to html
document.write(resultCountries);
