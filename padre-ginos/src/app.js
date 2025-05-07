import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "head" }, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni"
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese"
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
    }),
    React.createElement(Pizza, {
      name: "The Veggie Supreme",
      description: "Bell Peppers, Mushrooms, Onions, Black Olives, Fresh Tomatoes"
    }),
    React.createElement(Pizza, {
      name: "The Spicy BBQ Chicken",
      description: "Grilled Chicken, BBQ Sauce, Red Onions, Cilantro"
    })
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
