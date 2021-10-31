import { makeStyles, Grid } from '@material-ui/core'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import ListMovies from '../ListMovies/ListMovies'

const useStyle = makeStyles((theme) => ({
  root : {
		maxWidth: 1200,
		margin: "auto",
  },
	
}))

export default function Home() {
	const classes = useStyle()

	return(
		<>
			<Grid container className={classes.root}>

				<FeaturedMovie />

				<ListMovies />

			</Grid>
		</>
	)
};
