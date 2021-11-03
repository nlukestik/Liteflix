import React, { useState } from 'react';
import { makeStyles, Fade, Typography, Input, Button, Dialog } from '@material-ui/core';
import Dropzone from "./Dropzone"

import "./Modal.scss"

const useStyle = makeStyles((theme) => ({
	buttonsContainer : {
		[theme.breakpoints.down(600)] : {
			paddingLeft: 64,
			paddingRight: 64,
		},
		
	},
	button : {
		display: "block",
		letterSpacing: 4,
		padding: "12px 0px",
		width: 250,
		fontSize: "18px",
		boxShadow: "none",
		borderRadius: 0,
		fontWeight: 300,
		background: "rgba(255, 255, 255,1)",
		color: "rgba(36, 36, 36,1)",
		"&:hover" : {
			boxShadow: "none",
		},
	},
	exitMobile : {
		display: "none",	
		marginTop: 24,
		border: "1px solid rgba(255, 255, 255, 0.5)",
		background: "rgba(36, 36, 36,1)",
		color: "white",
		[theme.breakpoints.down(600)] : {
			display: "block",
		},
	}
	
}))

export default function AddMovieModal({isModalOpen, setModalOpen}) {
  const classes = useStyle()
	const [movieTitle, setMovieTitle] = useState("")
	const [image, setImage] = useState(null);
	const [addedDate, setAddedDate] = useState("")
	
	
	const handleAddMovie = () => {
		const localStorage = window.localStorage.getItem("movies")
		let date = new Date()
		setAddedDate(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
		const newMovie = JSON.stringify({movieTitle, image, addedDate})
		if (localStorage) {
			const movies = `${localStorage}-${newMovie}`
			window.localStorage.setItem('movies', movies)
		}
		else { window.localStorage.setItem('movies', newMovie)}
		setModalOpen(false)
	}

	const handleClose = () => {
		setMovieTitle("")
		setImage(null)
		setAddedDate("")
		setModalOpen(false)
	}
	
  return (
    <div>
      
			<Dialog open={isModalOpen} onClose={() => setModalOpen(false)} aria-labelledby="dialog-modal" className="modal">
				<Fade in>
					<div className="modal__content">
						<Typography variant="h5" id="modal-title">Agregar Película</Typography>

						<Dropzone setImage={setImage} />

						<Input 
							placeholder="Título" 
							value={movieTitle} 
							onChange={(e) => setMovieTitle(e.target.value)}
						/>

						<div className={classes.buttonsContainer}>
							<Button
								variant="contained"
								className={classes.button}
								disabled={(!image || !movieTitle)}
								onClick={handleAddMovie}
							>
								Subir película
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={handleClose}
								className={classes.button+" "+classes.exitMobile}
							>
								Salir
							</Button>
						</div>
						<div className="exitDesk pointer" onClick={handleClose}>
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
								<path d="M1.42892 1.42899L15.5711 15.5711" stroke="white" strokeLinecap="square"/>
								<path d="M1.42892 15.571L15.5711 1.42887" stroke="white" strokeLinecap="square"/>
							</svg>
						</div>
					</div>
				</Fade>
      </Dialog>

    </div>
  );
}
