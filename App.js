import React from "react";
import ReactDOM from "react-dom/client"; 

//React.createElement => ReactElement-js Object => HTMLElement(render)
const heading=React.createElement("h1",{id:"heading"},"Namste React");

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
//jsx is html like syntax
//jsx(transpiled before its reaches to js engine) - Prarcel - babel

//jsx => React.createElement => ReactElement-js Object => HTMLElement(render)
const jsxheading=<h2 id="heading" className="head">Namste using jsx</h2>;
console.log(jsxheading);

// React Component
//1 class based component - old way writting code 
//2 functional component -new way writting code 

// React functional component
// const HeadingComponent= () => {
//     return <h1 className="heading">Namste react functional component</h1>
// };

// rending component inside  another component -known as component composition
const Title=() => (
<h1 className="head" tabIndex="5">Namste using jsx</h1>
);
const n=1000;
//const HeadingComponent= () => <h1>Namste react functional component</h1>;
const HeadingComponent= () => (
 <div id="container">
    <h2>{n}</h2>
    <h3>{console.log("hgsgh")}</h3>
    {n};
    <Title />
<h1 className="heading">Namste react functional component</h1>
</div>
);
root.render(jsxheading);
root.render(heading);
root.render(<HeadingComponent />);



