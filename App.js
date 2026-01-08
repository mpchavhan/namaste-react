// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello WORLD React Inside"
// );

//console.log(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I am H1 Tag</h1>
        <h1>I am H2 Tag</h1>
    </div>
     <div id="child2">
        <h1>I am H1 Tag</h1>
        <h1>I am H2 Tag</h1>
    </div>
</div>

ReactElement(Object) => HTMLAllCollection(Browser understand); */}

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I am an H1 Tag"),
        React.createElement("h2", {}, "I am an H2 Tag")
        ]),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am an H1 child2 Tag"),
        React.createElement("h2", {}, "I am an H2 child2 Tag")
        ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);