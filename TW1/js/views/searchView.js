function eventPrinter(evt){ console.log(evt);}
function SearchFormView(props){
    return(
        <div>
            <input onInput={e=>console.log(e.target.value)}/>
            <select onChange={e=> props.onText(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                 opt=>{return <option key = {opt}>{opt}</option>;})}
            </select>
            <button onClick={ e=> props.onSearch()}>Search!</button>
        </div>
    );
}