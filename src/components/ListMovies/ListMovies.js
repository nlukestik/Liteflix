import React, { useState } from "react"
import { Grid, Select, InputLabel, MenuItem } from "@material-ui/core";
import MovieCard from "../MovieCard/MovieCard";

import "./ListMovies.scss"


export default function ListMovies() {
  const [view, setView] = useState('POPULARES');

  const handleChangeView = (event) => {
    setView(event.target.value);
  };

	return(
		<>
			<Grid item xs={12} md={2} className="listMovies">
				<div className="listMovies__dropdown">
					<InputLabel id="selectViewLabel">Ver:{" "}
						<Select
							labelId="selectViewLabel"
							id="selectView"
							value={view}
							onChange={handleChangeView}
						>
							<MenuItem value={"POPULARES"}>Populares</MenuItem>
							<MenuItem value={"MIS PELICULAS"}>Mis Películas</MenuItem>
						</Select>
					</InputLabel>
				</div>

				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</Grid>
		</>
	)
};
