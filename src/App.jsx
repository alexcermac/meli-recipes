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

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				{/* <Route exact path="/recipes/all" element={<RecipesPage />} /> */}
				<Route path="/recipes/:category" element={<RecipesPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}

export default App;
