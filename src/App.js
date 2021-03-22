import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit ",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍴": "Fork and Knife",
  "🥄": "Spoon"
};

var foods = Object.keys(foodDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodChange(event) {
    var input = event.target.value;
    var meaning = foodDictionary[input];
    if (meaning === undefined) {
      meaning = "We don't have in our database";
    }
    setMeaning(meaning);
  }

  function foo(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Food & Drink Intepretor</h1>
      <input onChange={foodChange}></input>
      <h2>{meaning}</h2>
      <div>
        {foods.map((item) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => foo(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
