import React from 'react'
import CategoryCard from '../components/CategoryCard'
import Footer from '../components/Footer'
import HomePageCarousel from '../components/HomePageCarousel'
import '../styles/HomePage.css'
import { categories } from '../data/categories'

export default function HomePage() {
    const renderCategories = () => {
        return (
            <div className="container home__categories">
                {categories.map((category, index) => {
                    return <CategoryCard
                        key={index}
                        title={category.title}
                        image={category.image}
                        path={category.path}
                    />
                })}
            </div>
        )
    }

    const renderWatchThis = () => {
        return (
            <div className='home__watch-this'>
                <div className="container">
                    <div className="home__watch-this__left-side">
                        <h3 className="home__watch-this__title">
                            Titlu reteta
                        </h3>
                        <p className="home__watch-this__description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consectetur voluptatum, soluta nobis dignissimos in culpa atque tempore officia? Excepturi?
                        </p>
                        <button className='home__watch-this__button'>VEZI RETETA</button>
                    </div>
                    <div className="home__watch-this__right-side">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zmTfQH8EWVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className=''>
            <HomePageCarousel />
            {renderCategories()}
            {renderWatchThis()}
            <Footer />
        </div>
    )
}
