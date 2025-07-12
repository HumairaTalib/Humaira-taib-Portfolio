// navbar toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
// search bar functionality
const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const recipes = document.querySelectorAll('.recipe');
  recipes.forEach((recipe) => {
    const recipeTitle = recipe.querySelector('.recipe-title').textContent.toLowerCase();
    if (recipeTitle.includes(searchTerm)) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
});

// Recipes Detail
function showRecipe(button) {
  const recipeDetails = button.parentNode.querySelector(".recipe-details");
  if (recipeDetails.style.display === "block") {
    recipeDetails.style.display = "none";
    button.textContent = "View Recipe";
  } else {
    recipeDetails.style.display = "block";
    button.textContent = "Hide Recipe";
  }
}