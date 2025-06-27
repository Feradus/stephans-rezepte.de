document.addEventListener('DOMContentLoaded', loadRecipesFromJson);

function loadRecipesFromJson() {
	const recipes = document.querySelector('.recipes');

	fetch('/data/recipes.json')
		.then((response) => {
			if (!response.ok) throw new Error('Network response was not ok');
			return response.json();
		})
		.then((data) => {
			data.forEach((recipe) => {
				const recipeWrapperLink = document.createElement('a');
				const recipeDiv = document.createElement('div');
				const recipeImg = document.createElement('img');
				const recipeName = document.createElement('h2');
				const recipeTags = document.createElement('span');
				const recipeKeyFiguresDiv = document.createElement('div');
				const keyFiguresDifficultyImg = document.createElement('img');
				const keyFiguresDifficultyDescription = document.createElement('span');
				const keyFiguresCookingTimeImg = document.createElement('img');
				const keyFiguresCookingTimeDescription = document.createElement('span');

				recipeWrapperLink.className = 'recipe-wrapper';
				recipeWrapperLink.href = 'recipes/' + recipe.slug + '.html';

				recipeDiv.className = 'recipe';

				recipeImg.className = 'recipe__img';
				recipeImg.src = recipe.img;
				recipeImg.alt = recipe.name;
				recipeImg.width = 612;
				recipeImg.height = 408;
				if(recipe.slug=='under-construction') {
					recipeImg.style.filter = 'grayscale(100%)';
				}

				recipeName.className = 'recipe__name';
				recipeName.innerHTML = recipe.name;

				recipeTags.className = 'recipe__tags';
				recipeTags.innerHTML = recipe.tags.join(' ');

				recipeKeyFiguresDiv.className = 'recipe__key-figures';

				keyFiguresDifficultyImg.className = 'key-figures__difficulty-img';
				keyFiguresDifficultyImg.src = recipe.difficultyImg;
				keyFiguresDifficultyImg.alt = 'Schwierigkeitsskala ' + recipe.difficulty;
				keyFiguresDifficultyImg.width = 50;
				keyFiguresDifficultyImg.height = 50;

				keyFiguresDifficultyDescription.className = 'key-figures__difficulty-description';
				keyFiguresDifficultyDescription.innerHTML = recipe.difficultyDescription;

				keyFiguresCookingTimeImg.className = 'key-figures__difficulty-img';
				keyFiguresCookingTimeImg.src = '../images/recipes/clock.svg';
				keyFiguresCookingTimeImg.alt = 'Uhr';
				keyFiguresCookingTimeImg.width = 50;
				keyFiguresCookingTimeImg.height = 50;

				keyFiguresCookingTimeDescription.className = 'key-figures__cooking-time-description';
				keyFiguresCookingTimeDescription.innerHTML = recipe.timeDescription;

				recipeKeyFiguresDiv.appendChild(keyFiguresDifficultyImg);
				recipeKeyFiguresDiv.appendChild(keyFiguresDifficultyDescription);
				recipeKeyFiguresDiv.appendChild(keyFiguresCookingTimeImg);
				recipeKeyFiguresDiv.appendChild(keyFiguresCookingTimeDescription);
				recipeDiv.appendChild(recipeImg);
				recipeDiv.appendChild(recipeName);
				recipeDiv.appendChild(recipeTags);
				recipeDiv.appendChild(recipeKeyFiguresDiv);
				recipeWrapperLink.appendChild(recipeDiv);
				recipes.appendChild(recipeWrapperLink);
			});
		})
		.catch((error) => {
			console.error('Fehler beim Laden der Rezepte:', error);
		});
}
