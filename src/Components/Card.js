import { Link } from 'react-router-dom';
import '../Styles/Card.css';

export default function Card({id, title, cover}) {

	return (
		<Link to={`/Appart/${id}`} className="card">
			<img className="img-loc" src={cover} alt={title} />
			<h3 className= "title-loc">{title}</h3>	
		</Link>
	)
}