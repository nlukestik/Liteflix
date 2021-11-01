import MovieCard from "../MovieCard/MovieCard";


export default function PopularMovies({movies}) {

	return(
		<>
			{movies && movies.map((m) => (
				<MovieCard 
					title={m.original_title} 
					bkg={`https://image.tmdb.org/t/p/w300/${m.backdrop_path}`}
					rating={m.vote_average}
					released={m.release_date}
					type="popular"
				/>
			))}
		</>
	)
}
