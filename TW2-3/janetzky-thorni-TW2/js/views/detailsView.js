function DetailsView(props) {
    return (
        <div className={"flexParent"}>
            {
                console.log(props)
            }
            <div className={"flexParent"} className={"container"} >
                <div className={"flexParent"}>
                    <div>
                        <h1>{props.dish.title} </h1>
                        <div>Vegan {props.dish.vegan ? "✔" : "✘"} </div>
                        <div>Vegetarian {props.dish.vegetarian ? "✔" : "✘"} </div>
                        <div>GlutenFree {props.dish.glutenFree ? "✔" : "✘"} </div>
                        <div>Ready in {props.dish.readyInMinutes} minutes</div>
                        <div> {props.dish.aggregateLikes} people liked this 👍</div>
                        <div className={"priceBox"}>
                            <div>Price: {(props.dish.pricePerServing).toFixed(2)} SEK</div>
                            <div>for {props.people} guests {(props.dish.pricePerServing * props.people).toFixed(2)} SEK</div>
                        </div>
                    </div>
                    <div>
                        <img className={"detailsImage"} src={props.dish.image}/>
                    </div>
                </div>


                <div>
                    {props.dish.diets.map(diet => <div key={diet} className={"chip"}> {diet}</div>)}
                    {props.dish.dishTypes.map(dishType => <div key={dishType} className={"chip"}> {dishType}</div>)}
                </div>
                <div  className={"flexParent"}  >
                    <div className={"ingredients-section"}>
                        <h3>Ingredients</h3>
                        {
                            props.dish.extendedIngredients.map(ingredient =>
                                <li key={ingredient.id}>{ingredient.amount % 1 === 0 ? ingredient.amount.toFixed(0) : ingredient.amount.toFixed(1) } {" " + ingredient.unit + " " + ingredient.name}</li>)
                        }
                    </div>

                    <div className={"howToMake-section"}>
                        <h3>How to make</h3>
                        <p>{props.dish.instructions}</p>
                    </div>
                </div>
                <div>
                    <a href={props.dish.sourceUrl}>Read more about {props.dish.title}</a>
                </div>
            </div>

            <div className={"container"} >
                <button className={"button-19"} disabled={props.isDishInMenu} onClick={e => props.dishAdded()}>Add to
                    menu!
                </button>
                <button className={"button-19"}>Cancel</button>
            </div>
        </div>
    );
}
