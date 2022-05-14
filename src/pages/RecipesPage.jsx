import React, { useEffect, useRef, useState } from 'react'
import { useParams  } from 'react-router-dom'
import { recipes } from '../data/recipes'
import '../styles/RecipesPage.css'

export default function RecipesPage() {
	const { category } = useParams()
	const [recipesList, setRecipesList] = useState(recipes)
	
	const mounted = useRef();
	useEffect(() => {
		if (!mounted.current) {
			// do componentDidMount logic
			if(category !== 'all') {
				console.log("is category");
				setRecipesList(recipes.filter(recipe => recipe.category === category))
			} else {
				console.log("is all");
				setRecipesList(recipes)
			}
			mounted.current = true;
		} else {
			// do componentDidUpdate logic
			if(category !== 'all') {
				console.log("is category");
				setRecipesList(recipes.filter(recipe => recipe.category === category))
			} else {
				console.log("is all");
				setRecipesList(recipes)
			}
		}
	});
	// useEffect(() => {
	// 	if(category !== 'all') {
	// 		console.log("is category");
	// 		setRecipesList(recipes.filter(recipe => recipe.category === category))
	// 	} else {
	// 		console.log("is all");
	// 		setRecipesList(recipes)
	// 	}
	// }, [])
	
	return (
		<div className='container recipes-container'>
            {recipesList && recipesList.map(recipe => {
                return (
                    <div className='recipe'>
                        <div className="recipe-photo">
							<img src={recipe.image} alt="" />
						</div>
						<div className="recipe-details">
							<h3>{recipe.title.toUpperCase()}</h3>
							<p>{recipe.recipe}</p>
						</div>
                    </div>
                )
            })}
        </div>
	)
}
