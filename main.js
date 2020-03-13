
const makePizza = (cheese, veggie, meat, crust) => {
    //console.log(`I want a ${cheese} ${veggie} ${meat} ${crust} crust pizza`);
}


//pizza types
const pizzaArray = [
    {
        cheese: "Cheese",
        veggie: "Bell Peppers",
        meat: "Sausage",
        crust: "Regular"

    },
    {
        cheese: "Cheese",
        veggie: "Bell Peppers",
        meat: "Sausage",
        crust: "Thin"

    },
    {
        cheese: "Cheese",
        veggie: "Spinach",
        meat: "Tofu",
        crust: "Regular"

    },
    {
        cheese: "Cheese",
        veggie: "Tomatoes",
        meat: "Chicken",
        crust: "Deep Dish"

    },
    {
        cheese: "Cheese",
        veggie: "Spinach",
        meat: "Bacon",
        crust: "Thin"

    },
]

pizzaArray.forEach((pizza) => {
    makePizza(pizza.cheese, pizza.veggie, pizza.meat, pizza.crust)
});

document.getElementById("submit").addEventListener("click", getPizzaTopping);


//change it to where each result is printed to the DOM. 
function getPizzaTopping() {
    var p = document.getElementById("pizzaTopping");
    var result = p.options[p.selectedIndex].value;

    // var v = document.getElementById("pizzaVeg");
    // var result = v.options[v.selectedIndex].value;

    // var m = document.getElementById("pizzaMeat");
    // var result = m.options[m.selectedIndex].value;

    // var c = document.getElementById("pizzaCrust");
    // var result = c.options[c.selectedIndex].value;

    document.getElementById("personalized").innerHTML = result;
    console.log("Button is clicked");
}



