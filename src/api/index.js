import axios from 'axios';
const url = 'https://covid19.mathdro.id/api'; // link to the api

export const fetchData = async (country) => {
    let changeableURL = url; // initially setting the URL to the basic API URL because no country has been selected yet 
    if(country)
    {
        // this is indicating that a country has been selected, so we want to build a new URL to the API for that country
        changeableURL = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        //console.log(response);

        // creating a javascript object to hold all of the useful data from the api
        // the api contains a lot of random data that does not have as revelant information
        // so we pull out the most import pieces: confirmed, recovered, deaths, and when it 
        // was last updated. This could also be done when creating the data var as so:
        // const { data: { confirmed, recovered, daths, lastUpdate} } = await axios.get(url);
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        // console.log("The following information is pertaining to: " + country);
        // console.log("\tThis is the confirmed number of COIVD-19 cases from the API: " + confirmed.value + " as of " + lastUpdate);
        // console.log("\tThis is the recovered number of COVID-19 cases from the API: " + recovered.value + " as of " + lastUpdate);
        // console.log("\tThis is the number of deaths from COVID-19 from the API: " + deaths.value + " as of " + lastUpdate);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch(error) {
        return error;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        return data.map(({ confirmed, recovered, deaths, reportDate: date }) => ({ confirmed: confirmed.total, recovered: recovered.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        // console.log(response);
        console.log("Here are the countries: ", countries.map((country) => country.name));
        // fetchCountryHotSpots(countries.map((country) => country.name));
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}

export const fetchCountryHotSpots = async () => {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    const countriesList = (countries.map((country) => country.name));
    let countryHotSpot = new Map();
    try {
        console.log("I am in fetchCountryHotSpots");
        for( var i = 0; i < 188; i++)
        {
            if (countriesList[i] === "Gambia")
            {
                // This country data is not available so setting it to 0
                countryHotSpot.set("Gambia", 0);
            }
            else 
            {
                // console.log("-> " + countriesList[i]);
                const currCountry = countriesList[i];
                const currData = await fetchData(countriesList[i]);
                const numInfected = currData.confirmed.value;
                const numDead = currData.deaths.value;
                const deathPercentage = ((numDead/numInfected) * 100)
                // console.log("\tThis is the current data or this country: " + currData.confirmed.value);
                countryHotSpot.set(currCountry, deathPercentage);
            }
        }
        console.log("This is the country hot spots: ", countryHotSpot);
        console.log("This is the map of all the countries: ", countriesList);
        return countryHotSpot;
    } catch (error) {
        return error;
    }
}