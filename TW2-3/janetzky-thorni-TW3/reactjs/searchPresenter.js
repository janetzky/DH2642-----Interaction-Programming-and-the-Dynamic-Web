function SearchPresenter({model}) {
    const [searchPromise, setPromise] = React.useState(null);
    React.useEffect(function () {
        setPromise(DishSource.searchDishes({type: "main course", query: "pasta"}))
    }, []); // case 1, execute at creation
    const [myData, myError] = usePromise(searchPromise);

    const [searchQuery, setQuery] = React.useState("");
    const [searchType, setSearchType] = React.useState("");

    return (
        <div>
            <SearchFormView options={["starter", "main course", "dessert"]}
                            onSearch={() => setPromise(DishSource.searchDishes({
                                type: searchType,
                                query: searchQuery,
                            }))}
                            onText={txt => setQuery(txt)}
                            onDishType={dishType => setSearchType(dishType)}

            />

            {promiseNoData(searchPromise, myData, myError) ||
            <SearchResultsView searchResults={myData} dishChosen={id => model.setCurrentDish(id)}/>}
        </div>
    );
}