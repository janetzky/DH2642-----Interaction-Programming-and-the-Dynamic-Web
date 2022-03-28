function SearchResultsView(props) {
    //console.log(props);
    return (
        <div className="resultsParent">
            {
                props.searchResults.map(dish =>
                    <span className="searchResult"
                          key={dish.id}
                          onClick={e => {
                              props.dishChosen(dish.id);
                              window.location.hash = "#details";
                          }}>
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
            <button className={"button-19"} onClick={() => window.location.hash = "#summary"}> Summary</button>
            <div className={"padding"}>

                <input className={"search-box"} onChange={e => props.onText(e.target.value)} onKeyUp={x => x.keyCode === 13 && props.onSearch()} />
                <select className={"select-box"} onChange={e => props.onDishType(e.target.value)}>
                    <option>Choose:</option>
                    {
                        props.options.map((opt) => <option key={opt}> {opt} </option>)
                    }
                </select>
                <button className={"button-19"} style={{width: "20%"}} onClick={() => props.onSearch()}> Search!
                </button>
            </div>
        </div>
    );
}
