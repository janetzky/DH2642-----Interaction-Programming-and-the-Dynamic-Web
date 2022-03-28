function SidebarView(props){
    return(
        <div>
            <button disabled = {props.persons <= 1} onClick={e => props.setGuests(props.persons-1)} >-</button>
            {props.persons}
            <button onClick={e => props.setGuests(props.persons+1)}>+</button>
        </div>
    );
}