
const makePizza = (cheese, veg, protein, crust) => {
    //console.log(`I want a ${cheese} ${veg} ${protein} ${crust} crust pizza`);
}


//pizza types
const pizzaArray = [
    {
        cheese: "Cheese",
        veg: "Bell Peppers",
        protein: "Sausage",
        crust: "Regular"

    },
    {
        cheese: "Cheese",
        veg: "Bell Peppers",
        protein: "Sausage",
        crust: "Thin"

    },
    {
        cheese: "Cheese",
        veg: "Spinach",
        protein: "Tofu",
        crust: "Regular"

    },
    {
        cheese: "Cheese",
        veg: "Tomatoes",
        protein: "Chicken",
        crust: "Deep Dish"

    },
    {
        cheese: "Cheese",
        veg: "Spinach",
        protein: "Bacon",
        crust: "Thin"

    },
]

pizzaArray.forEach((pizza) => {
    makePizza(pizza.cheese, pizza.veg, pizza.protein, pizza.crust)
});


// Your personalized pizza //

document.getElementById("submit").addEventListener("click", getPizzaTopping);


//change it to where each result is printed to the DOM. 
function getPizzaTopping() {
    var p = document.getElementById("cheese");
    var result = p.options[p.selectedIndex].value;

    p = document.getElementById("veg");
    var resultTwo = p.options[p.selectedIndex].value;

    p = document.getElementById("protein");
    var resultThree = p.options[p.selectedIndex].value;

    p = document.getElementById("crust");
    var resultFour = p.options[p.selectedIndex].value;

    var html = ` 
    <ul>
        <h4>Cheese Type:</h4>
        <p>${result}</p>
        <h4>Veggie Type:</h4>
        <p>${resultTwo}</p>
        <h4>Protein Type:</h4>
        <p>${resultThree}</p>
        <h4>Crust Type:</h4>
        <p>${resultFour}</p>
    </ul>`

    document.getElementById("personalized").innerHTML = html;
    console.log("Button is clicked");
}

