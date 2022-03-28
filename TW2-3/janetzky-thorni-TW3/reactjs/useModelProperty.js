function useModelProperty(model, propertyName) {  // custom hook
    const [value, setValue] = React.useState(model[propertyName]);
    React.useEffect(
        function () {
            return model.addObserver(() => setValue(model[propertyName])
            );
        }, [model]
    );
    return value;
}


