function Show(props) {
    return (
        <div className={props.hash === props.hashState? "test" : "hidden" }>
            {props.children}
        </div>
    );
}