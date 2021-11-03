import { makeStyles, AppBar, Toolbar, Container } from "@material-ui/core"
import logo from "../../assets/images/logo.svg"
import avatar from "../../assets/images/avatar.png"

import "./Navbar.scss"

const useStyle = makeStyles((theme) => ({
	navbar: {
		position: "relative",
		background: "transparent",
		color: "white",
		boxShadow: "none",
		
		[theme.breakpoints.down(600)] : {
			zIndex: 1301,
		},
		"& .MuiToolbar-regular" : {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			minHeight: 80,
			[theme.breakpoints.down(600)] : {
				minHeight: 70,
			}
		},
		"& .MuiToolbar-gutters" :{
			paddingLeft: 24,
			paddingRight: 24,
		}
	},
}))

export default function Navbar({isModalOpen, onPressAddMovie}) {
	const classes = useStyle()

	return(

		<AppBar className={classes.navbar}>
			<Container style={{maxWidth: 1232, padding:0}}>
				<Toolbar>
				
					<div className="addMovieMobile" style={isModalOpen ? {visibility:"hidden"} : {visibility: "visible"}} onClick={() => onPressAddMovie(true)}>
						<svg  width="17" height="17" viewBox="0 0 17 16">
							<g fillRule="evenodd" stroke="#fff" strokeLinecap="square">
								<path d="M16.5 8H.5M8.5 0v16"/>
							</g>
						</svg>
					</div>

					<div className="midSection">
						<img src={logo} alt="Liteflix" />

						{!isModalOpen && (
							<div className="addMovieDesk pointer" onClick={() => onPressAddMovie(true)}>
								<svg  width="17" height="17" viewBox="0 0 17 16" style={{marginRight:10}}>
									<g fillRule="evenodd" strokeLinecap="square">
										<path d="M16.5 8H.5M8.5 0v16"/>
									</g>
								</svg>
								<span style={{paddingTop:2}}>Agregar película</span>
							</div>
						)}

					</div>
					<div className="menuContainer">
						<div>
							<svg width="27" height="14" viewBox="0 0 27 14" fill="none">
								<path d="M0 1H27" stroke="white"/>
								<path d="M0 7H27" stroke="white"/>
								<path d="M10 13H27" stroke="white"/>
							</svg>
						</div>
						<div>
							<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
								<path d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
								<circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC"/>
							</svg>
						</div>
						<div>
							<img src={avatar} className="avatar" alt="profile avatar" />
						</div>
					</div>
					{/* <div className={classes.drawerMenuContainer}>
						<DrawerMenu />
					</div> */}
				</Toolbar>
			</Container>
		</AppBar>
	)	
};
