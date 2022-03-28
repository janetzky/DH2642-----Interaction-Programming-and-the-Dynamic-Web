function SidebarView(props) {
    const types = ["starter", "main course", "dessert"];

    function dishType(dish) {
        if (dish.dishTypes) {
            const tp = dish.dishTypes.filter(value => types.includes(value));
            if (tp.length)
                return tp[0];
        }
        return "";
    }

    function compareDishes(a, b) {
        let ai = types.indexOf(dishType(a));
        let bi = types.indexOf(dishType(b));

        if (ai < bi) return -1;
        if (ai > bi) return 1;
        if (ai === bi) return 0;
    }

    return (
        <div>
            <h2 className={"inlineHeader"}>Number of persons:</h2>
            <button className="button-19" style={{width: "50px"}} disabled={props.guests <= 1}
                    onClick={() => props.setGuests(props.guests - 1)}>-
            </button>
            <span className="inlineHeader"> {props.guests} </span>
            <button className="button-19" style={{width: "50px"}} onClick={() => props.setGuests(props.guests + 1)}>+
            </button>

            <table className="text">
                <tbody>
                {[...props.dishes].sort(compareDishes).map(dish =>
                    <tr key={dish.id}>
                        <td>
                            <button className="button-19" onClick={e => props.removeDish(dish)}>X</button>
                        </td>
                        <td>
                            <a className={"chip"} href="" onClick={e => {
                                e.preventDefault();
                                props.dishChoice(dish.id);
                                window.location.hash = "#details";
                            }}>{dish.title}</a>
                        </td>
                        <td>
                            <div className={"chip"}> {dish.dishTypes[0]}</div>
                        </td>
                        <td>
                            <div className={"chip"}> {dish.servings}🍽</div>
                        </td>
                        <td>
                            <div className={"chip"}>  {(dish.pricePerServing * props.guests).toFixed(0)} Sek</div>
                        </td>
                    </tr>)
                }
                <tr>
                    <td>
                        <h4>Total: </h4>
                    </td>
                    <td></td>
                    <td></td>
                    <td>sum</td>

                    <td>
                            <div style={{ whiteSpace: "nowrap"}}> {props.dishes.reduce((sum, dish) => sum + (dish.pricePerServing * props.guests), 0).toFixed(0)} SEK</div>
                    </td>

                </tr>
                </tbody>

            </table>
        </div>
    );
}
