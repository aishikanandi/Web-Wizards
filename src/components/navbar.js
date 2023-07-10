import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header class="margin-navbar">
            <div class="logo">
			<img alt="" src="openlakelogo.svg"></img>
            </div>
            <div class="nav-items">
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				<a href="/programtimeline">Programs</a>
				<a href="/#">Community</a>
                <a href="/#">Blogs</a>
                <a href="/#">Subscription</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            </div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;