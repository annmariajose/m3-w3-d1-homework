//Class and Methods with spread syntax

//INSTRUCTIONS:
//Create a search feature that search for countries in North America based on user input of an alphabet

//Step 1: combine all countries using the spread syntax
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

//Step 2: list countries based on a certain continent and store in variable 
const continentName = 'Europe'; //This line is set up for you
const resultCountries = allCountries
                            .filter(country => country.continent === continentName)
                            .map(country => country.country);

//Step 3: create a master class that holds all the countries for that continent
class countriesInContinent {
    constructor(countries) {
        this.countries = countries
    }
    get Countries() {
        return this.countries;
    }
}

//Step 5: create a child class that also holds a property that receives from user input. This class should also have its own method that list only countries based on user input
class searchCountries extends countriesInContinent {
    constructor(countries, userInput) {
        super(countries)
        this.userInput = userInput
    }
    getSearchResults() {
        return super.Countries.filter(country => country.startsWith(this.userInput));
    }
}

//Step 4: create the function "startSearch" that capture value from user input and run the method
function startSearch() {
    const searchValue = document.getElementById("alphabet").value;
    const countriesResult = new searchCountries(resultCountries, searchValue);
    const results = countriesResult.getSearchResults();
    if (results.length > 0) {
        document.getElementById("resultTitle").innerHTML = `Countries Found in ${continentName}:`;
        console.log(results);
        document.getElementById("results").innerHTML = results.join('<br>');
    } else {
        document.getElementById("resultTitle").innerHTML = "Sorry, No Countries Found. Please Try Again";
        document.getElementById("results").innerHTML = "";
    }
    
}

//button that invoke the function on step 4
let mybtn = document.getElementById("btn");
mybtn.addEventListener("click", startSearch);

//below will output name of continent to the heading (continentName is a variable //declared somewhere at the top)
document.getElementById("cont").innerHTML = continentName;