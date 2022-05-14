import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams  } from 'react-router-dom'
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
				setRecipesList(recipes.filter(recipe => recipe.category === category))
			} else {
				setRecipesList(recipes)
			}
			mounted.current = true;
		} else {
			// do componentDidUpdate logic
			if(category !== 'all') {
				setRecipesList(recipes.filter(recipe => recipe.category === category))
			} else {
				setRecipesList(recipes)
			}
		}
	}, [category]);
	
	return (
		<div className='container recipes-container'>
            {recipesList && recipesList.map(recipe => {
                return (
                    <div className='recipes__recipe'>
                        <div className="recipes__recipe-photo">
							<Link to={`/recipe/${recipe.id}`} >
								<img src={recipe.image} alt="" />
							</Link>
							
						</div>
						<div className="recipes__recipe-details">
							<Link to={`/recipe/${recipe.id}`} >
								<h3>{recipe.title.toUpperCase()}</h3>
							</Link>
							<p>{recipe.recipe}</p>
						</div>
                    </div>
                )
            })}
        </div>
	)
}
