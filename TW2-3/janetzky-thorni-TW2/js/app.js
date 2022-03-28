function RenderTest(){ console.log("Vue sub-component render test"); return true; }

function App(props){
    return  (
        <div class="flexParent">
            <div class="sidebar debug" class="container"    ><SidebarPresenter model={props.model}/></div>
            <div class="mainContent debug" class="container" ><SummaryPresenter model={props.model}/></div>
        </div>
    );
}
