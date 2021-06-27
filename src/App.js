// import { useState } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

console.log(process.env.REACT_APP_API_KEY);

function App() {
	/*
	const [movie, setMovie] = useState();

	const getMovie = (object) => {
		setMovie(object);
	};
	*/

	const getMovie = (object) => {
		const red = object;
		return red;
	};

	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
				fetchMovie={getMovie}
			/>
			<Row
				title="Trending Now"
				fetchUrl={requests.fetchTrending}
				fetchMovie={getMovie}
			/>
			<Row
				title="Top Rated"
				fetchUrl={requests.fetchTopRated}
				fetchMovie={getMovie}
			/>
			<Row
				title="Action Movies"
				fetchUrl={requests.fetchActionMovies}
				fetchMovie={getMovie}
			/>
			<Row
				title="Comedy Movies"
				fetchUrl={requests.fetchComedyMovies}
				fetchMovie={getMovie}
			/>
			<Row
				title="Horror Movies"
				fetchUrl={requests.fetchHorrorMovies}
				fetchMovie={getMovie}
			/>
			<Row
				title="Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
				fetchMovie={getMovie}
			/>
			<Row
				title="Documentaries"
				fetchUrl={requests.fetchDocumentaries}
				fetchMovie={getMovie}
			/>
		</div>
	);
}

export default App;
