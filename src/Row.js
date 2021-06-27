import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// base url for the images
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, fetchMovie }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	// A snippet of code which runs based on a condition/variable
	useEffect(() => {
		// if [], run once when the row loads, and dont run again
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			const results = request.data.results;
			setMovies(results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "330",
		width: "100%",
		playerVars: {
			// https://
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(
				movie?.name || movie?.title || movie?.original_title || ""
			)
				.then((url) => {
					// https://www.youtube.com/watch?v=XtMThy8QKq&banana=5
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{/* several row__poster(s) */}

				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row__poster ${
							isLargeRow && "row__posterLarge"
						}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						onClick={() => {
							fetchMovie(movie);
							handleClick(movie);
						}}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};

export default Row;
