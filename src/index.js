import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {getMovie} from "./mock/movie";

const movie = getMovie();
const root = document.querySelector(`#root`);
ReactDOM.render(<App movieName={movie.name} movieGenre={movie.genre} movieDate={movie.date}/>, root);
