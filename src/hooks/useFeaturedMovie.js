import { useEffect, useState } from 'react'
import { getFeaturedMovie } from '../api/theMovieDbApi'

export const useFeaturedMovie = () => {
	const [featuredMovie, setFeaturedMovie] = useState([])
  const [loading, setLoading] = useState(false)

  async function sliceFeaturedMovies() {
    setLoading(true)
    const movies = await getFeaturedMovie()
    setFeaturedMovie(movies[0])
    setLoading(false)
  }

  useEffect(() => {

    sliceFeaturedMovies()
    
  }, [])

	return {featuredMovie, loading}
}