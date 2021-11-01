import customTheme from './themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import { useFeaturedMovie } from './hooks/useFeaturedMovie';

const useStyle = makeStyles((theme) => ({
  root : {
    height: "100vh",
  }
}))


function App() {
  const classes = useStyle()
  const {featuredMovie, loading} = useFeaturedMovie()
  
  return (
    <ThemeProvider theme={customTheme}>

      <div 
        className={classes.root} 
        style={!loading ? {
          background: `url("https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}") center/cover no-repeat`
        } : {
          background: "#242424"
        }}
      >
        <Navbar />
        <Home featuredMovieTitle={!loading ? featuredMovie.original_title : ""} />

      </div>

    </ThemeProvider>
  );
}

export default App;
