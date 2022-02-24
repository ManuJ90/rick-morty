import './card.css';

const Card = ({ image, name, status, species, type, gender }) => {
	return (
		<div className='card-container'>
			<img src={image} alt={name} />
			<h2>{name}</h2>

			<div className='neon'>
				<h3>
					{status === 'Alive' ? (
						<>
							<span className='neon-alive'>
								<span className='flickering1'>A</span>
								<span className='flickering2'>L</span>
								<span className='flickering3'>I</span>
								<span className='flickering4'>V</span>
								<span className='flickering5'>E</span>
							</span>
						</>
					) : (
						<>
							<span className='neon-dead'>
								<span className='flickering1'>D</span>
								<span className='flickering2'>E</span>
								<span className='flickering3'>A</span>
								<span className='flickering4'>D</span>
							</span>
						</>
					)}
				</h3>
			</div>
			<p>{species}</p>
			<p>{gender}</p>
		</div>
	);
};

export default Card;
