function promiseNoData(promise = null, data = null, error = null){
    if( promise && !data && !error){
        return(
            <div>
                <img src= "http://www.csc.kth.se/~cristi/loading.gif" />
            </div>
        )
    }
    else if(!data  && !error && !promise){
        return(
            <span>
                <div className={"container"}>
                    <h1>
                        No Data
                    </h1>
                                <button className={"button-19"} onClick={() => window.location.hash = "#search"}> Back To Search!</button>
                </div>
            </span>
        )
    }
    else if(error){
        return(
            <span>
                {error}
            </span>
        )
    }
    else return false;
}