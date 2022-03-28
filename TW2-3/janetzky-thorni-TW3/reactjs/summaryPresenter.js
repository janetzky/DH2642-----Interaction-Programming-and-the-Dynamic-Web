function SummaryPresenter(props){
    const persons = useModelProperty(props.model, "numberOfGuests");
    const dishes = useModelProperty(props.model, "dishes");

    return <SummaryView persons={persons}
                        ingredients={getIngredients(dishes, persons)}/>
}