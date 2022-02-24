import { useState } from 'react';
import Home from './pages/home/Home.jsx';
import Characters from './pages/characters/Characters';

function App() {
	const [characters, setCharacters] = useState(null);

	const reqAPI = async () => {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		const characterAPI = await res.json();
		setCharacters(characterAPI.results);
	};

	return (
		<div className='App'>
			{characters ? (
				<Characters characters={characters} setCharacters={setCharacters} />
			) : (
				<Home onClick={reqAPI} />
			)}
		</div>
	);
}

export default App;
