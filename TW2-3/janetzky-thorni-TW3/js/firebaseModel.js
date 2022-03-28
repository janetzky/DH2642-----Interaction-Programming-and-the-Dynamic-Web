function persistModel(model) {
    let loadingFromFirebase = true;

    model.addObserver(function () {
        if (!loadingFromFirebase)
            firebase.database().ref("dinnerModel").set({
                guests: model.numberOfGuests,
                dishes: model.dishes,
                currentDish: model.currentDish,
            });
    })


    firebase.database().ref("dinnerModel").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val()) {
                model.setNumberOfGuests(data.val().guests || null);
                model.setDishes(data.val().dishes || []);
                model.setCurrentDish(data.val().currentDish || null);
            }
        } catch (e) {
            console.log(e)
        } finally {
            loadingFromFirebase = false;
        }
    });

}
