const express = require("express");
const app = express();
const PORT = 3000;

const foods = [
    {
        id: 1,
        name: "Adobo",
        price: 75
    },
    {
        id: 2,
        name: "Sinigang",
        price: 85
    },
    {
        id: 3,
        name: "Fried Chicken",
        price: 95
    },
    {
        id: 4,
        name: "Pancit Canton",
        price: 60
    },
    {
        id: 5,
        name: "Unli Letchon ",
        price: 230
    }
];

// Get individual food
app.get("/api/foods/:id", (req, res) => {

    const id = Number(req.params.id);

    const food = foods.find(food => food.id === id);

    if (!food) {
        return res.status(404).json({
            message: "Food not found"
        });
    }

    res.json(food);
});

// Get all foods
app.get("/api/foods", (req, res) => {
    res.json(foods);
});

// Serve index.html
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});