import Button from '../../components/button/Button';
import logo from '../../resource/r&m.png';
import './home.css';

const Home = ({ onClick }) => {
	return (
		<div className='home'>
			<div>
				<img className='img-page' src={logo} alt='Rick & Morty Logo' />
			</div>
			<div>
				<Button onClick={onClick}>Let's Go</Button>
			</div>
		</div>
	);
};

export default Home;