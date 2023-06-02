// const heading =React.createElement("h1",{},"hellow React");
//         const root =ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);
//nested html code using react

// ** parent is object and this object is a React Element,render change this object to html code 
const parent=React.createElement(
    "div",
    { id :"parent"},
   [ React.createElement(
    "div",
    { id :"child"}, 
   [ React.createElement("h1",{},"I'm an h1 tag:)" ) ,React.createElement("h2",{},"I'm an h2 tag" )]
), React.createElement(
    "div",
    { id :"child"},
   [ React.createElement("h1",{},"I'm an h1 tag" ) ,React.createElement("h2",{},"I'm an h2 tag" )]
)]
); 

        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent); 

