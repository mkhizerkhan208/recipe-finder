const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = 'b03e4223beb44adcb574583a11e71c5f';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

// ✅ Serve frontend files from 'public' folder
app.use(express.static('public'));

// ✅ Recipe API route
app.get('/recipes', async (req, res) => {
    const { ingredients, taste } = req.query;
    try {
        const response = await axios.get(`${BASE_URL}?apiKey=${API_KEY}&includeIngredients=${ingredients}&diet=${taste}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
    }
});

// ✅ Glitch-compatible port log
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
