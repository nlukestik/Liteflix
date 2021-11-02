import React, { useState } from 'react';
import { makeStyles, Modal, Backdrop, Fade, Typography, Input, Button } from '@material-ui/core';
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

export default function AddMovieModal() {
  const classes = useStyle()
  const [open, setOpen] = useState(true);
	const [image, setImage] = useState("");

	const isMobile = window.innerWidth < 600

  const handleClose = () => {
    setOpen(false);
  };

	const imgDropped = (img) => {
    setImage(img);
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal__content">
            <Typography variant="h5" id="modal-title">Agregar Película</Typography>

						<Dropzone/>

						<Input placeholder="Título" inputProps={{ 'aria-label': 'description' }} />
						<div className={classes.buttonsContainer}>
							<Button
								variant="contained"
								className={classes.button}
								disabled={true}
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
      </Modal>
    </div>
  );
}
