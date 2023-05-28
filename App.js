
import React from "react";
import ReactDOM from "react-dom/client";

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


// const parent = React.createElement("div",{id:"parent"},
//     [  // to render multiple react element we need to make it an array of React elements
//         React.createElement("div",{id:"child1"},[
//             React.createElement("h1",{},"I am h1"),
//             React.createElement("h2",{},"I am h2")
//         ]),
//         React.createElement("div",{id:"child2"},[
//             React.createElement("h1",{},"I am h1"),
//             React.createElement("h2",{},"I am h2")
//         ])
//     ]
// )


// Intro to JSX->
// const Heading = <h1 id="heading">Hello JSX</h1>
// With return keyWord use {} Curly braclets
// const HeadingComponent = ()=>{
    //     return <h1>Hello from functional Component</h1>
    // } 
// WithOut return keyWord use () parenthesis

// const HeadingComponent = ()=>(
//     <h1 id="heading">Hello from functional Component</h1>
// )

// console.log(heading) // it is an object or React Element
// console.log(parent) // it is an object or React Element




//Component Composition

// When one component is placed under another component


const Title=()=>(
        <div>
            <h1>Component Compostion</h1>
            <h3>Hello Title Component</h3>
        </div>
);

// With Return 
const Component=()=>{
    return (
        <div>
            <Title/>
            <h2>Rendering Component</h2>
        </div>
    )
}

// WithOut Return 
// const Component=()=>(
//     <div>
//         <Title/>
//         <h2>Rendering Component</h2>
//     </div>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component/>);
