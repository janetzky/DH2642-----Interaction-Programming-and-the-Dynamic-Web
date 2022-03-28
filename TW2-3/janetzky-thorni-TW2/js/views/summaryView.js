function compareIngredients(a, b) {
    if (a.aisle < b.aisle)
        return -1;
    if (a.aisle > b.aisle)
        return 1;
    // At this point, we know that a.aisle===b.aisle
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;

    if (a.name === b.name)
        throw Error("errror, not unique"), console.log("not unique");
}


function SummaryView(props) {
    return (
        <div>
            {
                console.log(props)
            }
            <span class="text">
                Dinner for <span title="nr. guests">{props.persons}</span> {props.persons === 1 ? "guest" : "guests"}:
            </span>
            <table class="ingredients">
                <tbody>
                <tr>
                    <th> Ingredient</th>
                    <th> Aisle</th>
                    <th> Quantity</th>
                </tr>
                {
                    [...props.ingredients].sort(compareIngredients).map(x =>
                        <tr key = {x.id}>
                            <td>{x.name}</td>
                            <td>{x.aisle}</td>
                            <td>{x.amount % 1 !== 0 ? x.amount.toFixed(1) : x.amount.toFixed(0)} { " " + x.unit}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>


    );
}
