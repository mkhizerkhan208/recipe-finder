async function findRecipes() {
  const ingredients = document.getElementById('ingredients').value;
  const taste = document.getElementById('taste').value;

  const response = await fetch(`/recipes?ingredients=${ingredients}&taste=${taste}`);
  const data = await response.json();

  const container = document.getElementById('recipes');
  container.innerHTML = '';

  if (data.results && data.results.length > 0) {
    data.results.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';

      card.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" />
        <p><a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a></p>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No recipes found. Try different ingredients!</p>';
  }
}
