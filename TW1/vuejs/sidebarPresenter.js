function SidebarPresenter(props){
    return( <SidebarView persons={props.model.numberOfGuests}
                        setGuests= {persons => props.model.setNumberOfGuests(persons)} />);
}
