import { makeStyles, Grid, Typography, Button } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
	root : {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		height: "75vh",
		color: "white",
		[theme.breakpoints.down(600)] : {
			height: "85vh",
		},
		[theme.breakpoints.down(960)] : {
			textAlign: "center",
		}
		
  },
	title : {
		[theme.breakpoints.down(600)] : {
			fontSize: 70,
		},

	},	
	buttonsContainer : {
		display: "flex",
		justifyContent: "flex-start",
		paddingLeft: 4,
		[theme.breakpoints.down(600)] : {
			alignItems: "center",
			flexDirection: "column",
			paddingLeft: 64,
			paddingRight: 64,
			background: "linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%)",

		},
		
	},
	button : {
		letterSpacing: 4,
		marginTop: 16,
		padding: "12px 0px",
		width: 250,
		fontSize: "18px",
		boxShadow: "none",
		borderRadius: 0,
		fontWeight: 300,
		"& svg" : {
			marginRight: 5,
			stroke: "white",
		},
		"&:hover" : {
			boxShadow: "none",
		},
	},
	myListButton : {
		padding:"10px 0px",
		border: "1px solid rgba(255, 255, 255, 0.5)",
		background:"rgba(36, 36, 36,0.5)",
		color: "white",
		"&:hover" : {
			color: "black",
			transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
			"& svg" : {
				stroke: theme.palette.secondary.main
			}
		},
		[theme.breakpoints.up(600)] : {
			marginLeft: 24,
		}
	}
	
}))

export default function FeaturedMovie({title}) {
	const classes = useStyle()

	return(
		<>
			<Grid item xs={12} md={10} className={classes.root}>

				<Typography variant="h6" style={{paddingLeft:4}}>
					Original de <b>Liteflix</b>
				</Typography>

				<Typography variant="h1" color="primary" className={classes.title}>
					{title}
				</Typography>

				<div className={classes.buttonsContainer}>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={
							<svg width="11" height="16" viewBox="0 0 11 16" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M9.94234 8.2363L0.625 1.875V14.125L9.94234 8.2363Z"/>
							</svg>
						}
					>
						Reproducir
					</Button>

					<Button
						variant="contained"
						className={classes.button+" "+classes.myListButton}
						startIcon={
							<svg width="17" height="17" viewBox="0 0 17 16">
								<g fill="none" fillRule="evenodd" strokeLinecap="square">
										<path d="M16.5 8H.5M8.5 0v16"/>
								</g>
							</svg>

						}
					>
						Mi Lista
					</Button>
				</div>

			</Grid>
		</>
	)
};
