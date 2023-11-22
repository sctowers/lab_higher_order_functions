const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
}

module.exports = ScranAdvisor;