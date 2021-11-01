import { useEffect, useState } from 'react'
import { getFeaturedMovies } from '../api/theMovieDbApi'

export const useFeaturedMovie = () => {
	const [featuredMovie, setFeaturedMovie] = useState([])
  const [loading, setLoading] = useState(false)

  async function mainFeaturedMovie() {
    setLoading(true)
    const movies = await getFeaturedMovies()
    setFeaturedMovie(movies[0])
    setLoading(false)
  }

  useEffect(() => {

    mainFeaturedMovie()
    
  }, [])

	return {featuredMovie, loading}
}