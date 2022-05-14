import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import '../styles/RecipeDetailsPage.css'
import { recipes } from '../data/recipes'

export default function RecipeDetailsPage() {
    const { id } = useParams()
    const [recipeDetails, setRecipe] = useState(recipes.filter(recipe => recipe.id == id)[0])

    return <div className='container recipe'>
        <div className="recipe__header">
            <div className="recipe__image">
                <img src={recipeDetails.image} alt="" />
            </div>
            <div className="recipe__details">
                <h3>{recipeDetails.title.toUpperCase()}</h3>
                <p>Time: {recipeDetails.time} minutes</p>
                <div>
                    <p>Ingredients:</p>
                    <div className='recipe__details__ingredients'>
                        {recipeDetails.ingredients.map((ingredient, index) => {
                            return <p>{ingredient}{index < recipeDetails.ingredients.length - 1
                                ? ','
                                : ''
                            }&nbsp;</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="recipe__instructions">

        </div>
    </div>  
}
