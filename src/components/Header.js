import React from 'react'
import './Header.css'
// import Headerbackground from '../assets/headerback1.mp4'

const Header = () => {
    return (
		<header className="home-header">
			{/* <video
					src={Headerbackground}
					autoplay
					loop
					muted
					type="video/mp.4"
				></video> */}

			<h2>Raver Blog</h2>
			<h1>노리소리</h1>
			<p>
				Awesome place to make peace & love for eachother
				<br /> enjoyed and entertained throuth weekly updates.
			</p>
		</header>
	);
}

export default Header


