const Pet = () => {
    return React.createElement("div",{},[
        React.createElement("h1",{},"Luna"),
        React.createElement("h2",{},"Dog"),
        React.createElement("h3",{},"Havanese")
    ])
};


const App = () => { 
    return React.createElement(
    "div",
    {},
    [
        React.createElement("h1",{},"Adopt me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ]
    )
};

const continer = document.getElementById('root');
const root = ReactDOM.createRoot(continer);
root.render(React.createElement(App));
