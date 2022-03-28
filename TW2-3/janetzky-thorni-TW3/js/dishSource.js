const DishSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            }
        })
            .then(response => {
                if (response.status !== 200) throw response.statusText
                else return response;
            })
            .then(response => response.json());
    }
    ,
    searchDishes(params) {
        return DishSource.apiCall(SEARCH_DISH_ENDPOINT + new URLSearchParams(params))
            .then(data => data.results)
    }
    ,
    getDishDetails(id) {
        return DishSource.apiCall(GET_DISH_DETAILS_ENDPOINT + id + GET_DISH_INFORMATION);
    }
};