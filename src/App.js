import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Thumnail from './components/Thumnail';

function App() {
	const [movie, setMovie] = useState([]);
	const [searchName, setSearchname] = useState("");
	let willBuyMovie = [];

	const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=d04e8e033f6b22270b4b6a7d2fb0abe0&query=a";
	const getDatas = async () => {
		const response = await fetch(API_URL);
		const movieData = await response.json();
		console.log(movieData);
		if (localStorage.getItem("movieStorage") === null || localStorage.getItem("movieStorage") === "") {
			localStorage.setItem("movieStorage", JSON.stringify(movieData.results));
			console.log("Add movie");
		}
		else {
			console.log("Movie is alive");
			setMovie(JSON.parse(localStorage.getItem("movieStorage")))
		}

		//setMovie(movieData.results);
	}

	function onSelectMovieClick(id, poster, name, price) {
		/*if (willBuyMovie.length > 0) {
			for (let i = 0; i < willBuyMovie.length; i++) {
				if (willBuyMovie[i].id !== id) {
					willBuyMovie.push({ movieId: id, moviePoster: poster, movieName: name, moviePrice: price });
				}
			}
		}
		else {
			willBuyMovie.push({ movieId: id, moviePoster: poster, movieName: name, moviePrice: price });
		}*/
		willBuyMovie.push({movieId: id, moviePoster: poster, movieName: name, moviePrice: price});
		console.log(willBuyMovie);
		localStorage.setItem("selectMovie", JSON.stringify(willBuyMovie));
	}

	useEffect(() => {
		getDatas();
	}, [])

	return (
		<div className="App">
			<Header />
			<input className="ui"
				type="text"
				placeholder="Search name.."
				value={searchName}
				onChange={(e) => setSearchname(e.target.value)}
			/>
			<div className="main-content">
				{movie.filter((filterName) => {
					return filterName.original_title.toLowerCase().includes(searchName.toLowerCase());
				}).map(movieInfo => {
					return (
						<Thumnail
							id={movieInfo.id}
							onSelectMovieClick={onSelectMovieClick}
							poster_path={movieInfo.poster_path}
							title={movieInfo.title}
							release_date={movieInfo.release_date}
							vote_average={movieInfo.vote_average}
						/>
					)
				})}
			</div>
		</div>
	);
}

export default App;