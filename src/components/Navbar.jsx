import { makeStyles, AppBar, Toolbar, Container } from "@material-ui/core"
import logo from "../assets/images/logo.svg"
import avatar from "../assets/images/avatar.png"

const useStyle = makeStyles((theme) => ({
	navBar: {
		background: "black",
		color: "white",

		"& .MuiToolbar-regular" : {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			minHeight: 80,
		},
		"& .MuiToolbar-gutters" : {
			paddingLeft: 24,
			paddingRight: 24,
		}
	},
	logo: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: 400,
		"& > img" : {
			marginRight: 5,
		},
		[theme.breakpoints.down(600)] : {
			width: "auto",
			"& > img" : {
				marginRight:0,
			},
		}
	},
	addMovieDesk : {
		display: "flex", 
		alignItems: "center",
		"& svg > *" : {
			stroke: "white",
		},
		[theme.breakpoints.down(600)] : {
			display: "none",
		},
		"&:hover ": {
			color: theme.palette.primary.main,
			"& svg > *" : {
				stroke: theme.palette.primary.main
			}
		}
	},
	addMovieMobile : {
		display: "none", 
		alignItems: "center",
		border: "1px solid white",
		borderRadius: "100%",
		padding: 9,
		[theme.breakpoints.down(600)] : {
			display: "flex",
		}
	},
	menuContainer: {
		display: "flex",
		alignItems: "center",
		padding: 0,
		"& > li" : {
			paddingLeft: 20,
			listStyle: "none",
		},
		[theme.breakpoints.down(600)]: {
			"& > li:nth-child(-n + 2)" : {          
				display: "none",
			},
			"& > li" : {
				paddingLeft: 0,
			},
		},
	},
	avatar : {
		border: "2px solid transparent",
		borderRadius: "100%",
		"&:hover" : {
			borderColor: theme.palette.primary.main,
		}
	},
}))

export default function Navbar() {
	const classes = useStyle()
	return(
		<AppBar className={classes.navBar}>
			<Container style={{maxWidth: 1232, padding:0}}>
				<Toolbar>
					<div className={classes.addMovieMobile}>
						<svg  width="17" height="17" viewBox="0 0 17 16">
							<g fillRule="evenodd" stroke="#fff" strokeLinecap="square">
								<path d="M16.5 8H.5M8.5 0v16"/>
							</g>
						</svg>
					</div>
					<div className={classes.logo}>
						<img src={logo} width={113} height={34} alt="Liteflix" />
						
						<div className={classes.addMovieDesk +" pointer"}>
							<svg  width="17" height="17" viewBox="0 0 17 16" style={{marginRight:10}}>
								<g fillRule="evenodd" strokeLinecap="square">
									<path d="M16.5 8H.5M8.5 0v16"/>
								</g>
							</svg>
							<span>Agregar película</span>
						</div>

					</div>
					<ul className={classes.menuContainer}>
						<li>
							1
						</li>
						<li>
							2
						</li>
						<li style={{height:44}}>
							<img src={avatar} className={classes.avatar} width={40} height={40} alt="profile avatar" />
						</li>
					</ul>
					{/* <div className={classes.drawerMenuContainer}>
						<DrawerMenu />
					</div> */}
				</Toolbar>
			</Container>
		</AppBar>
	)	
};
