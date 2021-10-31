import { Button, Typography } from "@material-ui/core";

import "./MovieCard.scss"

export default function MovieCard(props) {
	return(
		<div className="movieCard">
			<div className="movieCard__content">
				<Button
					variant="contained"
					color="secondary"
					className="movieCard__content__playButton"
					startIcon={
						<svg width="11" height="16" viewBox="0 0 11 16" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M9.94234 8.2363L0.625 1.875V14.125L9.94234 8.2363Z"/>
						</svg>
					}
				/>

				<Typography variant="body2" className="movieCard__content__title">
					House of Cards
				</Typography>
				
			</div>
		</div>
	)
};
