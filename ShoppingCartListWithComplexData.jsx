function NavBar ({menuitems, minstock}) {
    const updatList = menuitems.filter(item => item.instock >= minstock ).map((item, index) =>{
        return <li key={index}>{item.name}</li>;
    });

    return <ul style={{listStyleType: "none"}}>{updatList}</ul>;
}

const menuItems = [
    {name: "apple", instock: 2},
    {name: "pineapple", instock: 3},
    {name: "pear", instock: 0},
    {name: "peach", instock: 3},
    {name: "orange", instock: 1},
];

ReactDOM.render(
    <NavBar menuitems={menuItems} minstock={2} />,
    document.getElementById('root')
);