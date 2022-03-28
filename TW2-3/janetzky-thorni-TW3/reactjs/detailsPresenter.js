function DetailsPresenter(props) {
    const guests = useModelProperty(props.model, "numberOfGuests")
    const dishes = useModelProperty(props.model, "dishes")
    const currentDish = useModelProperty(props.model, "currentDish")
    const currentDishDetails = useModelProperty(props.model, "currentDishDetails")
    const currentDishError = useModelProperty(props.model, "currentDishError")

    return (
        promiseNoData(currentDish, currentDishDetails, currentDishError)
        ||
        <DetailsView isDishInMenu={dishes.find(d => d.id === currentDishDetails.id)}
                     people={guests}
                     dish={currentDishDetails}
                     dishAdded={dishDetails => props.model.addToMenu(dishDetails)}/>

    );
}