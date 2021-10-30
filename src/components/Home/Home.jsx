import { makeStyles, Grid } from '@material-ui/core'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'

const useStyle = makeStyles((theme) => ({
  root : {
		maxWidth: 1200,
		height: "80vh",
		margin: "auto",
  },
	
}))

export default function Home() {
	const classes = useStyle()

	return(
		<>
			<Grid container className={classes.root}>

				<FeaturedMovie />

				

			</Grid>
		</>
	)
};
