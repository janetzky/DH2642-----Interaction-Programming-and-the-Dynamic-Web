class DinnerModel{
    constructor(guests = 2){this.setNumberOfGuests(guests);}
    setNumberOfGuests(x){
        if(x < 1){ throw new Error("Wrong type of number")}
        if(!Number.isInteger(x)){ throw new Error("Wrong type of number, not an integer")}
        else (this.numberOfGuests= x);}
}
