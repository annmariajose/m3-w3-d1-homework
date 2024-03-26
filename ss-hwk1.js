//INSTRUCTIONS:
//Output all countries from the Asia continent 

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

//Step 2: list countries from the Asia continent using array methods (filter & map) and arrow functions
const asianCountries = allCountries
                        .filter(country => country.continent === 'Asia')
                        .map(country => country.country);

//Output to html
document.write(asianCountries);
