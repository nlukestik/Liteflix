import { Button, Typography } from "@material-ui/core";
import { ReactComponent as PlayIcon } from '../../statics/play.svg'
import { ReactComponent as StarIcon } from '../../statics/star.svg'

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
							startIcon={<PlayIcon />}
						/>

						<Typography variant="body2" className="movieCard__content__title">
							{props.title}
						</Typography>
					</div>
					<div className="movieCard__hover">
						<div className="movieCard__hover-popular">
							<div>
								<StarIcon />

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
							startIcon={<PlayIcon />}
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