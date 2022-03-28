
class DinnerModel{
    constructor(guests =2, dishes=[], currentDish=null){
        this.setNumberOfGuests(guests);
        this.setDishes(dishes);
    }

    setNumberOfGuests(x){
        if(x < 1 || !Number.isInteger(x))         
            throw 'This is not a valid nr of guests';
        else
            this.numberOfGuests = x;

        console.log("Nr f guests " + this.numberOfGuests);
    }
    setDishes(dishes){
        this.dishes = [...dishes];
    }
    addToMenu(dish){
        this.dishes = [...this.dishes, dish];
    }
    removeFromMenu(dishData){
        this.dishes = [...this.dishes].filter(dish => dish.id !== dishData.id);
    }
    setCurrentDish(id){
        this.currentDish = id;
    }

}

function getIngredients(props, guests)
{
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
    Object.keys(result).forEach(x => result[x].amount = result[x].amount*guests);

    return Object.values(result);
}