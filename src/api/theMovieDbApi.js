export const getPopularMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
		const data = await response.json()
		return data?.results
	} 
	catch(error) {
		alert(error)
	}
}

export const getFeaturedMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
		const data = await response.json()
		return data?.results
	} 
	catch (error) {
		alert(error)
	}
}