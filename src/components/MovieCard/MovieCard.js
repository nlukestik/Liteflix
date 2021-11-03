import { Button, Typography } from "@material-ui/core";

import "./MovieCard.scss"

export default function MovieCard(props) {

	const isPopular = props.type === "popular"

	return(
		isPopular ? (
			<div style={{background: `url("https://image.tmdb.org/t/p/original${props.bkg}") center/cover no-repeat`, borderRadius:3}}>
				<div className="movieCard">
					<div className="movieCard__content">
						<Button
							variant="contained"
							color="secondary"
							startIcon={
								<svg width="11" height="16" viewBox="0 0 11 16" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M9.94234 8.2363L0.625 1.875V14.125L9.94234 8.2363Z"/>
								</svg>
							}
						/>

						<Typography variant="body2" className="movieCard__content__title">
							{props.title}
						</Typography>
					</div>
					<div className="movieCard__hover">
						<div className="movieCard__hover-popular">
							<div>
								<svg width="12" height="11" viewBox="0 0 12 11" fill="none">
									<path fill="#64EEBC" d="M5.81064 0.557022C5.87212 0.376184 6.12788 0.376184 6.18936 0.557023L7.34407 3.95378C7.37132 4.03393 7.44608 4.08825 7.53073 4.08939L11.1181 4.13794C11.309 4.14052 11.3881 4.38377 11.2351 4.49812L8.36141 6.64597C8.2936 6.69666 8.26505 6.78454 8.29011 6.8654L9.3525 10.2922C9.40905 10.4746 9.20214 10.6249 9.04611 10.5148L6.11536 8.44545C6.0462 8.39662 5.9538 8.39662 5.88464 8.44545L2.95389 10.5148C2.79786 10.6249 2.59095 10.4746 2.6475 10.2922L3.70989 6.8654C3.73495 6.78454 3.7064 6.69666 3.63859 6.64597L0.764906 4.49812C0.611916 4.38377 0.690952 4.14052 0.881936 4.13794L4.46927 4.08939C4.55392 4.08825 4.62868 4.03393 4.65593 3.95378L5.81064 0.557022Z"/>
								</svg>

								{props.rating}
							</div>
							
							{props.released.substring(0,4)}
						</div>
					</div>
				</div>
			</div>
		) : (
			<div style={{background: `url("${props.bkg}") center/cover no-repeat`, borderRadius:3}}>
				<div className="movieCard">
					<div className="movieCard__content">
						<Button
							variant="contained"
							color="secondary"
							startIcon={
								<svg width="11" height="16" viewBox="0 0 11 16" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M9.94234 8.2363L0.625 1.875V14.125L9.94234 8.2363Z"/>
								</svg>
							}
						/>

						<Typography variant="body2" className="movieCard__content__title">
							{props.title}
						</Typography>
					</div>
					<div className="movieCard__hover">
						<div className="movieCard__hover-myMovie">
							Añadido: {props.added}
						</div>
					</div>
				</div>
			</div>
		)
	)
}