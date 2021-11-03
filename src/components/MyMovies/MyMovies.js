import MovieCard from "../MovieCard/MovieCard"
import { Typography } from "@material-ui/core"

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
			<div>
				<Typography variant="body1" align="center" style={{color: "white"}}>
					<b>Sin películas.</b>
				</Typography>
				<Typography variant="body2" align="center" style={{color: "white"}}>
					Agregue una para poder visualizarla aquí.
				</Typography>

			</div>
		
	)
};
