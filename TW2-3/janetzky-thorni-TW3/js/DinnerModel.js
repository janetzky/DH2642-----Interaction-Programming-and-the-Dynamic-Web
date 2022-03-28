class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        this.setCurrentDish(currentDish);
        this.setNumberOfGuests(guests);
        this.setDishes(dishes);
    }

    /*
        Handle Observers
     */
    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(observer => observer !== callback)
    }

    notifyObservers() {
        setTimeout(() => {
            try {
                this.observers.forEach(callback => callback());
            } catch (err) {
                console.log(err);
            }
        }, 0);
    }

    setNumberOfGuests(x) {
        if (x < 1 || !Number.isInteger(x))
            throw 'This is not a valid nr of guests';
        else
            this.numberOfGuests = x;

        this.notifyObservers();
        console.log("Nr f guests " + this.numberOfGuests);
    }

    setDishes(dishes) {
        this.dishes = [...dishes];
        this.notifyObservers();
    }

    addToMenu(dish) {
        this.dishes = [...this.dishes, dish];
        this.notifyObservers();
    }

    removeFromMenu(dishData) {
        this.dishes = [...this.dishes].filter(dish => dish.id !== dishData.id);
        this.notifyObservers();
    }

    setCurrentDish(id) {
        /* if currentDish doesn’t really change (use ===),
       we don’t want to make a useless network access, so return */
        if (this.currentDish === id){
            return;
        }
        /* set the model current dish property to the new value */

        this.currentDish = id;
        this.currentDishDetails = null;
        this.currentDishError = null;


        /* notify observers, because current dish, details, error changed! */
        this.notifyObservers();
        /* check that currentDish is truthy for getDishDetails() to make sense */
        if (this.currentDish)
            DishSource.getDishDetails(this.currentDish)
                /* if currentDish is still id, set currentDishDetails from promise results and notify observers */
                .then(promise => {
                        if (this.currentDish === id){
                            this.currentDishDetails = promise;
                        }
                        this.notifyObservers();
                    }
                )
                /* if currentDish is still id, set currentDishError from promise error and notify observers */
                .catch( error => {
                        if (this.currentDish === id){
                            this.currentDishError = error;
                        }
                        this.notifyObservers();
                    }
                )

    }
}

function getIngredients(props, guests) {
    let result = {};
    props.forEach(d =>
        d.extendedIngredients.forEach(
            i => {
                if (!result[i.id])
                    result[i.id] = {...i};
                else
                    result[i.id].amount += i.amount;
            }
        )
    )
    Object.keys(result).forEach(x => result[x].amount = result[x].amount * guests);

    return Object.values(result);
}