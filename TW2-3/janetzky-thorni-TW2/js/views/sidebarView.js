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
            <h2 class="inlineHeader">Number of persons:</h2>
            <button class="button-19" style={{width: "50px"}} disabled={props.guests <= 1}
                    onClick={() => props.setGuests(props.guests - 1)}>-
            </button>
            <span class="inlineHeader"> {props.guests} </span>
            <button class="button-19" style={{width: "50px"}} onClick={() => props.setGuests(props.guests + 1)}>+
            </button>
            <table class="text">
                <tbody>
                {[...props.dishes].sort(compareDishes).map(dish =>
                    <tr key={dish.id}>
                        <td>
                            <button class="button-19" onClick={e => props.removeDish(dish)}>X</button>
                        </td>
                        <td>
                            <a href="" onClick={e => {
                                e.preventDefault();
                                props.dishChoice(dish.id);
                            }}>{dish.title}</a>
                        </td>
                        <td>
                            {dish.dishTypes[0]}
                        </td>
                        <td>
                            {(dish.pricePerServing * props.guests).toFixed(2)} SEK
                        </td>
                    </tr>)
                }
                <tr>
                    <td></td>
                    <td>
                        <h4>Total: </h4>
                    </td>
                    <td></td>
                    <td>
                        sum {props.dishes.reduce((sum, dish) => sum + (dish.pricePerServing * props.guests), 0).toFixed(2)} SEK
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    );
}
