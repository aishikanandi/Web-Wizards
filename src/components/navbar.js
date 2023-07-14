import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
	const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const showNavbar2 = () => {
		const navRef = document.getElementById('navRef');
		if (navRef.style.display === 'none') {
		  navRef.style.display = 'block';
		} else {
		  navRef.style.display = 'none';
		}
	  };
	return (
		<header class="margin-navbar">
            <div class="logo">
			<img alt="" src="openlakelogo.svg"></img>
            </div>
            <div class="nav-items">
			<nav ref={navRef}>
				<a href="/">Home</a>
				<div class="dropdown">
				<a href="#" class="dropbtn" onHover={showNavbar2}>Programs<i class="fa fa-caret-down"></i></a>
				<div class="dropdown-content" id='navRef'>
					<a href="/programtimeline">Our Programs</a>
					<a href="#">Opensource Programs</a>
				</div></div>
				<a href="/projects">Projects</a>
				<div class="dropdown">
				<a href="#" class="dropbtn" onHover={showNavbar2}>Community<i class="fa fa-caret-down"></i></a>
				<div class="dropdown-content" id='navRef'>
					<a href="#">Mentors</a>
					<a href="/walloffame">Wall of Fame</a>
				</div>
			</div>
                <a href="/blogs">Blogs</a>
                <a href="/subscription">Subscription</a>
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