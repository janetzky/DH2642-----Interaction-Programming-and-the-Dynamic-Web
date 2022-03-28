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
                No Data
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