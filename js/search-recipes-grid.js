document.querySelector('.search__input').addEventListener('input', searchRecipesGrid);

function searchRecipesGrid() {
	const input = document.querySelector('.search__input').value.toLowerCase();
	const recipes = document.querySelectorAll('.recipe');

	recipes.forEach((recipe) => {
		const recipeName = recipe.querySelector('.recipe__name').textContent.toLowerCase();
		const recipeTags = recipe.querySelector('.recipe__tags').textContent.toLowerCase();
		const matches = recipeName.includes(input) || recipeTags.includes(input);

		const link = recipe.closest('a');
		if (link) {
			link.classList.toggle('recipe--hidden', !matches);
		}
	});
}
