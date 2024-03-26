//INSTRUCTIONS:
//Find array postion of country in asia starting with alphabet (?)

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

//Step 2: list countries from Asia continent using array method (filter) and arrow function
const asianCountries = allCountries
                        .filter(country => country.continent === 'Asia');

//Step 3: search asia country starting with a pre-defined alphabet using array method findIndex and arrow function
const alphabetToSearch = 'I';
const resultPosition = asianCountries.findIndex(country => country.country.startsWith(alphabetToSearch));


document.getElementById("demo").innerHTML = resultPosition; //output
