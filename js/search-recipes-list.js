document.querySelector('.search__input').addEventListener('input', searchRecipesList);
let allRecipes = [];

function searchRecipesList() {
	fetch('/data/recipes.json')
		.then((response) => response.json())
		.then((data) => {
			allRecipes = data;
		});

	const input = this.value.toLowerCase();
	const resultsList = document.querySelector('.recipe-search-list');
	resultsList.innerHTML = '';

	const inputWords = input.split(/\s+/).filter(Boolean);

	const matches = allRecipes.filter((recipe) =>
		inputWords.some(
			(word) =>
				recipe.name.toLowerCase().includes(word) || recipe.tags.some((tag) => tag.toLowerCase().includes(word))
		)
	);

	matches.forEach((recipe) => {
		const recipeListItem = document.createElement('li');
		const recipeLink = document.createElement('a');

		recipeLink.className = 'recipe-search-list__link';
		recipeLink.href = '/html/recipes/' + recipe.slug + '.html';
		recipeLink.innerHTML = recipe.name;

		recipeListItem.appendChild(recipeLink);
		resultsList.appendChild(recipeListItem);
	});
}
