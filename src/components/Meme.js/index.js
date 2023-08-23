import React, { useState, useEffect } from 'react';

export default function Meme() {
	// const [memeImage, setMemeImage] = useState(
	// 	'https://i.imgflip.com/46e43q.png'
	// );
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/46e43q.png',
	});
	const [allMemes, setAllMemeImages] = useState([]);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);

	function getImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;

		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}
	return (
		<section>
			<div className="meme-container">
				<div className="form">
					<div className="input-container">
						<input
							className="meme-input"
							placeholder="Meme setup"
							type="text"
							name="topText"
							value={meme.topText}
							onChange={handleChange}
						/>
						<input
							className="meme-input"
							placeholder="Meme punchline"
							type="text"
							name="bottomText"
							value={meme.bottomText}
							onChange={handleChange}
						/>
					</div>
					<button className="meme-button" onClick={getImage}>
						Get a new meme image 🖼️{' '}
					</button>
				</div>
				<div className="meme">
					<img src={meme.randomImage} alt="new meme" className="meme--image" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>{' '}
			</div>
		</section>
	);
}
