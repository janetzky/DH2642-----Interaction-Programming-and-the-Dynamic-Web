function SidebarPresenter(props){
    return <SidebarView guests={props.model.numberOfGuests }
                        dishes={props.model.dishes }
                        setGuests= {guests => props.model.setNumberOfGuests(guests)}
                        dishChoice={choice => props.model.setCurrentDish(choice)}
                        removeDish={dish => props.model.removeFromMenu(dish)}
    />
}
