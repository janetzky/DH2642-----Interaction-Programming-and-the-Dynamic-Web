function App({model}) {
    const [hashState, setHashState] = React.useState(getDefaultRoute);

    window.addEventListener("hashchange", defaultRoute);

    function defaultRoute() {
            setHashState(getDefaultRoute());
    }

    function getDefaultRoute() {
        let hash = window.location.hash;
        if (["#search", "#summary", "#details"].find(route => hash === route))
            return hash;
        else
            window.location.hash = "#search";
        return "#search";
    }

    return (
        <div className={"flexParent"}>
            <div className={"flexParent sidebar"}>
                <SidebarPresenter model={model}/>
            </div>
            <div className={"flexParent mainContent"}>
                <Show hash={"#summary"} hashState={hashState}>
                    <SummaryPresenter model={model}/>
                </Show>

                <Show hash={"#search"} hashState={hashState}>
                    <div className={"mainContent debug"} className={"container"}>
                        <SearchPresenter model={model}/>
                    </div>
                </Show>
                <Show hash={"#details"} hashState={hashState}>
                    <DetailsPresenter model={model}/>
                </Show>
            </div>
        </div>
    );
}
