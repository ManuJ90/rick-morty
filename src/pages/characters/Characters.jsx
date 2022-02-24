import './characters.css';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

const Characters = ({ characters, setCharacters }) => {
	const backToHome = (e) => {
		setCharacters(null);
	};

	return (
		<>
			<div className='btnhome'>
				<Button onClick={backToHome}>Back to Home Page</Button>
			</div>

			<span className='card-list'>
				{characters.map((character) => (
					<Card
						key={character.id}
						image={character.image}
						name={character.name}
						status={character.status}
						species={character.species}
						type={character.type}
						gender={character.gender}
					/>
				))}
			</span>
		</>
	);
};

export default Characters;
