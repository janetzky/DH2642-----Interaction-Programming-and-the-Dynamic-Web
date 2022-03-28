function SidebarPresenter(props){
    const guests = useModelProperty(props.model, "numberOfGuests" )
    const dishes = useModelProperty(props.model, "dishes" )

    return <SidebarView guests={guests}
                        dishes={dishes}
                        setGuests= {guests => props.model.setNumberOfGuests(guests)}
                        dishChoice={choice => props.model.setCurrentDish(choice)}
                        removeDish={dish => props.model.removeFromMenu(dish)}
    />
}
