const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};

//MVP
// Count the number of restaurants that we have stored
ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

// Find a restaurant by its name (full name)
ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.find(restaurants => restaurants.name === name);
};

// Return an array containing each restaurant's name
ScranAdvisor.prototype.getAllRestaurantNames = function() {
    return this.restaurants.map(restaurant => restaurant.name);
};

// Find all the restaurants from a given city (pass in the city name, e.g. "Glasgow" should return 4 restaurants)
ScranAdvisor.prototype.getRestaurantsByCity = function(city) {
    return this.restaurants.filter(restaurant => restaurant.location.town === city);
};

// EXTENSION
// Create a method that finds which one is the most common cuisine in our ScranAdvisor 
ScranAdvisor.prototype.mostCommonCuisine = function() {
    // create an empty object to store the count of each cuisine
    const cuisineCount = {};

    // loop through each restaurant in the list
    this.restaurants.forEach(restaurant => {
        // loop through each cuisine in the current restaurant
        restaurant.cuisines.forEach(cuisine => {
            // check if the cuisine is already in the count object
            if (cuisineCount[cuisine] === undefined) {
                // if not, initialize the count to 1
                cuisineCount[cuisine] = 1;
            } else {
                // else, increment the count by 1
                cuisineCount[cuisine]++;
            }
        });
    });

    // Find the most common cuisine
    let mostCommonCuisine = ''; // initialize the most common cuisine variable
    let maxCount = 0; // initialize the maximum count variable

    // loop through each cuisine in the count object
    Object.keys(cuisineCount).forEach(cuisine => {
        // check if the count of the current cuisine is greater than the current maximum count
        if (cuisineCount[cuisine] > maxCount) {
            // if yes, update the mostCommonCuisine and maxCount variables
            mostCommonCuisine = cuisine;
            maxCount = cuisineCount[cuisine];
        }
    });

    // return the most common cuisine
    return mostCommonCuisine;
};

// Create a method that allows us to find restaurants if a given substring is found in its name 
ScranAdvisor.prototype.searchByName = function(substring) {
    const matchingRestaurants = this.restaurants.filter(restaurant => {
        const restaurantName = restaurant.name.toLowerCase();
        const lowercaseSubstring = substring.toLowerCase();
        return restaurantName.includes(lowercaseSubstring);
    });
return matchingRestaurants;

};


module.exports = ScranAdvisor;