import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll", true);
		};
	}, []);

	return (
		<nav className={`nav ${show && "nav__black"}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
				className="nav__logo"
			/>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt=""
				className="nav__avatar"
			/>
		</nav>
	);
};

export default Nav;
