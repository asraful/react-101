const Pet = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("h2",{},props.animal),
        React.createElement("h3",{},props.breed),
    ]);
};


const App = () => { 
    return React.createElement(
    "div",
    {},
    [
        React.createElement("h1",{},"Adopt me!"),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breed: "Havanese"

        }),
        React.createElement(Pet, {
            animal: "Bird",
            name: "Name",
            breed: "Mixed"
        }),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Whitecat",
            breed: "mixed"
        }),
    ]
    )
};

const continer = document.getElementById('root');
const root = ReactDOM.createRoot(continer);
root.render(React.createElement(App));
