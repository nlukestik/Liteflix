import MovieCard from "../MovieCard/MovieCard";

const localStorage = window.localStorage.getItem("movies")

const showMovies = () => {
	const movies = localStorage.split("-")
	var i = 0
	return(
		movies.slice(0).reverse().map(e =>
			<MovieCard 
				key={i++}
				type="myMovie"
				title={JSON.parse(e).movieTitle}
				bkg={JSON.parse(e).image}
				added={JSON.parse(e).addedDate}
			/>
		)
	)
}

export default function MyMovies() {
	return(
		localStorage ?
			showMovies()
			:
			<div>No se encontraron películas</div>
		
	)
};
