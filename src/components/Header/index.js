import React from 'react';

export default function Header() {
	return (
		<header className="header-container">
			<div className="logo-container">
				<img className="logo" src="./logo.svg" alt="" />

				<h1 className="title">Meme Generator</h1>
			</div>
			<h4 className="subtitle">Made by devTom</h4>
		</header>
	);
}
