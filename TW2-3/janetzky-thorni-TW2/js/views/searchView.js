function SearchResultsView(props) {
    console.log(props);
    return (
        <div class="resultsParent">
            {
                props.searchResults.map(dish =>
                    <span class="searchResult"
                          key={dish.id}
                          onClick={e => props.dishChosen(dish.id)}>
                        <img className={"searchImage"} src={"https://spoonacular.com/recipeImages/" + dish.image}
                             alt={dish.title}/>

                            <h4> {dish.title}</h4>
                        <p>Ready in {dish.readyInMinutes} minutes <br/> {dish.servings} servings</p>
                    </span>
                )
            }
        </div>
    )

}

function SearchFormView(props) {
    return (
        <div>
            <input onChange={e => props.onText(e.target.value)}/>
            <select onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {
                    props.options.map((opt) => <option key={opt}> {opt} </option>)
                }
            </select>
            <button onClick={() => props.onSearch()}> Search!</button>
        </div>
    );
}