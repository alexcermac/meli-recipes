import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/recipes/:category" element={<RecipesPage />} />
				<Route path="/recipe/:id" element={<RecipeDetailsPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}

export default App;
