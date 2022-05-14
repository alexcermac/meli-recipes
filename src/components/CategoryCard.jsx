import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../styles/CategoryCard.css"

export default function CategoryCard({ title, image, path}) {
    const [titleActive, setTitleActive] = useState('')
    return (
        <Link
            to={path}
            className="category-card"
            onMouseEnter={() => setTitleActive('category-card__title--active')}
            onMouseLeave={() => setTitleActive('')}
        >
            <div className="category-card__image-container">
                <img src={image} alt="" />
            </div>
            <h3 className={`category-card__title ${titleActive}`}>{title.toUpperCase()}</h3>
        </Link>
    )
}
