import MovieCard from "../MovieCard/MovieCard"
import { Typography } from "@material-ui/core"
import { isMobile } from "../../utils"


export default function MyMovies() {
	const localStorage = window.localStorage.getItem("movies")
	
	const showMovies = () => {
		var movies = localStorage.split("-")
		var i = 0
		movies = isMobile(600) ? (movies.slice(0)) : (movies.slice(-4))
			 
		return(
			movies.reverse().map(e =>
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
	
	return(
		localStorage ?
			showMovies()
			:
			<div style={{padding:"20px 0"}}>
				<Typography variant="body1" align="center" style={{color: "white"}}>
					<b>Sin películas.</b>
				</Typography>
				<Typography variant="body2" align="center" style={{color: "white"}}>
					Agregue una para poder visualizarla aquí.
				</Typography>

			</div>
		
	)
};
