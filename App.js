// const heading = React.createElement(
//   "h1", // Element
//   { id: "heading", xyz: "abx" }, // attributes
//   "Hello from React" // content or childern
// );




/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1> 
 *      </div>
 * </div>
 */


const parent = React.createElement("div",{id:"parent"},
    [  // to render multiple react element we need to make it an array of React elements
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"I am h1"),
            React.createElement("h2",{},"I am h2")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"I am h1"),
            React.createElement("h2",{},"I am h2")
        ])
    ]
)

// console.log(heading) // it is an object or React Element
console.log(parent) // it is an object or React Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
