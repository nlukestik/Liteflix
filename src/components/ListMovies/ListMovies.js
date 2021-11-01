import React, { useState } from "react"
import { Grid, ClickAwayListener, Typography } from "@material-ui/core";

import "./ListMovies.scss"
import PopularMovies from "../PopularMovies/PopularMovies";
import MyMovies from "../MyMovies/MyMovies";
import { usePopularMovies } from "../../hooks/usePopularMovies";

export default function ListMovies() {
  const [view, setView] = useState('populares');
	const {popularMovies, loading} = usePopularMovies()

	const [isDropdownVisible, setIsDropdownVisible] = useState(false)

	const handleToggle = () => {
    setIsDropdownVisible(!isDropdownVisible)
  };

	const isMobile = window.innerWidth < 960

	const arrowDownIcon = <>
		<svg 
			width="15" 
			height="8" 
			viewBox="0 0 13 6"
			style={isDropdownVisible ? 
				{transform: "rotateX(180deg)", transition:".3s"} : {}}
		>
			<path fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" d="M1 0l5.546 5.546L12.09 0"/>
		</svg>
	</>

	const activeIcon = <>
		<svg width="14" height="11" viewBox="0 0 14 11" fill="none">
			<path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2"/>
		</svg>
	</>


	return(
		<>
			<Grid item xs={12} md={2} className="listMovies">
				<div className="listMovies__dropdown">
					<div 
						onClick={handleToggle}
						className="listMovies__dropdown__selection" 
					>
						<Typography style={(view !== "populares") && !isMobile ? {fontSize:14} : {}}>
							Ver: <b>{" "+ view}</b>
							{arrowDownIcon}
						</Typography>


					</div>
						
					{
						isDropdownVisible ? (
							<ClickAwayListener onClickAway={e => {setIsDropdownVisible(!isDropdownVisible)}}>
							<div className="listMovies__dropdown__menu">
								<div 
									className="listMovies__dropdown__menu__item" 
									onClick={e => { 
										setView("populares");
										handleToggle();
									}}
								>
									{view === "populares" ? (
										<>
											<b>Populares</b>
											{activeIcon}
										</>
									) : 
										"Populares"
									}
								</div>

								<div
									className="listMovies__dropdown__menu__item" 
									onClick={e => { 
										setView("mis peliculas");
										handleToggle();
									}}
								>
									{view === "mis peliculas" ? (
										<>
											<b>Mis películas</b>
											{activeIcon}
										</>
									) : 
										"Mis películas"
									}
								</div>

								<div className="listMovies__dropdown__menu-arrowUp" />
							</div>
							</ClickAwayListener>
						) : (
							<></>
						)
					}
				</div>

				{view === "populares" ? 
					<PopularMovies movies={!loading ? popularMovies : null} />
					:
					<MyMovies />
				}
      
			</Grid>
		</>
	)
};
