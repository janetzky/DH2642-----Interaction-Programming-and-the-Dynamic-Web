function SummaryView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            Summary for <span title="nr. guests">{props.persons}</span> guests:
        </div>
    );
}
